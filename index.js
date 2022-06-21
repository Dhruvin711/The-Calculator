let screen = document.querySelector('#screen');
let button = document.querySelectorAll('button');

screen.disabled = true;

for(item of button) {
  item.addEventListener('click', (e) => {
    let text = e.target.innerHTML;

    if (text == '×') {
        text = '*';
    }

    if (text == '÷') {
        text = '/';
    }

    if(text == 'AC') {
      screen.value = '';
    }

    else if(text == 'CE') {
      screen.value = screen.value.substr(0, screen.value.length - 1);
    }

    else if(text == 'x!') {
      let num, t = 1;
      num = screen.value;

      for(let i=1; i<=num; i++){
        t *= i;
      }

      screen.value = t;
    }

    else if(text == 'sin') {
      screen.value = Math.sin(screen.value);
    }

    else if(text == 'cos') {
      screen.value = Math.cos(screen.value);
    }

    else if(text == 'tan') {
      screen.value = Math.tan(screen.value);
    }

    else if(text == 'π') {
      screen.value += Math.PI;
    }

    else if(text == 'log') {
      screen.value = Math.log(screen.value);
    }

    else if(text == 'e') {
      screen.value += 2.7182;
    }

    else if(text == '√') {
      screen.value = Math.sqrt(screen.value, 2);
    }

    else if(text == 'x <span style="position: relative; bottom: .5em; right: .2em; font-size: 12PX;">2</span>') {
      screen.value = Math.pow(screen.value, 2);
    }

    else if(text == '=') {
      screen.value = eval(screen.value);

    }

    else{
      screen.value += text;
    }

    if(screen.value === '0') {
      screen.value = '';
    }
  });
}

document.addEventListener('keypress', (e) => {
    let text = e.key;

    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '/', '-', '+', '.', '(', ')', '%'];

    if(arr.includes(text)){
      screen.value += text;
    }
    if(text == 'Enter' || text == '='){
      screen.value = eval(screen.value);
    }
});

document.body.addEventListener('keydown', () => {
  var key = event.keyCode || event.charCode;

  if(key == 8){
    screen.value = screen.value.substr(0, screen.value.length - 1);
  }
  if(key == 46){
    screen.value = '';
  }

});
