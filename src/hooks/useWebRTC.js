import { useRef } from "react";

const configuration = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};

export default function useWebRTC() {
  const peerRef = useRef(null);

  const onIceCandidateRef = useRef(null);

  // إنشاء PeerConnection
  function createPeer() {
    if (peerRef.current) return peerRef.current;

    const peer = new RTCPeerConnection(configuration);

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("🧊 ICE Candidate");

        if (onIceCandidateRef.current) {
          onIceCandidateRef.current(event.candidate);
        }
      }
    };

    peer.ontrack = (event) => {
      console.log("📺 Remote track received");
    };

    peer.onconnectionstatechange = () => {
      console.log("📡 Connection State:", peer.connectionState);
    };

    peer.oniceconnectionstatechange = () => {
      console.log("🌐 ICE State:", peer.iceConnectionState);
    };

    peerRef.current = peer;

    console.log("✅ PeerConnection created");

    return peer;
  }

  // ربط الكاميرا بالـ PeerConnection
  function attachStream(stream) {
    if (!peerRef.current || !stream) return;

    const senders = peerRef.current.getSenders();

    stream.getTracks().forEach((track) => {
      const exists = senders.some(
        (sender) => sender.track === track
      );

      if (!exists) {
        peerRef.current.addTrack(track, stream);

        console.log("➕ Track added:", track.kind);
      }
    });

    console.log("📹 Local tracks attached");
  }

  // إنشاء Offer
  async function createOffer() {
    if (!peerRef.current) return null;

    const offer = await peerRef.current.createOffer();

    await peerRef.current.setLocalDescription(offer);

    console.log("📤 Offer created");

    return offer;
  }

  // استقبال Offer
  async function receiveOffer(offer) {
    if (!peerRef.current) return;

    await peerRef.current.setRemoteDescription(
      new RTCSessionDescription(offer)
    );

    console.log("📥 Offer received");
  }

  // إنشاء Answer
  async function createAnswer() {
    if (!peerRef.current) return null;

    const answer = await peerRef.current.createAnswer();

    await peerRef.current.setLocalDescription(answer);

    console.log("📤 Answer created");

    return answer;
  }

  // استقبال Answer
  async function receiveAnswer(answer) {
    if (!peerRef.current) return;

    await peerRef.current.setRemoteDescription(
      new RTCSessionDescription(answer)
    );

    console.log("📥 Answer received");
  }

  // إضافة ICE Candidate
  async function addIceCandidate(candidate) {
    if (!peerRef.current || !candidate) return;

    await peerRef.current.addIceCandidate(
      new RTCIceCandidate(candidate)
    );

    console.log("🧊 ICE added");
  }

  // Callback لإرسال ICE إلى السيرفر
  function setOnIceCandidate(callback) {
    onIceCandidateRef.current = callback;
  }

  // إغلاق الاتصال
  function closePeer() {
    if (peerRef.current) {
      peerRef.current.close();
      peerRef.current = null;

      console.log("❌ PeerConnection closed");
    }
  }

  return {
    peerRef,

    createPeer,
    attachStream,

    createOffer,
    receiveOffer,

    createAnswer,
    receiveAnswer,

    addIceCandidate,
    setOnIceCandidate,

    closePeer,
  };
}