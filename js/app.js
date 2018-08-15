//variable 










//event listeners
document.addEventListener('DomContentLoaded', function() {
    //created the option for the years.
    const html = new HTMLUI();
    html.displayYears();
});






//Object
    
  function HTMLUI () {
    //display the lastest 20 years in the select
    HTMLUI.prototype.displayYears = function () {
        const max = new Date().getFullYear();
        console.log(max);
    }
}