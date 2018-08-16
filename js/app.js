//variable 
when the form is submitted
const form = document.getElementById('request-quote');
const html = new HTMLUI();






eventListeners();
fonctions eventListeners() { 
//event listeners
document.addEventListener('DomContentLoaded', function() {
    //created the option for the years.
   // const html = new HTMLUI(); on a enlevé pour remettre plus haut.
    html.displayYears();
});

document.addEventListener('submit', function(e) {
    e.preventDefault();
    //read the value from the form
    const make = document.getElementById('make').value;
    const years = document.getElementById('year').value;
   /* console.log(make);
    console.log(years);*/
    //read the radio button
    const level = document.querySelector('input[name="level" ]:checked').value;
    
    //check that all the fields had something
    if(years === '' || make === '' || level === ''){
       // console.log("error");
        //console.log(html);
        html.displayError('All the field are mandatory');
    }else{
        //console.log("alright");
        //make the quotation
        
        const insurance = new Insurance(make, years, level);
        const price = insurance.calculateQuotation(insurance);
    }
    

    
});


}

//Object
//eberything related to the calculate quotation
function Insurance(make, years, level) {
    this.make = make;
    this.years = years;
    this.level = level;
}
//calculate the price for the current quotation
Insurance.prototype.calculatequotation = function(insurance) {
    
let price;
    const base = 2000;
    //get the make
    const make = insurance.make;
    /*
    1= america 15%
    2= asian 05%
    3= europa 35%
    */
    
    switch(make) { 
        case'1':
              price = base * 1.15 ;
            break;
        case'2':
              price = base * 1.05 ;
            break;
        case'3':
              price = base * 1.35 ;
            break;
    }
       // console.log(price);
    //get a year
    
    const year = insurance.years;
    // console.log(price);display the years that some one select
    
    
}
    // everything related to the html
  function HTMLUI () {}
    //display the lastest 20 years in the select
    HTMLUI.prototype.displayYears = function () {
        //max und minimum years
        const max = new Date().getFullYear(),
              min = max - 20;
        //console.log(min);
        //generate the list  with the lastest 20 years
        const selectYears = document.getElementById('year');
        //print the values
        
        for(let i = max; i  >= min; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYears.appendChild(option);
            
        }
    }
//prints an error
    
    HTMLUI.prototype.displayYears = function(message) {
        //create a div
        const div = document.createElement('div');
        div.classList = 'error';
        div
        
        //insert the message
        //div.innerText = 
        div.innerHTML = 
            <p>${message}</p>
           ;
        form.insertBefore(div, document.querySelector('.form-group'));
        
       // remove the Error
        setTimeout(function() {
            document.querySelector('.error').remove();
            
        }, 3000);
    }