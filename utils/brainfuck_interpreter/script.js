let sourceForm, inputForm, outputForm;

window.onload = () => {
  [sourceForm, inputForm, outputForm] =
    ['form-source', 'form-input', 'form-output']
      .map(x => document.getElementById(x));
}

function findBreaket(source) {
  let breaket = [], stack = [];
  for (let i = 0; i < source.length; ++i) {
    if (source[i] == '[')
      stack.push(i);
    else if (source[i] == ']') {
      let r = stack.pop();
      breaket[i] = r;
      breaket[r] = i;
    }
  }
  return breaket;
}

function run() {
  let source = sourceForm.value.replace(/[^\>\<\+\-\,\.\[\]]/g, '');
  let input = inputForm.value, inputPtr = 0;
  let output = '';
  let memory = [], ptr = 0;
  let breaket = findBreaket(source);
  

  for (let i = 0; i < source.length; ++i) {
    switch (source[i]) {
      case '>':
        ++ptr;
        if (ptr >= memory.length)
          memory.push(0);
        break;
      
      case '<':
        --ptr;
        break;
      
      case '+':
        ++memory[ptr];
        break;
      
      case '-':
        --memory[ptr];
        break;
      
      case ',':
        memory[ptr] = input.charCodeAt(inputPtr++);
        break;
      
      case '.':
        output += String.fromCharCode(memory[ptr]);
        break;
      
      case '[':
        if(memory[ptr] == 0)
          i = breaket[i];
        break;
      
      case ']':
        if(memory[ptr] != 0 )
          i = breaket[i];
        break;

      default:
        outputForm.value = output + '\nError';
        return;
    }
  }
  outputForm.value = output;
}