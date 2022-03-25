import { render, screen } from '@testing-library/react';
import List from './List';
import { TodoForTest } from './models/Todo';
import React from 'react';

describe('Async component', ()=>
{
	test('render list items with mocks', async() =>
	{
		window.fetch=jest.fn().mockResolvedValueOnce({
			json: async () =>[ { id:'1', title:'Post from Jest' } ]
		});
		render(<List/>);
		const listItems : TodoForTest[] = await screen.findAllByRole('list');

		expect(listItems).not.toHaveLength(0);
	});
});
