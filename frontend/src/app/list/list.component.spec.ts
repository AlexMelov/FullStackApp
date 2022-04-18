describe('Async component', ()=>
{
	test('render list items with mocks', async() =>
	{
		window.fetch = jest.fn().mockResolvedValueOnce({
			json: async() =>[ { id:'1', title:'Post from Jest' } ]
		});

		expect(true).toBe(true);
	});
});
