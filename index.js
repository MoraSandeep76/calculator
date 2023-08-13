let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.btn');

let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            // eval is inbuilt js func used to cal from string 
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.toString();
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else {
            // console.log(e.target.innerHTML)
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})