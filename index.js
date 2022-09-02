const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

    console.log(myCity)
delete myCity.country
    console.log(myCity)
myCity.country = 'USA'
    console.log(myCity)
delete myCity.popular
delete myCity.country
    console.log(myCity)
myCity['popular'] = true
    console.log(myCity)
const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
    console.log(myCity)

    const myCity2 = {
        city: 'Kaunas',
        info: {
            isPopular: true,
            country: 'Litvas'
        }
    }

    console.log(myCity2.info.isPopular)

    delete myCity2.info['isPopular']
console.log(myCity2)


const name1 = 'Alex'
const postsQty = 23

const userProfile = {
    name1,
    postsQty,
    hasSingedAgreement: false
}

console.log(userProfile)

// глобальные объекты 
globalThis.console.log(10)
console.log(10)
global.console.log(10)

//методы - функции
const myCity3 = {
    city: 'New York',
    cityGreeting() {
        console.log('Greeeeting!!!')
    }
}

myCity3.cityGreeting()


//JSON - JavaScript Object Notation (формат обмена данными, между компьютером в интернете)
//Конвертация из объекта в JSON JSON.stringify. обратно JSON.parse
const post = {
    title: 'MyPost',
    likesQty: 5
}

JSON.stringify(post)

const postStringified = JSON.stringify(post)

JSON.parse(postStringified)

//мутации в JS

const person = {
    name: 'Bob',
    age: 21
}

person.age = 22
person.isAdult = true
console.log(person.age)
console.log(person.isAdult)

//копирование ссылки -  copy by reference
const person2 = person
person2.age = 26
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)

//как избежать мутаций
const person3 = {
    name: 'Bob',
    age: 25
}

const person4 = Object.assign({}, person3)

person4.age = 26

console.log(person4.age) // 26
console.log(person3.age) // 25

const person5 = {
    name: 'Alex',
    age: 28
}

const person6 = { ...person5} //оператор разделения объекта на свойства

person6.name = 'Alice'

console.log(person6)
console.log(person5)

const person7 = {
    name: 'Alex',
    age: 28
}

const person8 = JSON.parse(JSON.stringify(person7)) //ссылки на вложенные объекты не сохраняются

person8.name = 'Alice'

console.log(person8)
console.log(person7)

//функции

function myFn(a,b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFn(10,3))

//самая короткая функция
function myFun() {}
myFun() 
console.log(myFun()) // undefined

// передача значений по ссылке
const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age)

//внутри функции не рекомендуется мутировать объекты ^^^
//ниже пример использования создания копии объекта

const personOne1 = {
    name: 'Bob',
    age: 21 
}

function increasePersonAge1(person) {
    const updatePerson = Object.assign({}, person)
    updatePerson.age +=1
    return updatePerson
}

const updatePersonOne = increasePersonAge1(personOne1)
console.log(personOne1.age)
console.log(updatePersonOne.age)

//колбэк функции - вызывается внутри другой функции
//function anotherFunction() {
//    //действия...
//}
//
//function fnWithCallback(callbackFunction) {
//    callbackFunction()
//}
//
// fnWithCallback(anotherFunction)

function printMyName() {
    console.log('Alex')
}

console.log('Start')
setTimeout(printMyName, 1000) //встроенная функция - будет вызвана через 1000 миллисекунд

//правила работы с функциями
//1. называть функции исходя из выполняемых задач
//2.Одна функция должна выполнять одну задачу
//3. не рекомендуется изменять внешние относительно функции переменные (pure function)

//Области видимости - определяет границы действия переменной

let w
let b

function myFunc() {
    let b 
    w = true
    b = 10
    console.log(b)
}

myFunc()

console.log(w) //true
console.log(b) //undefined

//правила работы с переменными
//1.все переменные объявлять перед их использованием
//2.стараться использовать const везде, где это возможно
//3.внутри функции не изменять переменные с внешних областей видимости

//строгий режим 'use strict' - запрещает использование необъявленных переменных

'use strict' //должна быть в глобальной области видимости
a = 1
console.log(a)

