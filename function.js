const input = document.querySelector('.input-container input'); //
const button = document.querySelector('.input-container button'); //
const list = document.querySelector('.todo-list'); //



button.addEventListener('click', () => {//
	const inputValue = input.value.trim();
	if (inputValue.length > 0) {
		if (inputValue.length > 90) {
			alert('забагато символів');
		}
		else {
			const li = document.createElement('li');
			li.className = 'todo-list-item';
			const deleteBtn = document.createElement('button');
			deleteBtn.innerText = 'Delete';
			li.innerText = inputValue;
			list.appendChild(li);
			li.appendChild(deleteBtn);

			deleteBtn.addEventListener('click', () => {
				list.removeChild(li);
			});
		}
	}
	else {
		alert('Введіть дані'); // Замість document.write, використовуйте alert для виведення повідомлення.
	}
});