window.onload = () => {
  const mainView = document.getElementById('main-view');
  
  for (view of viewList) {
      mainView.appendChild(new Section(view).element);
  }
}
