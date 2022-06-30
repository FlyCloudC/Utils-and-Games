class Section {
    constructor({ title, inputName, doing }) {
        this.inputList = [];
        let outputP = createElement('p');

        let sec = createElement('section');
        let titleH2 = createElement('h2');
        titleH2.innerHTML = title;
        sec.appendChild(titleH2);

        for (let i = 0; i < inputName.length; ++i) {
            let input = createElement('input');
            let name = document.createTextNode(inputName[i]+'：');
            this.inputList.push(input);
            sec.appendChild(name);
            sec.appendChild(input);
            addBr(sec);
        }

        let okButton = createElement('button');
        okButton.innerHTML = 'do';
        okButton.onclick = () => {
            outputP.innerHTML = doing(...this.inputList.map(x => x.value));
        }
        sec.appendChild(okButton);
        addBr(sec);

        sec.appendChild(outputP);
        addBr(sec);

        this.element = sec;
    }
}

function createElement(type, className) {
    let element = document.createElement(type);
    if (className) element.className = className;
    return element;
}

function addBr(x) {
    return x.appendChild(document.createElement('br'));
}

function toSuper(s) {
    let tr = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
    return s.toString().split('').map(x => tr[x]).join('');
}