// дисплей
let display = document.querySelector('.display');

// массив с данными (числа и операции)
let buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operators = ['+', '-', 'X', '/', '%'];

let a = '';
let b = '';
let sign = '';
let finish = false;
let switchedSign = false;

document.querySelector('.ac').addEventListener('click', (evt) => {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = "0";
});

// пустое пространство - курсор исчезает
document.querySelector('.buttons').addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('button')) return;  

    if (evt.target.classList.contains('plus-minus')) {switchedSign = true};


// подготовка выражения с помощью конкатенации    
    let button = evt.target.textContent;

    if (buttons.includes(button))  {
        
        if (b === '' && sign === '') {
            a += button;
            display.textContent = a;
       
        } else if (a!=='' && b!== '' && finish) {
            b = button;
            finish = false;
            display.textContent = b;
        } 

        else {
            b += button;
            display.textContent = b;
        };
    }


    if(evt.target.classList.contains('percentage')) {
        if (b === "" && sign === "") {
        a = a / 100; 
        } else if (a!== "" & sign !== "") {
        b = b / 100;    
        }
    }


    if (operators.includes(button)) {
        sign = button;
        display.textContent = sign;
        return;
        };

// вычисления


    if (button === '=') {
        if (b === '') {b=a;}
        switch (sign) {
            case "+":
                a = a + b;
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b ;
                break; 
            case "/": 
                if (b === '0') {
                    display.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }

                a = a / b;
                break;

        }



        finish = true;
        display.textContent = a; 
}});

