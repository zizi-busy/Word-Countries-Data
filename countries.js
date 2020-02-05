const headNum = document.querySelector('.headerNumber')
const flexContainer = document.querySelector('.flex-container')
const namebtn = document.querySelector('.nameBtn')
const capitalbtn = document.querySelector('.capitalBtn')
const populbtn = document.querySelector('.populBtn')
const inputArea = document.querySelector('.input')
const countriesSortedParagraph = document.querySelector('.countries-sort__paragraph')
const selectPop = document.querySelector('.select')

const url = "https://restcountries.eu/rest/v2/all"
fetch(url)
    .then(response => response.json()) //
    .then(countries => {
     
        function generateCountry() { //FN to GENERATE COUNTRY

          for (const country of countries) {
            
            let div = document.createElement('div')
            let countryName = document.createElement('h4')
            let countryCapital = document.createElement('p')
            let countryPopulation = document.createElement('p')
            let countryLanguage = document.createElement ('p')
            let cntryFlag = document.createElement('img')

            cntryFlag.className = 'flag'

            countryName.textContent =country.name 
            countryCapital.textContent = `Capital:${ country.capital} `           
            countryPopulation.textContent = `Population:${ country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` 
            cntryFlag.src = country.flag
   
          //EXTRACT LANGUAGES
           const langs = []
           for(const language of country.languages){
             langs.push(language.name)
           }
         

           countryLanguage.textContent =`Languages:${langs}` 

            div.appendChild(countryName)
            div.appendChild(countryCapital)
            div.appendChild(countryPopulation)
            div.appendChild(countryLanguage)
            div.appendChild(cntryFlag)
            flexContainer.appendChild(div)
                      
          } //Loop END 
    }

    generateCountry()

    capitalbtn.addEventListener ('click',sortCountries)
   namebtn.addEventListener('click', sortCountries )

    function sortCountries() {
      
      flexContainer.textContent = '';

      generateCountry(countries.reverse()) // generateCountry is fn which creates all the country divs
    }
 
    //TOTAL NUMBER OF COUNTRIES will fill onload with window.onload = function ()
   
    window.onload = totalCountryNumber;

    function totalCountryNumber() {
    
        let num = countries.length
        document.querySelector('.headerNumber').value = num //this is printed in input field ,class '.header number' 
    
    }   
   
    //***********************NAME STARTING WORD*************************************
    namebtn.addEventListener('click', startsWithLetter = () => {
        flexContainer.textContent = '';

        let startsWithLetters = countries.filter((country) => country.name.toLowerCase().startsWith(inputArea.value.toLowerCase()));
 
        for (const country of startsWithLetters) {
                
            let div = document.createElement('div')
            let countryName = document.createElement('h4')
            let countryCapital = document.createElement('p')
            let countryPopulation = document.createElement('p')
            let countryLanguage = document.createElement ('p')
            let cntryFlag = document.createElement('img')

            cntryFlag.className = 'flag'
               
            countryName.textContent =country.name 
            countryCapital.textContent = `Capital:${ country.capital} `           
            countryPopulation.textContent = `Population:${ country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ` 
            cntryFlag.src = country.flag

           
          //EXTRACT LANGUAGES
           const langs = []
           for(const language of country.languages){
             langs.push(language.name)
           }
           countryLanguage.textContent =`Languages:${langs}` 
            
            div.appendChild(countryName)
            div.appendChild(countryCapital)
            div.appendChild(countryPopulation)
            div.appendChild(countryLanguage)
            div.appendChild(cntryFlag)
            flexContainer.appendChild(div)
          
           
            if (startsWithLetters.length < 2 ){
                countriesSortedParagraph.textContent =
                `There is  ${startsWithLetters.length} country starting with '${inputArea.value}'`;
              } else {
                countriesSortedParagraph.textContent =
                `There are  ${startsWithLetters.length} countries starting with '${inputArea.value}'`;
            }
          }
      })
  //***********************CAPITAL STARTING WORD*************************************


    capitalbtn.addEventListener('click', startsWithLetter = () => {
        flexContainer.textContent = '' ;

        let startsWithLetters = countries.filter((country) => country.capital.toLowerCase().startsWith(inputArea.value.toLowerCase()));
 
        for (const country of startsWithLetters) {
                
            let div = document.createElement('div')
            let countryCapital = document.createElement('h4')
            let countryName = document.createElement('p')
            let countryPopulation = document.createElement('p')
            let countryLanguage = document.createElement ('p')
            let cntryFlag = document.createElement('img')

            cntryFlag.className = 'flag'
                
            countryCapital.textContent =country.capital 
            countryName.textContent = `Country: ${ country.name} `           
            countryPopulation.textContent = `Population: ${ country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ` 
            cntryFlag.src = country.flag

         
        //EXTRACT LANGUAGES
         const langs = []
         for(const language of country.languages){
           langs.push(language.name)
         }
         countryLanguage.textContent =`Languages:${langs}` 
          
      
          div.appendChild(countryCapital)
          div.appendChild(countryName)
          div.appendChild(countryPopulation)
          div.appendChild(countryLanguage)
          div.appendChild(cntryFlag)
          flexContainer.appendChild(div)

          if (startsWithLetters.length < 2 ){
            countriesSortedParagraph.textContent =
            `There is  ${startsWithLetters.length} capital starting with '${inputArea.value}'`;
          } else {
            countriesSortedParagraph.textContent =
            `There are  ${startsWithLetters.length} capitals starting with '${inputArea.value}'`;
          }
         
        }
    })  

       /*********POPULATION************/
        
  
    selectPop.addEventListener('click', populiFilter= () => {

      flexContainer.textContent = '';

      const population =  countries.filter((country) => country.population < selectPop.value)

     
      for (const country of population) {
              
          let div = document.createElement('div')
          let countryName = document.createElement('p')
          let countryCapital = document.createElement('p')
          let countryPopulation = document.createElement('h4')
          let countryLanguage = document.createElement ('p')
          let cntryFlag = document.createElement('img')

          cntryFlag.className = 'flag'
             
          countryName.textContent =country.name 
          countryCapital.textContent = `Capital:${ country.capital} `           
          countryPopulation.textContent = country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')  
          cntryFlag.src = country.flag

         
        //EXTRACT LANGUAGES
         const langs = []
         for(const language of country.languages){
           langs.push(language.name)
         }
         countryLanguage.textContent =`Languages:${langs}` 

          div.appendChild(countryPopulation)
          div.appendChild(countryName)
          div.appendChild(countryCapital)
          div.appendChild(countryLanguage)
          div.appendChild(cntryFlag)

        
          flexContainer.appendChild(div)
         
          countriesSortedParagraph.textContent =
          `There are  ${population.length} countries in the world with less than ${selectPop.value} people` 
        }   
      
    })

    selectPop.addEventListener('click', sortCntr)

      function sortCntr() { 
        countries.sort (function( a,b){
          return a.population - b.population
       
      })

    }
      
})
 