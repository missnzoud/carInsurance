//variable 
when the form is submitted
const form = document.getElementById('request-quote');







eventListeners();
fonctions eventListeners() { 
//event listeners
document.addEventListener('DomContentLoaded', function() {
    //created the option for the years.
    const html = new HTMLUI();
    html.displayYears();
});

document.addEventListener('submit', function(e) {
    e.preventDefault();
    const make = document.getElementById('make').value;
    const years = document.getElementById('year').value;
   /* console.log(make);
    console.log(years);*/
    //read the radio button
    const level = document.querySelector('input[name="level" ]:checked').value;
    
    //check that all the fields had something
    if(years === '' || make === '' || level === ''){
        console.log("error");
    }else{
        console.log("alright");
    }
    

    
});


}

//Object
    
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
