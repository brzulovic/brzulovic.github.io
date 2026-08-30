// Generates floating circles for background
document.addEventListener('DOMContentLoaded', function() {
    const bgAnimation = document.getElementById('bgAnimation');
    
    if (bgAnimation) {
        for (let i = 0; i < 15; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            
            // Random size between 50px and 200px
            const size = Math.random() * 150 + 50;
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            
            // Random position
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration
            circle.style.animationDuration = `${Math.random() * 20 + 10}s`;
            circle.style.animationDelay = `${Math.random() * 5}s`;
            
            bgAnimation.appendChild(circle);
        }
    }

    function updateColors() {
        document.documentElement.style.setProperty('--text-color', 'rgba(255, 255, 255, 0.85)');
        document.documentElement.style.setProperty('--icon-color', 'rgba(255, 255, 255, 0.7)');
    }
    updateColors();
});

function updateBackgroundColor() {
    const now = new Date();
    const totalHours = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;

    if (totalHours >= 8 && totalHours <= 20) {
        // Progress t: 0 at 08:00, 1 at 20:00
        const t = (totalHours - 8) / 12;

        // Linear interpolation of Hue: from 360deg to 0deg
        // Formula: StartHue + (EndHue - StartHue) * t
        const hue = 360 + (0 - 360) * t;

        // Set background using HSL (Saturation and Lightness remain constant)
        document.body.style.backgroundColor = `hsl(${hue}deg 22.56% 25.97%)`;
    } else {
        // Night time color
        document.body.style.backgroundColor = '#1a1a2e';
    }
}

function randomBackgroundColor() {
        const hue = 360 * Math.random();
        // Set background using HSL (Saturation and Lightness remain constant)
        document.body.style.backgroundColor = `hsl(${hue}deg 22.56% 25.97%)`;
}


// Initial call and interval for real-time update
//updateBackgroundColor();
//setInterval(updateBackgroundColor, 1000);
randomBackgroundColor();
setInterval(randomBackgroundColor, 1000*60);
