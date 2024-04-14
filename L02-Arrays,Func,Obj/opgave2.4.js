let text = "hej med dig";

let wordCounts = {};

let words = text.split(" ");

words.forEach(word => {
    word = word.toLowerCase();
    if (wordCounts[word]) {
        wordCounts[word]++;
    } else {
        wordCounts[word] = 1;
    }
})

console.log(wordCounts);
