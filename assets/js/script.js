document.addEventListener('DOMContentLoaded', function () {
    var playButtons = document.querySelectorAll('.play-btn');

    playButtons.forEach(function (playButton) {
        playButton.addEventListener('click', function () {
            var videoContainer = this.parentElement;
            var iframe = videoContainer.querySelector('iframe');

            if (iframe) {
                var videoSrc = iframe.getAttribute('src');
                iframe.setAttribute('src', videoSrc + '?autoplay=1');
                this.style.display = 'none';
            }
        });
    });
});
