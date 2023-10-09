document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector("#friend-image");
    const hamburger = document.querySelector(".hamburger");
    const mainNav = document.querySelector(".main-nav");

    // Create audio elements for each sound
    const audioElements = {
        ahmed: new Audio("chinese-rap-song.mp3"),
        arooba: new Audio("pew_pew-dknight556-1379997159.mp3"),
        laiba: new Audio("vine-boom-sound-effect_KT89XIq.mp3"),
        aqsa: new Audio("y2mate_5gbydy1.mp3"),
    };

    // Function to change the hero text, image, and play sound
    function changeHeroInfo(newText, newImageSrc, person) {
        heroText.textContent = newText;
        heroImage.src = newImageSrc;

        // Pause and reset all audio elements
        for (const friend in audioElements) {
            audioElements[friend].pause();
            audioElements[friend].currentTime = 0;
        }

        // Play the selected friend's audio
        if (audioElements[person]) {
            audioElements[person].play().catch(function(error) {
                console.error("Error playing audio:", error);
            });
        }
    }

    // Handle navigation menu clicks
    const navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Get the text, image source, and person's name from the clicked link
            const newText = this.textContent + "'s Soundboard";
            const newImageSrc = this.getAttribute("data-image-src");
            const person = this.getAttribute("data-person");

            // Change the hero text, image, and play the sound for the selected friend
            changeHeroInfo(newText, newImageSrc, person);

            // For smaller screens, close the hamburger menu after clicking a link
            if (window.innerWidth <= 768) {
                mainNav.classList.remove("active");
            }
        });
    });

    // Toggle the hamburger menu for smaller screens
    hamburger.addEventListener("click", function () {
        mainNav.classList.toggle("active");
    });
});
