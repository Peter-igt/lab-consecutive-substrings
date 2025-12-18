// Program to generate all consecutive substrings of a word

// Example search query
let word = "phone";

console.log("Search word:", word);
console.log("All consecutive substrings:");

// Loop through each starting position
for (let start = 0; start < word.length; start++) {
  // Loop through each ending position
  for (let end = start + 1; end <= word.length; end++) {
    let sub = word.slice(start, end); // get substring
    console.log(sub);                 // print it
  }
}

