function hideSelf() {
  // ваш код...
  let btn = document.querySelector(".hide-self-button");

  btn.onclick = btnHide;
  function btnHide() {
    btn.hidden = true;
}
}
