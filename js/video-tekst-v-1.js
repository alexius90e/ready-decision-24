const videoTekstV1Video = document.querySelector('.video-tekst-v-1__video');

if (videoTekstV1Video) {
  videoTekstV1Video.addEventListener('click', (event) => {
    const isPlayBtn = event.target.classList.contains('video-tekst-v-1__video-play');
    if (isPlayBtn) event.currentTarget.classList.add('active');
  });
}
