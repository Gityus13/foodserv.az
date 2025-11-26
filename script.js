document.addEventListener('DOMContentLoaded', () => {
    // Randomize leaf positions on mobile for better UX
    if (window.innerWidth <= 768) {
        const leaves = document.querySelectorAll('.leaf');
        leaves.forEach(leaf => {
            const randomTop = Math.floor(Math.random() * 80) + 5;
            const randomLeft = Math.floor(Math.random() * 80) + 5;
            leaf.style.top = `${randomTop}%`;
            leaf.style.left = `${randomLeft}%`;
        });
    }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('a');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});
