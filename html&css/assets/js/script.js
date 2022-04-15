const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

btn.addEventListener('click', palindrome);

function palindrome() {
  const input = document.querySelector('.input-text').value.toLowerCase();
  const len = input.length;
  const start = input.substring(0, Math.floor(len / 2));
  const end = input.substring(len - Math.floor(len / 2));
  const reverse = [...end].reverse().join("");
  
  if (start === reverse) {
    output.textContent = `${input} is a Palindrome`;
  } else {
    output.textContent = `${input} is NOT a Palindrome`;
  }
}