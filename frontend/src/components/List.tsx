import React, { useContext } from "react";
import Item from "./Item";
import classes from "./List.module.css";
import { TodosContext } from "../store/todos-context";

const List: React.FC = () => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default List;
