const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#text-output");
const revBtn = document.querySelector(".rev-btn");
const copyBtn = document.querySelector("#copy-btn");

textOutput.spellcheck = false;
textInput.spellcheck = false;

// Add Events to the form & copy button
revBtn.addEventListener("click", reverseString);
copyBtn.addEventListener("click", copyText);

function reverseString(event) {
  event.preventDefault();
  const text = textInput.value.split(""); // Convert string to an array e.g: ["h", "e", "l", "l", "o"]
  const revText = text.reduceRight((acc, curr) => acc + curr, "");
  textOutput.value = revText; // set the output to textOutput
}

function copyText(event) {
  event.preventDefault();
  if (textOutput.value <= 0) return;
  textOutput.select();
  document.execCommand("copy");
}
