import axios from "axios";
axios.get('https://jsonplaceholder.typicode.com/todos/3')
    .then(res => {
        console.log(res.data)
    })