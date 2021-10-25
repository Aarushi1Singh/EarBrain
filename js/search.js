const zip = document.getElementById("zip");
const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");
const searchGps = document.getElementById("searchGps");
const countryList = document.getElementById("countryList");
const countryBtn = document.getElementById("countryBtn");

    function unSelectDropDownSearchGps(){
        zip.style.backgroundColor = "";
        country.style.backgroundColor = '#CEC4C4';
        state.style.backgroundColor = '#CEC4C4';
        city.style.backgroundColor = '#CEC4C4';
        searchGps.style.backgroundColor = '#CEC4C4';
    }

    function unSelectZipGps(){
        country.style.backgroundColor = "";
        state.style.backgroundColor = "";
        city.style.backgroundColor = "";
        zip.style.backgroundColor = '#CEC4C4';
        searchGps.style.backgroundColor = '#CEC4C4';

        document.getElementById("showCountry").style.display = 'block';        
    }

    function unSelectZipDropDown(){
        searchGps.style.backgroundColor = "";
        zip.style.backgroundColor = "#CEC4C4";
        country.style.backgroundColor = '#CEC4C4';
        state.style.backgroundColor = '#CEC4C4';
        city.style.backgroundColor = '#CEC4C4';
    }

zip.addEventListener('click', unSelectDropDownSearchGps);
country.addEventListener('click', unSelectZipGps);
searchGps.addEventListener('click', unSelectZipDropDown);






