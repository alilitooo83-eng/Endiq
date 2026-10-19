function CameraView({ videoRef }) {
  return (
    <main className="video-area">
      <div className="camera-placeholder">
        <h3>Remote Camera</h3>

        <video
          ref={videoRef}
          className="self-camera"
          autoPlay
          playsInline
          muted
        />
      </div>
    </main>
  );
}

export default CameraView;