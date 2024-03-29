const arr = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
arr.forEach(
    (a) => {
        console.log('Привет, ' + a)
    });

const arr2 = [1, 2, 3, 4, 5];
const newArr2 = arr2.map(item => item * 10);
console.log(newArr2);

const arr3 = [5, 12, 8, 130, 44];
const newArr3 = arr3.filter(item => item > 10);
console.log(newArr3);

const arr4 = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}];
const filteredArr4 = arr4.filter(item => item.age > 18);
const mappedArr4 = filteredArr4.map(item => item.name + ' ' + '(' + item.age + ' лет)');
console.log(mappedArr4);

const arr5 = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
const reducedArr5 = arr5.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(reducedArr5);