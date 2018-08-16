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
        //console.log(price);
        //print the result from the HTMLUI();
        html.showResults(price, insurance);
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
    //get the years differences
    const difference = this.getYearsDifference(year);
      //console.log(difference);
    //each year the cost of the insurance will be 3% cheaper
    price = price - ((difference * 3) * price) /100;
    //console.log(price);
    // check the level of protection
    const level = insurance.level;
    price = this.calculateLevel(price, level);
    //console.log(price);
    return price;
    
}
//returns the differences between years
Insurance.prototype.getYearsDifference = function(year) {
    return new Date().getFullYear() - year;
}
//add the value based on the level of protection
Insurance.prototype.calculateLevel = function(price, level){
    /* basic insurance is going to increase the value by 30%
     the complece insurance is going to increase the values by 50% */
    console.log(level);
    if(level === 'basic'){
        price = price * 1.30;
    }else{
        price = price * 1.50;
    }
    return price;
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
    
        //insert the message
        //div.innerText = 
        div.innerHTML =  `
                        <p class ="header"> summary </p>
                        <p> make: ${make}</p>   
                        <p> years:${insurance.years}</p>
                        <p>level: ${insurance.level}</p>
                   
                         <p>${message}</p>
            `;
         
     
        form.insertBefore(div, document.querySelector('.form-group'));
        
       // remove the Error
        setTimeout(function() {
            document.querySelector('.error').remove();
            
        }, 3000);
    }
    //print the result into the HTML
    HTMLUI.prototype.showResults = function(price, insurance) {
        //print the result
        const result = document.getElementById('result');
       
        //create the div 
        const div = document.createElement('div');
        //get make of the object and assign a readable name
         const make = insurance.make;
        
        switch(make) { 
        case'1':
                make = 'american';
             
            break;
        case'2':
                make = 'Asian';  
             
            break;
        case'3':
               make = 'european';
               
            break;
    }
    
       // console.log(make);
       
        
        div.innerHTML =  `
        
     <p class='total'> total: ${price} </p>  
         
     `;
        
    }