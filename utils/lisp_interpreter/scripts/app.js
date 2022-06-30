let sourceForm, outputForm;

window.onload = () => {
  [sourceForm, outputForm] =
    ['form-source', 'form-output']
      .map(x => document.getElementById(x));
  sourceForm.value = localStorage.getItem('last_run');
}

function run() {
  let code = sourceForm.value;
  let mainExp = parse(code);
  let output = [];

  for (let exp of mainExp) {
    let value = eval(exp, basedEmv);
    if (value !== undefined)
      output.push(value);
  }
  console.log(output);
  outputForm.value = output.map(unEval).join('\n');
  localStorage.setItem('last_run', code);
}

function saveFile() {
  const content = sourceForm.value;
  let defaultFilename = `${content}\n`
    .match(/.*(?=\n)/)?.[0]
    ?.match(/(?<=;).*/)?.[0];
  if (defaultFilename)
    defaultFilename += '.scm';
  let filename = prompt('文件名', defaultFilename);
  if (filename === null)
    return;
  if (filename === '')
    filename = `code_${Date.now()}.lisp`;

  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';
  const blob = new Blob([content]);
  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
};

function loadFile() {
  const inputEle = document.createElement('input');
  inputEle.type = 'file';
  inputEle.onchange = () => {
    const reader = new FileReader();
    reader.onload = () => sourceForm.value = reader.result;
    reader.readAsText(inputEle.files[0]);
  }
  inputEle.click();
}
