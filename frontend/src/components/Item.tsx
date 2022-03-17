import React from 'react';
import classes from './Item.module.css';

const Item: React.FC<{
	title: string;
	onRemoveTodo: () => void;
	dataKey:number;
}> = props =>
{
	return (
		<li className={classes.item} data-test={props.dataKey}>
			<p>{props.title}</p>
			<button onClick={props.onRemoveTodo}>Remove</button>
		</li>
	);
};

export default Item;
