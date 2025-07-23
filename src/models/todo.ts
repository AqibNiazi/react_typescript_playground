class Todo {
  id: string;
  title: string;
  constructor(todoText: string) {
    this.id = Math.random().toString();
    this.title = todoText;
  }
}

export default Todo;
