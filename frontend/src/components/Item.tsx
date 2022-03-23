import React from 'react';
import styles from './styles/Item.module.css';

const Item : React.FC<{
	title : string;
	onRemoveTodo : () => void;
	dataKey : number;
}> = props =>
{
	return (
		<li className={styles.item} data-test='item'>
			<p>{props.title}</p>
			<button onClick={props.onRemoveTodo} data-test='remove-button'>Remove</button>
		</li>
	);
};

export default Item;
