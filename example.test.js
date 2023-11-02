const { test, expect } = require('@jest/globals');
const { addTask } = require('./index');

test('Тестування функції addTask', () => {
	const input = { value: 'Тестове завдання' };
	const button = {
		addEventListener: jest.fn(),
	};
	const list = { children: [] };
	addTask(input, button, list);
	// Перевіряємо, чи викликалася функція addEventListener
	expect(button.addEventListener).toHaveBeenCalled();
});