const musicCards = document.querySelectorAll(".music-card");

musicCards.forEach(card => {
    const audio = card.querySelector(".audio");
    const playButton = card.querySelector(".music-play");
    const prevButton = card.querySelector(".prev-btn");
    const nextButton = card.querySelector(".next-btn");
    const progress = card.querySelector(".progress");
    const currentTime = card.querySelector(".current-time");
    const duration = card.querySelector(".duration");

    playButton.addEventListener("click", () => {
        musicCards.forEach(otherCard => {
            const otherAudio = otherCard.querySelector(".audio");
            const otherButton = otherCard.querySelector(".music-play");

            if (otherAudio !== audio) {
                otherAudio.pause();
                otherButton.textContent = "▶";
            }
        });

        if (audio.paused) {
            audio.play();
            playButton.textContent = "⏸";
        } else {
            audio.pause();
            playButton.textContent = "▶";
        }
    });

    audio.addEventListener("loadedmetadata", () => {
        progress.max = audio.duration;
        duration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
        progress.value = audio.currentTime;
        currentTime.textContent = formatTime(audio.currentTime);
    });

    progress.addEventListener("input", () => {
        audio.currentTime = progress.value;
    });

    audio.addEventListener("ended", () => {
        playButton.textContent = "▶";
        progress.value = 0;
        currentTime.textContent = "0:00";
    });

    prevButton.addEventListener("click", () => {
        audio.currentTime = 0;
    });

    nextButton.addEventListener("click", () => {
        audio.currentTime = audio.duration;
    });
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return minutes + ":" + String(seconds).padStart(2, "0");
}
