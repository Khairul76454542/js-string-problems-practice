const lyrics =
  "Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada";
const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const chars = lyrics.split("");
// console.log(sentences);

const partial = lyrics.slice(5, 8);

console.log(partial);
const partial2 = lyrics.substring(5, 8);

console.log(partial2);
