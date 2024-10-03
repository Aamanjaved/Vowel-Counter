let sentence = prompt("Enter a sentence: ");
sentence = sentence.toLowerCase();
let vowelCount = 0;

for (let i = 0; i < sentence.length; i++) {
  if ("aeiou".includes(sentence[i])) {
    vowelCount++;
  }
}

alert(`Total vowels: ${vowelCount}`);