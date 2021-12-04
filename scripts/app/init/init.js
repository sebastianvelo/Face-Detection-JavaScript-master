const initModels = () => {
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(startVideo)
};
const initDetections = () => {
    const canvas = getCanvas();
    setInterval(async () => {
        const detections = await getDetections(canvas);
        clearCanvas(canvas);
        drawAll({ canvas, detections });
    }, 100)
    document.body.append(canvas)
}
