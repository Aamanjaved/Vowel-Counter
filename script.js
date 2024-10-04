var sentence = prompt("Enter a sentence: ");
sentence = sentence.toLowerCase();
var vowelCount = 0;

for (var i = 0; i < sentence.length; i++) {
  if ("aeiou".includes(sentence[i])) {
    vowelCount++;
  }
}

alert(`Total vowels: ${vowelCount}`);
