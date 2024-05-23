let display = document.querySelector(".display");
let buttons = document.querySelectorAll("#btn");
let specialOrerators = ["%", "*", "/", "+", "-", "="];
let output = "";

function cal(event){
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            calculate(e.target.dataset.value);
        });
    });
};
cal();

let calculate = (buttonValue) => {
    if(buttonValue === "=" && buttonValue !== ""){
        output = eval(output.replace("%", "/100"));
    }else if(buttonValue === "AC"){
        output = "";
    }else if(buttonValue === "DEL"){
        output = output.toString().slice(0, -1);
    }else{
        if(output === "" && specialOrerators.includes(buttonValue)) return;
        output += buttonValue;
    };
    display.value = output;
};