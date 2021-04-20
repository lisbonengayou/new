//Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

  //  let  test= prompt("What's the “official” name of JavaScript?","");

//if (test== "ECMAScript") { 
 //  alert('You are right!' );
//} else {
 //   alert("You don't know? “ECMAScript”!");
//}

//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.
//Предполагается, что пользователь вводит только числа.

 /*let testl= prompt("gess the number","");

 if (testl > 0){
     alert(1);
 } else if (testl < 0) {
    alert(-1);
 }else{  
     alert(0);
 }
/*

//Перепишите 'if' в '?'

//let testm= (a + b < 4)? 'below': 'Over';

//Перепишите 'if..else' в '?'

/*let login = prompt("login?","");

let message = (login== "employee")? "hello":
              (login== "director")? "greetings":
             (login== "")? "no login":
            "";
    alert(message);

 
//logik

/*
let logina = prompt("Who's there?","");

if (logina === "admin") { 

let  password = prompt("password?","");
  
if ( password === "themaster") {
    alert("welcome");
}
else if (password==""){
    alert("cancelled");
}   
else  {
    alert("wrong password");
}
}
 else if (logina== ""){
   alert("canceled");
}
else {
  alert("i dn't know you");
}
 */

/*let browser;
 
if(browser==="edge"){
    console.log( "You've got the Edge!" );
}else if (browser==="chrome"
          || "firefox"
          ||"safari"
          ||"opera"){
    console.log( 'Okay we support these browsers too' );
}else {
    console.log( 'We hope that this page looks ok!' );
}


let a = +prompt('a?', '');

switch(a){
   case 0: 
   alert( 0 );
   break;
   case 1:
    alert( 1 );
    break;
    case 2:
    case 3:
    alert( 2,3 ); 
    break;

}




let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}


function checkAge(age) {return (age>18)? true: confirm ('Did parents allow you?');
}

function checkAge(age){return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b){
  if (a<b){
    return a;
  }else {
    return b;
  }

}
function min(a, b){ 
 return (a<b)? a: b;
}
 
function paw(x,n){
  return (x**n);
}

let result = paw
  (prompt("give a value to x",""), prompt("give a value to n","") )

alert(result)
*/
 /*let user={
  name: "john",
  surname: "smith"
 }
console.log(user.name)
user.name ="peter",
console.log(user.name)
delete user.name;*/



/*let ask = (confirm('question'));

let func = ask?
  () => console.log("yes"):
  () => console.log("no");
 func();*/

 
/*let rule = {};

function isempty(rule){
  for (let key in rule ){
    return false
  }
  return true
}*/


/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);*/

 
  /* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

 

  function multiplyNumeric(menu){
  for ( let key in menu ){
    if (typeof menu[key] == "Number"){
      menu[key] *=2;
    } 
    return menu[key]
  }
  
  }
 console.log( menu[key]);*/


 /*let calculator = { 
   
   read(){
     calculator.a= +prompt("a","")
     calculator.b= +prompt("b","")
   },
   sum() {
     return this.a +this.b
   },
   mul(){
    return this.a*this.b
   }
};
calculator.read();
console.log(calculator.mul())
console.log(calculator.sum())*/
 


/*function Calculator(){

 this.read = function() {

  this.a = + prompt("a","")
  this.b = + prompt("b?","")
 };
 this.sum = function(){
   return this.a + this.b;
 }

}
   let monso = new Calculator();
   monso.read(); 

 console.log("sum=",monso.sum() )*/



/*function sum(a,b){
  a = +prompt("a?","")
  b = +prompt("b?","")

  return a+b;
}
console.log(sum());*/