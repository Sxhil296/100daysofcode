function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');


    const hourString = `${hours}`
    const minString = `${minutes}`
    const secString = `${seconds}`
    document.getElementById('hours').textContent = hourString
    document.getElementById('minutes').textContent = minString
    document.getElementById('seconds').textContent = secString
}

setInterval(updateTime, 1000); // Update time every second
updateTime();