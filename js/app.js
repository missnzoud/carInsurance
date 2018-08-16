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