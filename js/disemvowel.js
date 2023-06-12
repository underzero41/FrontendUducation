// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const chars = str.split('');
//     const filteredChars = chars.filter(char => !vowels.includes(char.toLowerCase()));
//     const result = filteredChars.join("");
//     return result;
//   }
disemvowel = str => str.replace(['a', 'e', 'i', 'o', 'u']);
const str = "This website is for losers LOL!";
const result =  disemvowel(str);
console.log(result);