import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  // دخول الغرفة
  socket.on("join-room", (roomId) => {
    socket.join(roomId);

    console.log(`📦 ${socket.id} joined room ${roomId}`);

    socket.to(roomId).emit("user-joined", socket.id);
  });

  // استقبال Offer وإرسالها للطرف الآخر
  socket.on("offer", ({ roomId, offer }) => {
    console.log("📤 Offer received");

    socket.to(roomId).emit("offer", offer);
  });

  // استقبال Answer وإرسالها للطرف الآخر
  socket.on("answer", ({ roomId, answer }) => {
    console.log("📥 Answer received");

    socket.to(roomId).emit("answer", answer);
  });

  // استقبال ICE Candidate وإرساله للطرف الآخر
  socket.on("ice-candidate", ({ roomId, candidate }) => {
    console.log("🧊 ICE Candidate received");

    socket.to(roomId).emit("ice-candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});