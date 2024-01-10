
const textinput = document.querySelector('#text');

let totalchar = 0;
let remaining = 50;
let maxlength=50;


textinput.addEventListener('input', function () {


    const textvalue = textinput.value;
    document.querySelector('.no').textContent = textvalue.length;

    const rem = remaining - textvalue.length;
    document.querySelector('.num').innerHTML = rem

    
    
  
})