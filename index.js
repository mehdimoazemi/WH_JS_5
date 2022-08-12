import {handlecreateNewTodo} from "./modules/controller/handlecreattodo.js";



const submitTodoButton = document.getElementById("submit");
submitTodoButton.addEventListener( 'click'  , handlecreateNewTodo)








   
// const personA = {
//     name: "reza",
//     age:20
// };
// personA.name= "shahrzad";

// const personB = personA;
// // console.log(personB);
  

// personB.name= "gandom";


// const personC =  personB ;
// console.log(personC);


// const persond = {
//     ...personA,
//     ...personB,
//     ...personC
// };
// console.log(persond);
