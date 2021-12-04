const matchDimensions = (canvas) => {
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    return displaySize;
}
const getDetections = async (canvas) => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    return faceapi.resizeResults(detections, matchDimensions(canvas));
};
const drawAll = ({ canvas, detections }) => {
    faceapi.draw.drawDetections(canvas, detections)
    faceapi.draw.drawFaceLandmarks(canvas, detections)
    faceapi.draw.drawFaceExpressions(canvas, detections)
}