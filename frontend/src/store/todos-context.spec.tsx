import React from 'react';
import TodosContextProvider, { TodosContext } from './todos-context';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('TodoProvider', ()=>
{
	Enzyme.configure({ adapter: new Adapter() });
	it('sets status', () =>
	{
		const TestComponent : React.FC = () =>
		{
			const { addTodo, items } = React.useContext(TodosContext);

			return <React.Fragment>
				<div data-testing = 'value'>{items.map(item=>item.title)}</div>
				<button onClick={() => addTodo('Test Todo!')}>Add Todo</button>
			</React.Fragment>;
		};
		const wrapper : Enzyme.ReactWrapper<any> = mount(
			<TodosContextProvider>
				<TestComponent />
			</TodosContextProvider>
		);

		expect(wrapper.find('[data-testing="value"]').text()).toBeFalsy();

		wrapper.find('button').simulate('click');

		expect(wrapper.find('[data-testing="value"]').text()).toBeTruthy();
	});
});
