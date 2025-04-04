const videoV1Video = document.querySelector('.video-v-1__video');

if (videoV1Video) {
  videoV1Video.addEventListener('click', (event) => {
    const isPlayBtn = event.target.classList.contains('video-v-1__video-play');
    if (isPlayBtn) event.currentTarget.classList.add('active');
  });
}
