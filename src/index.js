/*У вас есть массив объектов user, и в каждом из них есть 
user.name. Напишите код, 
который преобразует их в массив имён.
user = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
]

let newuser =  user.map(obj=> obj.name )
console.log(newuser)

У вас есть массив объектов user, и у 
каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с
 параметрами id и fullName, где fullName – состоит из name 
 и surname.

 user2 =[
{ name: "John", surname: "Smith", id: 1 },
{ name: "Pete", surname: "Hunt", id: 2 },
{ name: "Mary", surname: "Key", id: 3 },
]

 let user2map = user2.map( user =>({
        fullName: `${user.name} ${user.surname}`,
        id: user.id  
 }));
  
     console.log(user2map)
     console.log(user2map[2].fullName)*/


     //let test= prompt("gess the number",);

    // if (test > 0){
    //     console.log(1);
    // } else if (test < 0) {
     //   console.log(-1);
     //}else{  
      //   console.log(0);
     //}

      
 

