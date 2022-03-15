import React from "react";
import classes from "./Item.module.css";

const Item: React.FC<{
    title: string;
    onRemoveTodo: () => void;
}> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>
            {props.title}
        </li>
    );
};

export default Item;
