class Todo {
  text: string;
  id: number;
  constructor(todoText: string) {
    this.id = Math.floor(Math.random() * 50);
    this.text = todoText;
  }
}

export default Todo;
