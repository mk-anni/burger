function ready() {
  const videoPlayer = document.getElementById('video_player');
  const controlsPlay = document.getElementById('controls_play');
  const controlsProgress = document.getElementById('controls_progress');
  const controlsVolumeBtn = document.getElementById('controls_volume-btn');
  const controlsVolume = document.getElementById('volume');

  let videoFlag = false;
  let soundFlag = false;

  const beginVideo = () => {
    if (!videoFlag) {
      videoPlayer.play();
      videoFlag = true;
      controlsPlay.classList.add('play');
    } else {
      videoPlayer.pause();
      videoFlag = false;
      controlsPlay.classList.remove('play');
    }
  };

  const sound = () => {
    if (!soundFlag) {
      videoPlayer.volume = 0;
      soundFlag = true;
    } else {
      videoPlayer.volume = 1;
      soundFlag = false;
    }
  };
  let progressVideo = () => {
    videoPlayer.currentTime = Math.floor((videoPlayer.duration/100) * controlsProgress.value);
  }
  videoPlayer.addEventListener('timeupdate', () => {
    let percent = Math.floor((100/videoPlayer.duration) * videoPlayer.currentTime);
    controlsProgress.value = percent;
  });
  let volumeVideo = () => {
    videoPlayer.volume = volume.value/100;
  }

  controlsPlay.addEventListener('click', beginVideo);
  controlsVolumeBtn.addEventListener('click', sound);
  controlsProgress.addEventListener('input', progressVideo);
  controlsVolume.addEventListener('input', volumeVideo);
};
document.addEventListener("DOMContentLoaded", ready);