//операторы - встроенная функция
// операторы  
// + - * /   арифмитические
// === !== <= >=    сравнение
// ! && ||  логические
// = присваивание
// typeof - проверить тип значения
// instancof - проверить принадлежность объекта тому или иному классу
// new
// delete
// , - объявить несколько переменных в одной строке (рекомендуется разделять по строкам)
///
///  оператор - встроенная функция (пример оператора присваивания "=" )
// function =(переменная, выражение) {
//      1. получение результата выражения
//      2. поиск переменной по имени
//      3. присваивание результата выражения переменной
//      4. возврат результата выражения
//  }

// унарные операторы (у унарных операторов всегда один операнд (аргумент))
// a++
// +a
// delete obj.a
// typeof a
// new Object()

//бинарные операторы (два операнда (аргумента))
// a = 5 - присваивание
// a + b - сложение
// a += 5 - увеличение значения
// a === b - сравнение значения 2х переменных, сравнивает как тип, так и значение
// a && b - "и" логический оператор (см.ниже)

// инфиксная запись
// a = true
// a + b 
// a += 5
// a || b
// a > b

// префиксная запись
// ++a
// delete obj.a
// typeof a

// постфиксная запись - оператор за операндом
// a++
// myFunction()

//приоритетность операторов
// a + b * c / d - e    --- как в математике

// логические операторы
// ! - не -- возвращает boolean (true false)
// && - и -- возвращает значение одного из операндом
// || - или -- возвращает значение одного из операндом

// ложные значения
// false
// 0
// ..
//      - пустая строка
// undefined
// null

// отрицание отрицания - позволяет проверить ложность значения
// !!10 //true
// !!0 //false

// операторы && (и), || (или) - являются операторами короткого замыкания
// выражение 1 && Выражение 2 
//если выражение 1 ложно
//1. выражение 2 игнорируется
//2. возвращается результат выражения 1
//
// выражение 1 || Выражение 2 
//если выражение 1 истинно
//1. выражение 2 игнорируется
//2. возвращается результат выражения 1

//Цепочка операторов 
// a && b && c && d - ищем ложное
// a || b || c || d - ищем истиное

// оператор разделения объектов
// если у оператора уже существует подобное свойство, оно перезапишется на новое.

const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(button)
console.table(redButton)
 
/// обединение объектов с помощью ...

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'Yellow',
    width: 200,
    height: 300
}

const buttonNew = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(buttonNew)

// конкатенация строк
// обычная конкатенация строки и шаблонные строки

const hello = 'Hello'
const world = 'World'
const greeting = `${hello} ${world}`

console.log(greeting)

//задание
const nameConc = 'My name Alex.'
const cityConc = 'I live in Moscow.'
const greetingConc = `${nameConc} ${cityConc}`

console.log(greetingConc)

// Функциональные выражения

////Объявленная функция
// имеет имя: да
// можно использовать автономно: да
// можно присваивать переменной: да
// можно использовать как аргумент в вызове другой функции : да

//function myFn2 (a,b) {
//    let c
//    a=a+b
//    c=a+b
//    return c
//}

////Функциональное выражение
// имеет имя : нет
// можно использовать автономно : нет
// можно присваивать переменной : да
// можно использовать как аргумент в вызове другой функции : да

//function (a,b) {
//    let c
//    a=a+1
//    c=a+b
//    return c
//}

// присваивание функционального выражения переменной
//const myFunction = function (a,b) {
//      let c
//      a=a+1
//      c=a+b
//      return c
//  }
// myFunction(5, 3) // 9

setTimeout(function(){
    console.log('Отложенное сообщение 2')
}, 1000)

// стрелочные функции - нет имени --- это выражение и всегда анонимные
// (a, b) => {
//     let c
//     a=a+1
//     c+a+b
//     return c
// }
// как дать имя стрелочной функции (пример)
//const myFunction2 = (a, b) => {
//    let c
//    a=a+1
//    c=a+b
//    return c
// }

setTimeout(() => {
    console.log('Отложенное сообщение стрелочной функции')
}, 1000)

//сокращения в стрелочных функциях 
// если один параметр то круглые скобки можно опустить
// a => {
//     //тело функции
// }
// фигурные скобки можно опустить если тело функции состоит из ОДНОГО выражения
// (a, b) => a + b - в этом случае стрелочная функция НЕЯВНО возвращает результат выражения 

// значение параметров функции по умолчанию

function multByFactor(value, multiplier = 2) {
    return value * multiplier
}
console.log(multByFactor(10, 4)) // 40
console.log(multByFactor(5)) // 10

