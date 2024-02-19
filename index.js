// Example: Blinking Cursor Effect
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.animation = 'blink 1s infinite';
    document.body.appendChild(cursor);
});

