const base_url = 'https://jsonplaceholder.typicode.com';

function getData(data) {
    const result = document.getElementById('result');
    result.innerHTML = JSON.stringify(data, null, 2);
}

function getUsers() {
    fetch(`${base_url}/users`)
        .then(response => response.json())
        .then(data => getData(data));
}

function getPosts() {
    fetch(`${base_url}/posts`)
        .then(response => response.json())
        .then(data => getData(data));
}

function getComments() {
    fetch(`${base_url}/comments`)
        .then(response => response.json())
        .then(data => getData(data));
}

function addUser() {
    const newUser = {
        "name": "Name",
        "username": "UserName",
        "email": "example@email.ru",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Elabuga",
        },
        "phone": "88005553535",
        "website": "moodle.alabuga.space",
        "company": {
            "name": "Alabuga"
        }
    };

    fetch(`${base_url}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
        .then(response => response.json())
        .then(data => getData(data))
}

function addPost() {
    const newPost = {
        "userId": 10,
        "title": 'Название',
        "body": 'Описание'
    }

    fetch(`${base_url}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
    })
        .then(response => response.json())
        .then(data => getData(data))
}

function addComment() {
    const newComment = {
        "postId": 10,
        "name": 'Название',
        "email": 'example@email.com',
        "body": 'Комментарий'
    }

    fetch(`${base_url}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
    })
        .then(response => response.json())
        .then(data => getData(data))
}
