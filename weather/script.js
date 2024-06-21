
document.addEventListener('DOMContentLoaded', function () {
  const apiKey = '62d7a50e6f4b25ed70de07839c010508';
  const submitBtn = document.getElementById('submit');
  const weatherContainer = document.getElementById('weather-container');
  const weatherIcon = document.getElementById('icon');

  weatherContainer.style.display = 'none';

  submitBtn.addEventListener('click', function () {
    const city = document.getElementById('city').value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const location = data.name;
        const weather = data.weather[0].main;
        const temperature = Math.round(data.main.temp);
        const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let activity;

        if (weather === 'Clear') {
          activity = "It's a sunny day! You can go for a walk, have a picnic, or play outdoor sports.";
        } else if (weather === 'Clouds') {
          activity = "It's a cloudy day. How about watching a movie, reading a book, or going for a bike ride?";
        } else if (weather === 'Rain') {
          activity = "It's raining. You can stay indoors and enjoy a warm cup of tea, watch a movie, or play board games.";
        } else if (weather === 'Drizzle') {
          activity = "It's drizzling. You might want to take an umbrella if you go out, or enjoy a cozy indoor activity.";
        } else if (weather === 'Thunderstorm') {
          activity = "There's a thunderstorm outside. It's best to stay indoors, read a book, or listen to some calming music.";
        } else if (weather === 'Snow') {
          activity = "It's snowing. You can build a snowman, have a snowball fight, or stay indoors and enjoy a movie.";
        } else if (weather === 'Mist' || weather === 'Haze') {
          activity = "It's misty or hazy outside. You might want to take it easy and enjoy a hot beverage.";
        } else if (weather === 'Fog') {
          activity = "It's foggy outside. Be cautious while driving and consider staying indoors.";
        } else if (weather === 'Smoke' || weather === 'Dust' || weather === 'Sand') {
          activity = "There's smoke, dust, or sand in the air. It's best to stay indoors and avoid outdoor activities.";
        } else if (weather === 'Tornado') {
          activity = "There's a tornado warning! Seek shelter immediately and stay indoors.";
        } else if (weather === 'Squall') {
          activity = "There's a squall warning! Seek shelter immediately and stay indoors.";
        } else {
          activity = "Enjoy your day!";
        }

        document.getElementById('location').textContent = location;
        document.getElementById('weather').textContent = weather;
        document.getElementById('temperature').textContent = `${temperature}°C`;
        weatherIcon.setAttribute('src', icon);
        document.getElementById('activity').textContent = activity;

        weatherContainer.style.display = 'block';
      })
      .catch(error => {
        console.log('Error fetching weather data', error);
        alert('Error fetching weather data. Please try again.');
      });
  });
});
