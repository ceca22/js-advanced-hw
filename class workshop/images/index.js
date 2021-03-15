

const baseUrl = "https://restcountries.eu/rest/v2/";

let input = document.getElementById('inputCountry')

let searchButton = document.getElementById('search')

let result = document.getElementById('result')

const loader = document.getElementById("loader");


const getCountryName = (input) => {
    const getCountryUrl = `${baseUrl}name/${input}`
    
    toggleLoader(true);

    fetch(getCountryUrl)
    .then(res => res.json())
    .then(countries => {
        toggleLoader(false);
        displayCountries(countries)
    })
    .catch(error => {
        toggleLoader(false)
        console.error(error)
    })
    .finally(() => console.log('Data taken'))
}


let displayCountries = countries => {
    if ( countries !== null ){
        result.innerHTML = '';
        result.innerHTML += `
        <div class="row">
            <div class="col-md-2">Flag</div>
            <div class="col-md-2">Name</div>
            <div class="col-md-1">Population</div>
            <div class="col-md-1">Capital</div>
            <div class="col-md-1">Area</div>
            <div class="col-md-2">Language</div>
            <div class="col-md-3">Currency</div>
                
        </div>`

        for ( const country of countries){
            //debugger;
            result.innerHTML += `
                <div class="row">
                <div class="col-md-2"> ${country.alpha2Code} flag</div>
                <div class="col-md-2"> ${country.name} </div>
                <div class="col-md-1"> ${country.population} </div>
                <div class="col-md-1"> ${country.capital}</div>
                <div class="col-md-1"> ${country.area}</div>
                
                <div class="col-md-2"> ${country.languages.map(lang => lang.name)}</div>
                <div class="col-md-3"> ${country.currencies.map(cur => cur.name)} </div>
                

                </div>
        `
    }
        
    }
}

const toggleLoader = toggle => {
    // debugger;
    if (toggle)
        loader.style.display = "block";
    else
        loader.style.display = "none";
}


searchButton.addEventListener('click', () => {
    let inputValue = input.value;

    getCountryName(inputValue)
})



