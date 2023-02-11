
import { weather_data } from './data.js';


let loadDayForecastData = () => {
    let keys = Object.keys(weather_data[0]);
    for (let j = 1; j <  8; j++){
        let show = document.getElementById(keys[j]);
        show.textContent = weather_data[0][keys[j]];
    };

    let card_content = weather_data[0].forecast_today;
    for(let value in card_content){
        let claves = Object.keys(card_content[value]);
        for(let i = 1; i < claves.length; i++){
            let elem = document.getElementById(card_content[value].lapse+"_"+claves[i]);
            elem.textContent = card_content[value][claves[i]];
        };
    };
};

let loadWeekForecastData = () => {
	
	
}


loadDayForecastData();
loadWeekForecastData();
