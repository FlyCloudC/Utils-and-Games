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
		table = toTable(data);
		localStorage.setItem('table', JSON.stringify(table));
	}

	reader.readAsBinaryString(file);
}

function isDigital(x) { return !isNaN(Number(x)); }

function toTable(data) { // data array
	let table = new Map();
	let sheet = data.Sheets.Sheet1;
	for (let i = 2; sheet['A' + i]; ++i) {
		if (!isDigital(sheet['A' + i].v))
			continue;
		let [id, name, bandId] = ['A', 'B', 'C'].map(x => sheet[x + i]?.v);
		table[id] = { name, bandId };
	}
	return table;
}

function find() {
	if (!table) {
		showP.innerHTML = '无表格';
		return;
	}
	let id = idInput.value;
	let data = table[id];
	if (!data) {
		showP.innerHTML = '未找到对应数据';
		return;
	}
	showP.innerHTML = `B列：${data.name}<br />C列：${data.bandId}`;
}

function deleteTable() {
	table = null;
	localStorage.removeItem('table');
}

//C39D4FF68DB6D8DB159CDDF8032065A5