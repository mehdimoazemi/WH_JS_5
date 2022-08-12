

const toastifyElement = document.getElementById("alert")



export const toastifyy = (msg , option) => {

    toastifyElement.style.right = "0%";

    toastifyElement.children[0].innerHTML = msg;

    toastifyElement.children[1].addEventListener("click", () => {

        toastifyElement.style.right = "-100%";

    });

    setTimeout(function () {

        toastifyElement.style.right = "-100%";

    }, 3000)
}; 

// console.log(localStorage);



// const arr =  ['abc1' , 'abc2' , 'abc3'];
      





// localStorage.setItem('list', JSON.stringify(arr));
// console.log(localStorage.getItem('list'));



// const stringify = localStorage.getItem('list');
// const parsdeata = JSON.parse(stringify);
// console.log(parsdeata);