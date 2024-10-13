function toggleText() {

    let btn = document.querySelector(".toggle-text-button");
    let textToHide = document.getElementById("text");

      btn.onclick = btnHideText;
        function btnHideText() {
          textToHide.hidden = !textToHide.hidden  /* это не то */

        //    textToHide.classList.add('hidden');
        //    // textToHide.hidden = true;   /*  'эта прячет'  */ 
        //    textToHide.classList.toggle('hidden');
        }
};ы