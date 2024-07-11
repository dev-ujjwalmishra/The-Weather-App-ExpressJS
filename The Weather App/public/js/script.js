const city = document.getElementById('input-city');
const searchBtn = document.querySelector('.search-btn');
const temp = document.getElementById('temp-cel');
const tempStatus = document.getElementById('temp-status');
const day = document.getElementById('day');
const dateMonth = document.getElementById('date-month');
const msg = document.getElementById('msg');


const date = new Date();

const getDayName = () => {
    
    let dayVal = '';

    if(date.getDay() == 0) dayVal = 'Sunday';
    else if(date.getDay() == 1) dayVal = 'Monday';
    else if(date.getDay() == 2) dayVal = 'Tuesday';
    else if(date.getDay() == 3) dayVal = 'Wednesday';
    else if(date.getDay() == 4) dayVal = 'Thursday';
    else if(date.getDay() == 5) dayVal = 'Friday';
    else if(date.getDay() == 6) dayVal = 'Saturday';

    return dayVal;

}


const getMonthName = () => {
    let monthVal = '';
    if(date.getMonth() == 0) monthVal = 'Jan';
    else if(date.getMonth() == 1) monthVal = 'Feb';
    else if(date.getMonth() == 2) monthVal = 'March';
    else if(date.getMonth() == 3) monthVal = 'April';
    else if(date.getMonth() == 4) monthVal = 'May';
    else if(date.getMonth() == 5) monthVal = 'June';
    else if(date.getMonth() == 6) monthVal = 'July';
    else if(date.getMonth() == 7) monthVal = 'Aug';
    else if(date.getMonth() == 8) monthVal = 'Sept';
    else if(date.getMonth() == 9) monthVal = 'Oct';
    else if(date.getMonth() == 10) monthVal = 'Nov';
    else if(date.getMonth() == 11) monthVal = 'Dec';

    return monthVal;
}


day.innerText = getDayName();
dateMonth.innerText = date.getDate() + ' ' + getMonthName();


searchBtn.addEventListener('click',() => {
    const cityVal = city.value;
    if(!cityVal) {
        msg.innerText = 'Plz enter the city name...';
    }
    else{
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f53ecde89798a9a19298dc31b378749b`;

        fetch(api).then(res => res.json()).then(data => {
            const tempInCel = (data.main.temp - 273.15).toFixed(2);
            temp.innerHTML=`${tempInCel} &deg;C`;
    
            const tempSta = data.weather[0].main;
    
            if(tempSta == 'Rain' || tempSta == 'Clouds'){
                tempStatus.innerHTML = '<i class="fas fa-cloud"></i>';
            }
            else{
                tempStatus.innerHTML = '<i class="fas fa-sun"></i>'
            }

            msg.innerText = `${data.name}  ${data.sys.country}`;
        });
    }
    
});