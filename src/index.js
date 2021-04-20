//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

//Функция должна быть нечувствительна к регистру:
 
function checkSpam(str) {
    
  lowerStr = str.toLowerCase();
  if(lowerStr.includes("viagra") || lowerStr.includes("xxx") ){
    return true
}else{
  return false
}
}

console.log(checkSpam( "you are viagra boys"))
console.log(checkSpam("you are a xxx girl"));
console.log(checkSpam("smart boy"))
console.log(checkSpam("VIAgra girl"))
console.log(checkSpam("XXx at midnight"))
console.log(checkSpam("go far away"))
  
//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

//Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка

function truncate(str, maxlength){
  str;
  maxlength;
  if(str.length >= maxlength){
    return str.substring(0,maxlength) + "...";
  }else{
    return str;
  }

};
console.log(truncate("i am the woman of your dream",20))
console.log(truncate("i am your futur!",20))


//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.


function extractCurrencyValue(str){
  str;

  return +str.substr(1,10);
}
 console.log(extractCurrencyValue('$120'))
 console.log(extractCurrencyValue('$120') === 120)



 
