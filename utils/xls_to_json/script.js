let fileInput, idInput, checkButton, deleteButton, showP;
let table;

window.onload = function () {
	[fileInput, idInput, checkButton, deleteButton, showP] =
		['file-input', 'id-input', 'check-button', 'delete-button', 'show']
			.map(x => document.getElementById(x));
	fileInput.onchange = importFile;
	checkButton.onclick = find;
	deleteButton.onclick = deleteTable;
	table = JSON.parse(localStorage.getItem('table'));
}

function importFile(event) {
	let file = event.target.files[0];

	if (!file)
		return;

	let reader = new FileReader();
	reader.onload = (event) => {
		let binary_data = event.currentTarget.result;
		let data = XLSX.read(binary_data, { type: 'binary' });
		let output = data.Strings.map(x => x.t);
		table = toTable(output);
		localStorage.setItem('table', JSON.stringify(table));
	}

	reader.readAsBinaryString(file);
}

function isDigital(x) { return !isNaN(Number(x)); }

function toTable(data) { // data array
	let bandId;
	let output = new Map();
	let i = 3;
	while (i < data.length) {
		let ECI = data[i++];
		let name = data[i++];
		if (!isDigital(data[i]))
			bandId = data[i++];
		output[ECI] = { name, bandId };
	}
	return output;
}

function find() {
	if (!table) {
		showP.innerHTML = '无表格';
		return;
	}
	let id = idInput.value;
	let data = table[id];
	if (!data) {
		showP.innerHTML = '未找到对应基站';
		return;
	}
	showP.innerHTML = `名称：${data.name}<br />载扇频段标识：${data.bandId}`;
}

function deleteTable() {
	table = null;
	localStorage.removeItem('table');
}

//C39D4FF68DB6D8DB159CDDF8032065A5