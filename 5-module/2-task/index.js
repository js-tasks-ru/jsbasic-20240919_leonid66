function toggleText() {

    let btn = document.querySelector(".toggle-text-button");
    let textToHide = document.getElementById("text");

      btn.onclick = btnHideText;
        function btnHideText() {
          textToHide.toggleAttribute('hidden');
        }
};