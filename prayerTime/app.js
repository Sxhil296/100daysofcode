// Define the API endpoint for fetching prayer times
const apiUrl = 'https://api.aladhan.com/v1/timingsByCity';

// Get references to HTML elements
const locationInput = document.getElementById('location');
const fetchButton = document.getElementById('fetch-prayer-times');
const prayerTimesList = document.getElementById('prayer-times-list');

// Add a click event listener to the fetch button
fetchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a location (e.g., City, Country)');
        return;
    }

    // Fetch prayer times based on the user's location
    fetch(`${apiUrl}?city=${location}&country=`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        // Extract prayer times data
        const prayerTimes = data.data.timings;

        // Define the prayers you want to display
        const prayersToDisplay = {
            Fajr: prayerTimes.Fajr,
            Dhuhr: prayerTimes.Dhuhr,
            Asr: prayerTimes.Asr,
            Maghrib: prayerTimes.Maghrib,
            Isha: prayerTimes.Isha,
            Sunrise: prayerTimes.Sunrise,
            Sunset: prayerTimes.Sunset,
            Imsak: prayerTimes.Imsak
        };

        // Clear previous results
        prayerTimesList.innerHTML = '';

        // Display prayer times
        for (const [key, value] of Object.entries(prayersToDisplay)) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
            prayerTimesList.appendChild(listItem);
        }
    })
    .catch(error => {
        console.error('Error fetching prayer times:', error);
        alert('An error occurred while fetching prayer times. Please try again later.');
    });
});
