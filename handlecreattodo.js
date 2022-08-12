import { toastifyy } from "./../components/toastify.js";



const todotitle = document.getElementById("title");
const tododesc = document.getElementById("desc");
const mainlist = document.getElementById("main")





// localStorage

const savelctodos = localStorage.getItem('todoslist');
const parssavelctodos = JSON.parse(savelctodos)




const savedlctodos = localStorage.getItem('todoslist');

const savelcparsobj = JSON.parse(savedlctodos) || [];
console.log(savelcparsobj);


let savedtodos = [...savelcparsobj];





// dont repet yourself


const createnewtodo = (title, desc, id, check) => {







    const ListItem = document.createElement('li');
    ListItem.id = id;
    //ListItem.setAttribute("class" , "list-item"); 



    const TodotitleHeading = document.createElement('h3');
    const todotitleinput = document.createElement('input');
    todotitleinput.disabled = true;
    todotitleinput.className = "title-input"
    todotitleinput.defaultValue = title;
    TodotitleHeading.appendChild(todotitleinput);
    TodotitleHeading.style.backgroundColor = "tomato"
    if (check) {

        TodotitleHeading.style.backgroundColor = "green"

    }


    const TodoDescpara = document.createElement('p');
    TodoDescpara.innerHTML = desc;

    console.log(ListItem, TodotitleHeading, TodoDescpara);


    ListItem.appendChild(TodotitleHeading);
    ListItem.appendChild(TodoDescpara);

    const todoActions = ` 
    <div>
    <button>DELETE</button>
    <button>EDIT</button>
    <button>CHECK</button>
    </div>`;

    ListItem.innerHTML += todoActions;

    mainlist.appendChild(ListItem);




}





savedtodos.forEach((todo) => {


    createnewtodo(todo.title, todo.desc, todo.id, todo.check);


});





export const handlecreateNewTodo = (event) => {
    event.preventDefault();




    if (!todotitle.value) return toastifyy(" please enter ")







    const newtodo = {
        id: Date.now(),

        title: todotitle.value,
        desc: tododesc.value,
        check: false,
    };


    savedtodos.push(newtodo);
    console.log(savedtodos);



    localStorage.setItem('todoslist', JSON.stringify(savedtodos));
    createnewtodo(newtodo.title, newtodo.desc, newtodo.id);

}



mainlist.addEventListener('click', (e) => {
    if (e.target.innerText === "DELETE") {

        const todoEl = e.target.parentElement.parentElement;
        console.log(todoEl.id);

        const filtredtodos = savedtodos.filter(
            (item) => item.id !== Number(todoEl.id)
        );

        localStorage.setItem('todoslist', JSON.stringify(filtredtodos));
        location.reload();
    } else if (e.target.innerText === "CHECK") {

        const todoEl = e.target.parentElement.parentElement;

        const filtredtodos = savedtodos.filter(
            (item) => item.id === Number(todoEl.id)
        );

        const updatefiltredtodo = { ...filtredtodos[0], check: true };

        const filtredtodo = savedtodos.filter(
            (item) => item.id === Number(todoEl.id)
        );
        const updatesavetodo = [...filtredtodo, updatefiltredtodo];


        localStorage.setItem('todoslist', JSON.stringify(updatesavetodo))


        console.log({ updatefiltredtodo, savedtodos, filtredtodo });

    } else if (e.target.innerText === "EDIT") {

        const todoEl = e.target.parentElement.parentElement;
        todoEl.children[0].children[0].disabled = false;
        todoEl.children[0].children[0].select();
        e.target.innerText = "save"

        e.target.addEventListener('click', () => {

            // console.log(todoEl.children[0].children[0].value);










            const todoEl = e.target.parentElement.parentElement;

            const filtredtodos = savedtodos.filter(
                (item) => item.id === Number(todoEl.id)
            );

            const updatefiltredtodo = { ...filtredtodos[0], title: todoEl.children[0].children[0].value };

            const filtredtodo = savedtodos.filter(
                (item) => item.id === Number(todoEl.id)
            );
            const updatesavetodo = [...filtredtodo, updatefiltredtodo];
            localStorage.setItem('todoslist', JSON.stringify(updatesavetodo))
            location.reload();
        });





    }


});































// const date = new Date();
// console.log( date.getTime());




// console.log(Date.now());






// const array = [100,200,300,400,500];

// console.log(array);

//  const rrr = array.map((it) => it * 2);
// console.log(rrr);



// const filtred = array.filter((it) => it  !== 300);
// console.log(filtred);