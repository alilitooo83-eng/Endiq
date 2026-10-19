import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useCamera from "../../hooks/useCamera";
import useWebRTC from "../../hooks/useWebRTC";

import socket from "../../services/socket";

import SessionHeader from "../../components/Session/SessionHeader";
import CameraView from "../../components/Session/CameraView";
import Toolbar from "../../components/Session/Toolbar";

import {
  createSession,
  getSession,
  clearSession,
  getSessionLink,
  ensureHostRole,
  isHost,
  isGuest,
} from "../../services/session";

import "../../components/Session/Session.css";
import "./Session.css";

function Session() {
  const navigate = useNavigate();

  // الكاميرا
  const { videoRef, stream } = useCamera();

  // WebRTC
  const {
    createPeer,
    createOffer,
    receiveOffer,
    createAnswer,
    receiveAnswer,
    addIceCandidate,
    closePeer,
    setOnIceCandidate,
  } = useWebRTC();

  const [sessionId, setSessionId] = useState("");
  const [sessionLink, setSessionLink] = useState("");

  useEffect(() => {
    let id = getSession();

    if (!id) {
      id = createSession();
    }

    ensureHostRole();

    setSessionId(id);
    setSessionLink(getSessionLink());

    createPeer();

    // إرسال ICE Candidates إلى السيرفر
    setOnIceCandidate((candidate) => {
      socket.emit("ice-candidate", {
        roomId: id,
        candidate,
      });

      console.log("📡 ICE Candidate sent");
    });

    if (!socket.connected) {
      socket.connect();
    }

    const handleConnect = () => {
      console.log("🟢 Connected:", socket.id);

      socket.emit("join-room", id);

      console.log("📦 Joined room:", id);
    };

    // ==========================
    // HOST
    // ==========================
    const handleUserJoined = async (userId) => {
      console.log("🎉 User joined:", userId);

      const offer = await createOffer();

      console.log("📤 Offer:", offer);

      socket.emit("offer", {
        roomId: id,
        offer,
      });

      console.log("📡 Offer sent");
    };

    const handleAnswer = async (answer) => {
      console.log("📥 Answer received");

      await receiveAnswer(answer);

      console.log("✅ Connection completed");
    };

    // ==========================
    // GUEST
    // ==========================
    const handleOffer = async (offer) => {
      console.log("📥 Offer received");

      await receiveOffer(offer);

      const answer = await createAnswer();

      console.log("📤 Answer:", answer);

      socket.emit("answer", {
        roomId: id,
        answer,
      });

      console.log("📡 Answer sent");
    };

    // استقبال ICE Candidate
    const handleIceCandidate = async (candidate) => {
      console.log("🧊 ICE Candidate received");

      await addIceCandidate(candidate);
    };

    socket.on("connect", handleConnect);
    socket.on("ice-candidate", handleIceCandidate);

    if (isHost()) {
      console.log("👑 Role: HOST");

      socket.on("user-joined", handleUserJoined);
      socket.on("answer", handleAnswer);
    }

    if (isGuest()) {
      console.log("🙋 Role: GUEST");

      socket.on("offer", handleOffer);
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("user-joined", handleUserJoined);
      socket.off("offer", handleOffer);
      socket.off("answer", handleAnswer);
      socket.off("ice-candidate", handleIceCandidate);

      socket.disconnect();

      closePeer();
    };
  }, []);

  function endSession() {
    clearSession();

    navigate("/");
  }

  async function shareSession() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Endiq Session",
          text: "Join my Endiq session",
          url: sessionLink,
        });
      } catch (e) {
        // تجاهل إذا أغلق المستخدم نافذة المشاركة
      }
    } else {
      await navigator.clipboard.writeText(sessionLink);

      alert("Link copied!\n\n" + sessionLink);
    }
  }

  return (
    <div className="session-page">
      <SessionHeader sessionId={sessionId} />

      <CameraView videoRef={videoRef} />

      <Toolbar
        onEnd={endSession}
        onShare={shareSession}
      />
    </div>
  );
}

export default Session;