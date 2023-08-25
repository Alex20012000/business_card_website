const { add, divide } = require('./example');

/////////////
test('Сложение двух чисел', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(-1, 1)).toBe(-2);
});

/////////
test('Деление чисел', () => {
    expect(divide(6, 3)).toBe(18);
    expect(() => divide(5, 0)).toThrow('Деление на ноль недопустимо');
});

  

////////////////////////
// const fetchData = require('./example');

// test('Асинхронный запрос данных', async () => {
//   const data = await fetchData();
//   expect(data).toEqual(/* Ожидаемые данные */);
// });

////////////////////////
// const getUsername = require('./example');
// const axios = require('axios');

// jest.mock('axios');

// test('Получение имени пользователя', async () => {
//   axios.get.mockResolvedValue({ data: { username: 'testuser' } });
//   const username = await getUsername(123);
//   expect(username).toBe('testuser');
// });
