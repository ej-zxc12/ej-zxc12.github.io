document.addEventListener('DOMContentLoaded', function() {
    // Image Gallery
    const gallery = document.getElementById('gallery');
    
    // Sample images - Replace with your own images
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Create gallery items with months
    const totalMonths = 12;
    
    for (let i = 0; i < totalMonths; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item-container';
        galleryItem.innerHTML = `
            <div class="month-name">${months[i]}</div>
            <div class="gallery-item">
                <img src="images/memory${i + 1}.jpg" alt="Memory ${i + 1}" loading="lazy">
            </div>
        `;
        gallery.appendChild(galleryItem);
    }

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Create floating flowers
    const flowers = ['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '💐', '🌸'];
    
    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.animationDuration = (Math.random() * 10 + 10) + 's';
        flower.style.animationDelay = (Math.random() * 5) + 's';
        document.body.appendChild(flower);
        
        // Remove flower after animation
        setTimeout(() => {
            flower.remove();
        }, 15000);
    }

    // Create floating elements at intervals
    setInterval(createHeart, 300);
    setInterval(createFlower, 2000);

    // Secret Button Popup
    const secretButton = document.getElementById('secret-button');
    const popupOverlay = document.getElementById('popup-overlay');
    let currentPopup = 0;
    
    const popups = [
        {
            message: "Sigurado ka gusto mo pindutin?",
            yesText: "Yes",
            noText: "No",
            noPosition: { top: '20%', left: '70%' }
        },
        {
            message: "Gusto mo talaga ha?",
            yesText: "Yes",
            noText: "No",
            noPosition: { top: '70%', left: '20%' }
        },
        {
            message: "Sure ka talaga ha?",
            yesText: "100% Yes!",
            noText: "No",
            noPosition: { top: '30%', left: '20%' }
        },
        {
            message: "Sure na sure na sure ha?",
            yesText: "YESSSSSSSSSSSSS",
            noText: "no",
            noPosition: { top: '80%', left: '70%' }
        }
    ];

    function showPopup(index) {
        const popup = popups[index];
        popupOverlay.innerHTML = `
            <div class="popup" style="position: absolute; top: ${popup.noPosition.top}; left: ${popup.noPosition.left};">
                <h3>${popup.message}</h3>
                <div class="popup-buttons">
                    <button class="popup-button yes">${popup.yesText}</button>
                    <button class="popup-button no">${popup.noText}</button>
                </div>
            </div>
        `;
        popupOverlay.style.display = 'flex';

        // Add event listeners to the new buttons
        document.querySelector('.popup-button.yes').addEventListener('click', () => {
            if (index === popups.length - 1) {
                // Last popup - show the special video
                showSpecialVideo();
            } else {
                // Show next popup
                currentPopup++;
                showPopup(currentPopup);
            }
        });

        document.querySelector('.popup-button.no').addEventListener('click', () => {
            // Move the popup to a random position
            const popup = document.querySelector('.popup');
            const randomTop = Math.random() * 70 + 5; // 5-75%
            const randomLeft = Math.random() * 70 + 5; // 5-75%
            popup.style.top = `${randomTop}%`;
            popup.style.left = `${randomLeft}%`;
        });
    }

    function showSpecialVideo() {
        popupOverlay.innerHTML = `
            <div id="special-message-container">
                <div class="message-card">
                    <div class="message-header">
                        <span class="message-icon">💌</span>
                        <h2>Merry Christmas, My Love! 🎄</h2>
                    </div>
                    
                    <div class="message-content">
                        <div class="message-text">
                            <p>To the most amazing person in my life,</p>
                            <p class="highlight">You make every day feel like Christmas morning.</p>
                            <p>Your smile lights up my world brighter than any holiday lights.</p>
                            <p class="highlight">I'm so grateful to have you by my side.</p>
                            <p>You're my favorite gift this Christmas and always.</p>
                            <div class="signature">
                                <p>Forever yours,</p>
                                <p class="signature-name">Ej</p>
                            </div>
                        </div>
                        
                        <div class="photo-frame">
                            <img src="images/our-phot1.jpg" alt="Us together" class="our-photo">
                            <div class="photo-caption">Our Beautiful Moments Together</div>
                        </div>
                    </div>
                    
                    <div class="message-footer">
                        <p>Here's a little something special for you...</p>
                        <a href="https://www.youtube.com/watch?v=QfTA3a_H-XU&t=2s" target="_blank" class="youtube-button">
                            <span class="play-icon">▶️</span> Click to Watch Our Special Video
                        </a>
                    </div>
                    
                    <div class="snowflakes"></div>
                </div>
                <button class="close-video">Close</button>
            </div>
        `;
        
        // Add snowflakes effect
        createSnowflakes();
        
        // Add floating hearts effect
        const heartsInterval = setInterval(() => {
            createFloatingHeart();
        }, 800);
        
        // Close button functionality
        document.querySelector('.close-video').addEventListener('click', () => {
            clearInterval(heartsInterval);
            popupOverlay.style.display = 'none';
        });
        
        // Helper function to create snowflakes
        function createSnowflakes() {
            const container = document.querySelector('.snowflakes');
            const snowflakes = 20;
            
            for (let i = 0; i < snowflakes; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.innerHTML = '❄';
                snowflake.style.left = Math.random() * 100 + 'vw';
                snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
                snowflake.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(snowflake);
            }
        }
        
        // Helper function to create floating hearts
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.querySelector('.message-card').appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    secretButton.addEventListener('click', () => {
        currentPopup = 0;
        showPopup(currentPopup);
    });

    // Add click effect
    document.addEventListener('click', function(e) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.animationDuration = '2s';
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    });

    // Add keyboard controls
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight') {
            nextSong();
        } else if (e.code === 'ArrowLeft') {
            prevSong();
        }
    });
});
