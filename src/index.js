import cipher from './cipher.js';

console.log(cipher);

let numerOfLetters = document.getElementById("choosing");
let encryptText = document.getElementById("encryptForm");
let decryptText = document.getElementById("decryptForm");

let start = document.getElementById("startButton").click();
let choosingEncrypt = document.getElementById("encrypt").click();
let choosingDecrypt = document.getElementById("decrypt").click();
let choosing = document.getElementById("goButton").click();
let encryptButton = document.getElementById("encryptButton").click();
let decrypButton = document.getElementById("decryptButton").click();

