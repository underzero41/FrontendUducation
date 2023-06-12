// function reverseWords(str) {
//     // Разбиваем строку на массив слов
//     var wordsArray = str.split(' ');
  
//     // Проходимся по каждому слову и переворачиваем его
//     for (var i = 0; i < wordsArray.length; i++) {
//       var word = wordsArray[i];
//       var reversedWord = '';
//       for (var j = word.length - 1; j >= 0; j--) {
//         reversedWord += word[j];
//       }
//       wordsArray[i] = reversedWord;
//     }
  
//     // Склеиваем слова обратно в строку и возвращаем результат
//     return wordsArray.join(' ');
//   }
  
  function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
  }

    // Пример использования
  var str = 'о этот дивный ипрекрасный мир';
  var reversedStr = reverseWords(str);
  console.log(reversedStr); // 'ро тэто йнвид и сяркерпный рим'
  