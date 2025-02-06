function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    updateDigit("hours-tens", hours[0]);
    updateDigit("hours-ones", hours[1]);
    updateDigit("minutes-tens", minutes[0]);
    updateDigit("minutes-ones", minutes[1]);
    updateDigit("seconds-tens", seconds[0]);
    updateDigit("seconds-ones", seconds[1]);
}

function updateDigit(id, newValue) {
    const element = document.getElementById(id);
    const front = element.querySelector('.front');
    const back = element.querySelector('.back');
    
    if (front.textContent !== newValue) {
        // Trigger flip only for the changing digit
        element.querySelector('.flip-card').classList.add('flipping');
        
        // After the flip animation completes, update the digit
        setTimeout(() => {
            front.textContent = newValue;
            back.textContent = newValue;
            element.querySelector('.flip-card').classList.remove('flipping'); // Reset the flip
        }, 300); // Time it takes to flip (adjust this if needed)
    }
}

// Initial clock update
updateClock();
setInterval(updateClock, 1000);
