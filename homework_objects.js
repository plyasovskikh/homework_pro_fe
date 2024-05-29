// ДЗ

// 1. Обращение к свойству объекта: Создайте объект person с свойствами name и age, затем напишите код, который обращается к свойству name объекта person и выводит его значение.

const user = {

    firstname: 'Jane',
    lastname: 'Plyasovskikh',
    age: 26
}
console.log(user.age)

// 2. Проверка наличия свойства: Напишите функцию, которая принимает объект и имя свойства, и возвращает true, если это свойство существует в объекте, и false в противном случае.

function hasProperty(obj, propName) {
    return propName in obj;
}
console.log(hasProperty(user, 'sex')) //false
console.log(hasProperty(user, 'age')) //true
// 2 вариант решения задачи: 

const checkProperty = (obj, prop) =>  obj[prop] ? true : false;

console.log(checkProperty({ age: 29 }, 'age')); // true
console.log(checkProperty({ age: 29 }, 'firstname')); // false
console.log(checkProperty({ age: 29 }, 'city')); // false

// 2. Проверка наличия свойства: Напишите функцию, которая принимает объект и имя свойства, и возвращает true, если это свойство существует в объекте, и false в противном случае.

const checkProperty = (obj, prop) =>  obj[prop] ? true : false;

// console.log(checkProperty({ age: 29 }, 'age')); // true
// console.log(checkProperty({ age: 29 }, 'firstname')); // false
// console.log(checkProperty({ age: 29 }, 'city')); // false


const place = {
  country: 'Germany',
  city: 'Berlin',
  street: 'Achterstr.',
  building: 1,
  apartment: 39
}

console.log(place.city); // 'Berlin'
console.log(place.apartment); // 39
console.log(place.postcode); // undefined

const key1 = 'city';
const key2 = 'apartment';
const key3 = 'postcode';

console.log(place[key1]); // 'Berlin'
console.log(place.key1); // undefined

console.log(place[key2]); // 39
console.log(place[key3]); // undefined

// 3. Изменение свойства объекта: Напишите код, который изменяет значение свойства age объекта person на новое значение.

user.age = 30;
console.log(user.age);

// 4. Добавление нового свойства: Напишите код, который добавляет новое свойство gender со значением "male" к объекту person.

user.gender = 'male'
console.log(user.gender)
console.log(user)

// 5. Удаление свойства: Напишите код, который удаляет свойство age из объекта person.

delete user.age
console.log(user)

// 6. Обращение к вложенным свойствам: Создайте объект car с вложенными свойствами engine и wheels, затем напишите код, который обращается к свойству engine объекта car и выводит его значение.

// Создание объекта car с вложенными свойствами engine и wheels
const car = {
    engine: {
        type: 'V8',
        horsepower: 350
    },
    wheels: {
        count: 4,
        size: 18
    }
};

// Обращение к свойству engine и вывод его значения
console.log(car.engine); // { type: 'V8', horsepower: 450 }
console.log(car.engine.type); // 'V8'
console.log(car.engine.horsepower); // 450
