//Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let  test= prompt("What's the “official” name of JavaScript?","");

if (test== "ECMAScript") { 
   alert('You are right!' );
} else {
    alert("You don't know? “ECMAScript”!");
}

//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.
//Предполагается, что пользователь вводит только числа.

 let testl= prompt("gess the number","");

 if (testl > 0){
     alert(1);
 } else if (testl < 0) {
    alert(-1);
 }else{  
     alert(0);
 }


//Перепишите 'if' в '?'

//let testm= (a + b < 4)? 'below': 'Over';

//Перепишите 'if..else' в '?'

let login = prompt("login?","");

let message = (login== "employee")? "hello":
              (login== "director")? "greetings":
              (login== "")? "no login":
              "";
    alert(message);

 

