const main = () => {
  initModels();
  video.addEventListener('play', initDetections);
}
main();