let names, width, height, seating;

window.onload = () => {
  [names, width, height, seating] =
    ['form-names', 'form-width', 'form-height', 'seating']
      .map(x => document.getElementById(x));
}

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; --i) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showSeating(list, width, height) {
  seating.innerHTML = '';
  for (let i = 0, k = 0; i < height; ++i) {
    let tr = document.createElement('tr');
    for (let j = 0; j < width; ++j, ++k) {
      let td = document.createElement('td');
      td.innerHTML = list[k] || '_';
      td.onclick = exchange;
      tr.appendChild(td);
    }
    seating.appendChild(tr);
  }
}

function start() {
  let list = names.value.replace(/，/g, ',').split(',');
  showSeating(shuffle(list), width.value, height.value);
}

function generateNumber() {
  let len = width.value * height.value, x = '';
  for (let i = 0; i < len; x += ++i + ',');
  names.value = x.slice(0, -1);
}

let exchange = (() => {
  let last;
  return function () {
    if (last) {
      [last.innerHTML, this.innerHTML] = [this.innerHTML, last.innerHTML];
      last.style.backgroundColor = null;
      last = null;
    }
    else {
      this.style.backgroundColor = '#dddddd';
      last = this;
    }
  }
})();