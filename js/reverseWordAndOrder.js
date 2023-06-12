function reverseString(str){ //создаем функцию
  return str.split("").reverse().join("") //возвращаем  перевернутую строку
}

// Пример использования
var str = 'о этот дивный ипрекрасный мир';
var reversedStr = reverseWords(str);
console.log(reversedStr); // ''