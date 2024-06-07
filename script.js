var inputvalue=document.querySelector('#cityInput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var desc=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');

apik="36aa67b655636ebb8ae7afe88e172e72"
function convertion(val){
  return (val-273).toFixed(3)
}
btn.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
      var nameval = data['name'];
      var descrip = data['weather'][0]['description'];
      var temperature = data['main']['temp'];
      var wndspeed = data['wind']['speed'];

      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${convertTemperature(temperature)}C</span>`;
      description.innerHTML = `Sky Condition: <span>${descrip}</span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspeed} m/s</span>`;
    })
    .catch(err => alert('You entered wrong city name'));
});

function convertTemperature(tempKelvin) {
  return (tempKelvin - 273.15).toFixed(2); // Convert Kelvin to Celsius and round to 2 decimal places
}
