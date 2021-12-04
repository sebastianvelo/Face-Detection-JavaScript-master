const getCanvas = () => faceapi.createCanvasFromMedia(video);
const clearCanvas = (canvas) => canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);