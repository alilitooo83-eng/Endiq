export async function startCamera(videoElement) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
      },
      audio: false,
    });

    videoElement.srcObject = stream;

    return stream;
  } catch (error) {
    console.error("Camera Error:", error);
    throw error;
  }
}

export function stopCamera(stream) {
  if (!stream) return;

  stream.getTracks().forEach((track) => track.stop());
}