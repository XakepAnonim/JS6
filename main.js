let elem = document.querySelector('.wrap')
let token = 'qwerty1345689'

// Первый способ
// // async function getData() {
// //     let data = await fetch('https://jsonplaceholder.typicode.com/todos');
// //     if (data.ok) {
// //         let todos = await data.json()
// //         todos.forEach(todo => {
// //             return elem.insertAdjacentHTML('beforeend',
// //                 `<strong>
// //                 <br>{
// //                 <p> "userId": ${todo.userId}, </p>
// //                 <p> "id": ${todo.id}, </p>
// //                 <p> "title": ${todo.title}, </p>
// //                 <p> "completed": ${todo.completed} </p>
// //                 },
// //                 </strong>`)
// //         })
// //     }
// // }

let  newPost = {
    userId: 1,
    title: 'newTitle',
    body: 'newBody'
}

async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/66', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newPost)
    });
    if (data.ok) {
        console.log(data.headers.get('Content-Type'))
        let todos = await data.json();
        // printInfo(todos)
        console.log(todos)
        elem.insertAdjacentHTML('beforeend',
            `<strong>
                <br>{
                <p> "userId": ${todos.userId}, </p>
                <p> "id": ${todos.id}, </p>
                <p> "title": ${todos.title}, </p>
                <p> "body": ${todos.body} </p>
                },
                </strong>`)
    }
}

// Второй способ
// const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(data => data.json())
//         .then(data => printInfo(todos))
// }

// ---------------------------
const printInfo = (todos) => {
    todos.forEach(todo => {
        return elem.insertAdjacentHTML('beforeend',
            `<strong>
                <br>{
                <p> "userId": ${todo.userId}, </p>
                <p> "id": ${todo.id}, </p>
                <p> "title": ${todo.title}, </p>
                <p> "body": ${todo.body} </p>
                },
                </strong>`)
    })
}

getData()