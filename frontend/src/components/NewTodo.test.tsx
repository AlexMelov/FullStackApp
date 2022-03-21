import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import NewTodo from './NewTodo';

test('on intial render, button', ()=>
{
	render(<NewTodo/>);
	expect(screen.getByRole('button', {  name: /add todo/i })).toBeEnabled();
	expect(screen.getByRole('textbox', {  name: /todo text/i })).toBeVisible();
});
