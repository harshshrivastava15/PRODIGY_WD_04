

const apiKey="f0c39ec493d5c9ef81d6592d813d8fe4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
var search = document.getElementById('search');
let butn = document.getElementById('btn');

async function checkweather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humid').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/hr";
    document.querySelector('.temp').innerHTML=`${(data.main.temp-273.15).toFixed(1)}°C`;
    let icons = data.weather[0].icon;
    console.log(icons)
    const iconIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    iconIds.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    switch (icons) {
        case '01d':
        case '01n':
          document.getElementById('1').style.display="block"
          break;
        case '02d':
        case '02n':
          document.getElementById('2').style.display="block"
          break;
        case '03d':
        case '03n':
          document.getElementById('3').style.display="block"
          break;
        case '04d':
        case '04n':
          document.getElementById('4').style.display="block"
          break;
        case '09d':
        case '09n':
          document.getElementById('5').style.display="block"
          break;
        case '10d':
        case '10n':
          document.getElementById('6').style.display="block"
          break;
        case '11d':
        case '11n':
          document.getElementById('7').style.display="block"
          break;
        case '13d':
        case '13n':
          document.getElementById('8').style.display="block"
          break;
        case '50d':
        case '50n':
          document.getElementById('9').style.display="block"
          break;
        default:
          // Default code
      }
      
      



}

checkweather("nagpur");
butn.addEventListener("click", ()=>{
    checkweather(search.value);
})
