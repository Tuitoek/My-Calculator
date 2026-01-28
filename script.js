const buttonValues = ["AC", "+/-", "%", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

const rightSymbols = ["/","x","-","=","+"];
const topSymbols = ["AC","+/-","%"];

// Get display element 
const display = document.getElementById("display");

//Variables for A+B/ A-B/ AxB/ A/B
let A = 0;
let operator = null;
let B = null;



for(let i=0; i < buttonValues.length; i++){
    // Creating buttons
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    //styling button colors
    if(value == "0"){
        button.style.width = "180px";
        button.style.gridColumn = "span 2"
    }
    if(rightSymbols.includes(value)){
        button.style.backgroundColor = "#FF9500";
   
    } else if(topSymbols.includes(value)){
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    // process button clicks
    button.addEventListener("click", function(){
        if(rightSymbols.includes(value)){

        } else if (topSymbols.includes(value)){

        }else{ //Numbers or decimal
            if(value == "."){
                if(display.value != "" && !display.value.includes(value))
                    {
                    display.value += value;
            }
        }else if(display.value == '0'){
                display.value = value;
            }
            else{
                display.value += value;
            }

        }
    });

    // Adding button to buttons div
    document.getElementById("buttons").appendChild(button);
}