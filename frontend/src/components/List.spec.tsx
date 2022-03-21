import { render, screen } from '@testing-library/react';
import List from './List';

describe('Async component', ()=>
{
	test('render list items with mocks', async ()=>
	{
		window.fetch=jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async ()=>[ { id:'1', title:'Post from Jest' } ]
		});
		render(<List/>);
		const listItems = await screen.findAllByRole('listitem');

		expect(listItems).not.toHaveLength(0);
	});
});