// задание стрелочная функция
const myFuncTest = (value2, multiplier2 = 3) => { // вместо function пишется =>
    return value2 * multiplier2
}
console.log(myFuncTest(10))
console.log(myFuncTest(10, 2))

// задание функциональная (анонимная) функция
const myFuncTest2 = function(value2, multiplier2 = 3) { // нет имени, но есть function
    return value2 * multiplier2
}
console.log(myFuncTest2(100))
console.log(myFuncTest2(100, 2)) 

console.log('Hello GitHub!')
console.log('Hello GitHub!')
console.log('Hello GitHub!')

// значение параметров функции по умолчанию
const newPost = (post, addedAt = Date()) => ({  // => ({   }) - начинаем формирование  
    ...post,                                    // нового объекта и вернуть его НЕЯВНО
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Alex',
    text: 'Hello, have a nice day!'
}
console.table(newPost(firstPost))

//Обработка ошибок
//функция с ошибкой
//   const fnWithError = () => {
//       throw new Error('Some error')
//   }
//   fnWithError()
//   
//   console.log('Continue...')
//   
//   try {
//       // выполнение блока кода
//   } catch (error) {
//       // этот блок выполняется в случае возникновения ошибок в блоке try
//   }

const fnWithError = () => {
        throw new Error('Some error')
    }

try {
    fnWithError()
} catch (error) {
    console.error(error) // полное сообщение об ошибке
    console.log(error.message) // краткое сообщение об ошибке
}

console.log('Continue...')

// МАССИВЫ

const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

console.log(myArray2.length)

const myArray3 = [1, true, 'Alex']
console.log(myArray[0])
console.log(myArray[2])
// добавление - это долго, нужно знать точную длину массива
myArray3[3] = '127'

console.log(myArray3)

myArray3[1] = false

console.log(myArray3)
console.log(myArray3.length)

// функции массивов
// push - добавить элемент в конец массива
// pop - удаляет последний элемент массива
// shift - удаляет первый элемент в массиве
// unshift - добавить элемент в начало массива 
// forEach - выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. 
// map - позволяет вызвать переданную функцию один раз для каждого элемента массива, формируя новый массив из результатов вызова этой функции.

// чем отличается map от forEach js 
// map() возвращает совершенно новый массив с преобразованными элементами и тем же количеством
// данных. В случае forEach(), даже если он вернется undefined, он изменит исходный массив с 
// помощью callback. Поэтому что map() опирается на неизменность и forEach() является мутатором.

myArray3.push(4) // push - добавить элемент в конец массива

console.log(myArray3)

myArray3.pop() // pop - удаляет последний элемент массива

console.log(myArray3)

const removedElement = myArray3.pop()
console.log(myArray3)
console.log(removedElement)

myArray3.unshift(true) // unshift - добавить элемент в начало массива
console.log(myArray3)
myArray3.unshift('abc')
console.log(myArray3)

myArray3.shift() // shift - удаляет первый элемент в массиве
const removedElement2 = myArray3.shift()

console.log(removedElement2)
console.log(myArray3)

const myArray4 = [1, 2, 3]
console.log(myArray4)
myArray4.forEach(el => console.log(el * 2))// forEach - выполняет функцию callback один раз 
console.log(myArray4)                      // для каждого элемента, находящегося в массиве 
myArray4.push(10)                          // в порядке возрастания.
myArray4.forEach(el => console.log(el * 2)) 

const myArray5 = [1, 2, 3]
console.log(myArray5)
const newArray = myArray5.map(el => el * 3) // map - позволяет вызвать переданную функцию один раз 
console.log(newArray)                      // для каждого элемента массива, формируя новый массив 
console.log(myArray5)                       // из результатов вызова этой функции.

const newArray2 = myArray5.map((el) => {
    return el * 3
})

console.log(newArray2)  // [ undefined, undefined, undefined ] - может быть если нет return


// чем отличается map от forEach
// map() возвращает совершенно новый массив с преобразованными элементами и тем же количеством
// данных. В случае forEach(), даже если он вернется undefined, он изменит исходный массив с 
// помощью callback. Поэтому что map() опирается на неизменность и forEach() является мутатором.

// ДЕСТРУКТУРИЗАЦИЯ
