
import { weather_data } from './data.js';


let loadDayForecastData = (city_select) => {
    let keys = Object.keys(weather_data[city_select]);
    for (let j = 1; j <  8; j++){
        let show = document.getElementById(keys[j]);
        show.textContent = weather_data[city_select][keys[j]];
    };

    let card_content = weather_data[city_select].forecast_today;
    for(let value in card_content){
        let claves = Object.keys(card_content[value]);
        for(let i = 1; i < claves.length; i++){
            let elem = document.getElementById(card_content[value].lapse+"_"+claves[i]);
            elem.textContent = card_content[value][claves[i]];
        };
    };
};


let loadWeekForecastData = (index) => {
    let element_data = document.getElementsByClassName("list-group");
    let data = weather_data[index].forecast_week;
    data.forEach(function(week_content){
        let mess = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                        <div class="d-flex flex-column">
                            <h6 class="mb-1 text-dark font-weight-bold text-sm">${week_content.text}</h6>
                            <span class="text-xs">${week_content.date}</span>
                        </div>
                        <div class="d-flex align-items-center ">
                            <span class="font-weight-bold text-dark mx-2">${week_content.temperature.max}</span |  <span class="text-dark mx-2">${week_content.temperature.min}</span>
                            <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${week_content.icon}</i></div>
                        </div>
                    </li>`;
        element_data[0].innerHTML+=mess;
    });
};


document.addEventListener("DOMContentLoaded", (event) => {
    loadCities();
    let selection = document.getElementById("dropdownMenuButton");
    selection.addEventListener('change', (event) => {
        clean();
        let selectedValue = event.target.value; 
        loadDayForecastData(selectedValue);
        let element = document.getElementById("loadinfo");
        element.addEventListener('click', (event) => {
        loadWeekForecastData(selectedValue);
        selectedValue = null;
        });
    });
    
});


let loadCities = () => {
    let menu = document.getElementById("dropdownMenuButton");
    for(let i = 0; i <  weather_data.length; i++ ){
        var opcion = document.createElement("option");
        opcion.value = i;
        opcion.text = weather_data[i].city;
        menu.add(opcion);
    }
};

const clean = () => {
    let element = document.getElementsByClassName("list-group");
    element[0].innerHTML = ``;
  };
  