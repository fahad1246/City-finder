//Fahad Mohammed  js Comment
//Feb 17, 2021
//Project 2b 

function readSingleFile(event) {

    // Obtain the single uploaded file.
    var f = event.target.files[0]; 

    if (f) {
        var r = new FileReader( );
        r.onload = function(e) { 
            contents = e.target.result;
        }
        r.readAsText(f);
    }
    else { 
        alert("Failed to load file");
    }
}


function getBySubCountry( ) { // get by function 
var output = '';
var dataArray = JSON.parse(contents);   //sets value to contents of the file
var requestedSubCountry = document.getElementById("subcountry").value;   //sets value of subcountry
var output = document.getElementById("output");    //sets value for output
var display = "";     //sets value for display
for (let k of dataArray) {      //for loop
    var c = k.country;      // sets value c for country
    var n = k.name;    // sets value n for name
    var s = k.subcountry;    //sets value s for subcountry
    if (s == requestedSubCountry) {    //if statement 
        display  += `${n} \n`;      //tells what to show as results
    }
 }
 output.value = display; //shows results
}

function getByName( ) {     // get by function 
    var dataArray = JSON.parse(contents);   //sets value to data
    var requestedName = document.getElementById("nname").value;  //sets value of city name
    var output2 = document.getElementById("output2");  //sets value for output
    var display = "";    //sets value for display
    for (let k of dataArray) {    //for loop
        var c = k.country;   // sets value c for country
        var n = k.name;   // sets value n for name
        var s = k.subcountry;  //sets value s for subcountry
        if (n == requestedName) {     //if statement 
            display  += `${s} ${c}  \n`;   //tells what to show as results
        }
        }

     output2.value = display;   //shows results
    }


function init ( ) {    //init function  
    
    document.getElementById("file").addEventListener("change", readSingleFile, false);// Upload file synchronously.

    var button = document.getElementById("btn1");     //button 1 set up
    
    button.addEventListener("click", getBySubCountry);    // tells the button process data after being clicked
    
    var button2 = document.getElementById("btn2");    //button 2 setup
    
    button2.addEventListener("click", getByName);    // tells the button process data after being clicked
 
}
window.addEventListener("load", init);// loads the init
