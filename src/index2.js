import cipher from './cipher.js';

const decryptButton = document.getElementById("decryptButton");
decryptButton.onclick = function (eventDecode) {
    let decodeOffset = parseInt(document.getElementById("numberToDecode").value);
    let decryptText = document.getElementById("decryptDiary").value;
    eventDecode.preventDefault();
    document.getElementById("decryptDiary").value = cipher.decode(decodeOffset, decryptText);
}

