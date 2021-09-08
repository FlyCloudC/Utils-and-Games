function loadData(user) {
  let dataJSON = localStorage.getItem('userData');
  if (dataJSON === null)
    return false;
  user.data = JSON.parse(dataJSON);
  return true;
}

function saveData(user) {
  localStorage.setItem('userData', JSON.stringify(user.data));
}

window.onload = () => {
  if (localStorage === undefined) {
    alert('浏览器不支持localStorage');
    return;
  }
  loadData(user);

  ui.initialize();
}
