// Morse code dictionary
const morseCodeDict = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',     'F': '..-.', 
  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
  'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',  'Q': '--.-',  'R': '.-.',
  'S': '...',   'T': '-',     'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
  'Y': '-.--',  'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  '.': '.-.-.-','!': '-.-.--','?': '..--..',',': '--..--', ' ': '/'
};

// Function to convert text to Morse code
function textToMorse(text) {
  return text.toUpperCase().split('').map(letter => morseCodeDict[letter] || '').join(' ');
}

// Function to convert Morse code to text
function morseToText(morse) {
  return morse.split(' ').map(code => Object.keys(morseCodeDict).find(key => morseCodeDict[key] === code) || '').join('');
}

// Function to convert text to binary
function textToBinary(text) {
  return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

// Function to convert binary to text
function binaryToText(binary) {
  return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Event listener for the convert button
document.querySelector('.btn').addEventListener('click', () => {
  const textArea = document.querySelector('textarea');
  const resultSpan = document.querySelector('.result-text');
  resultSpan.style.color = 'blue'
  const inputText = textArea.value.trim(); // Trim whitespace from input
  let result = '';

  if (document.getElementById('Tobinary').checked) {
    result = textToBinary(inputText);
  } else if (document.getElementById('Tomorse').checked) {
    result = textToMorse(inputText);
  } else if (document.getElementById('frmbinary').checked) {
    result = binaryToText(inputText);
  } else if (document.getElementById('frmmorse').checked) {
    result = morseToText(inputText);
  }
  resultSpan.innerHTML = result || "<p style='color:red'>Result not found. Please enter a valid text.</p>";
 
});

// Event listener for the clear button
document.querySelector('.clear').addEventListener('click', () => {
  document.querySelector('textarea').value = '';
  document.querySelector('.result-text').textContent = '';
});
function copy() {
  const result = document.querySelector('.result-text').textContent; // Copy from the result text span
  navigator.clipboard.writeText(result);
}
