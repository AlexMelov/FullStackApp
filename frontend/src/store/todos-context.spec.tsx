import React from 'react';
import TodosContextProvider, { TodosContext } from './todos-context';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { fireEvent, render } from '@testing-library/react';

describe('TodoProvider', ()=>
{
	beforeEach(() =>
	{
		Enzyme.configure({ adapter: new Adapter() });
	});

	it('sets status', () =>
	{
		const TestComponent : React.FC = () =>
		{
			const { addTodo, items } = React.useContext(TodosContext);

			return <React.Fragment>
				<div data-testing="title">{items.map(item=>item.title)}</div>
				<button onClick={() => addTodo('Test Todo!')}>Add Todo</button>
			</React.Fragment>;
		};
		const wrapper : Enzyme.ReactWrapper<React.Component> = mount(
			<TodosContextProvider>
				<TestComponent />
			</TodosContextProvider>
		);

		expect(wrapper.find('[data-testing="title"]').text()).toBeFalsy();

		wrapper.find('button').simulate('click');

		expect(wrapper.find('[data-testing="title"]').text()).toBe('Test Todo!');
	});

	it('remove todo', () =>
	{
		const { getByText } = render(
			<TodosContextProvider>
				<TodosContext.Consumer>
					{
						value => <React.Fragment>
							<button onClick={() => value.removeTodo(1)}>Remove Todo</button>
						</React.Fragment>
					}
				</TodosContext.Consumer>
			</TodosContextProvider>);

		fireEvent.click(getByText('Remove Todo'));
	});
	it('add todo', () =>
	{
		const { getByText } = render(
			<TodosContextProvider>
				<TodosContext.Consumer>
					{
						value => <React.Fragment>
							<button onClick={() => value.addTodo('New todo From Jest!')}>Add Todo</button>
							<ul>
								{value.items.map(item =>
								{
									if(item.title === 'New todo From Jest!')
									{
										<li>{item.title}</li>;
									}
								})}
							</ul>
						</React.Fragment>
					}
				</TodosContext.Consumer>
			</TodosContextProvider>);

		fireEvent.click(getByText('Add Todo'));
	});
});
