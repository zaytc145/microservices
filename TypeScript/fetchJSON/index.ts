import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

class Todo {
    constructor(
        public id: number,
        public userId: number,
        public title: string,
        public completed: boolean
    ) {}
}

axios.get(url).then(res => {
    const todo: Todo = res.data;
    logTodo(todo);
});

function logTodo(todo: Todo) {
    const { id, title, completed } = todo;
    console.log(id, title, completed);
}
