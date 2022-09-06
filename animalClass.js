class Animal {
    static count = 0 // начальное значение созданных экземпляров
    constructor(view, name, food, voice, add) {
        this.view = view
        this.name = name
        this.food = food
        this.voice = voice
        this.instanceId = ++Animal.count // счетчик экземпляров
    }

    infoShowAnimal() {
        console.log(`${this.view} по кличке ${this.name} кушает ${this.food} и издает звуки ${this.voice}.`)
    }
}

const dog = new Animal('Собака', 'Боб', 'кость', 'гав-гав')
console.log(dog.instanceId)
dog.infoShowAnimal()

const cat = new Animal('Кошка', 'Софи', 'мышку', 'мяу-мяу')
console.log(cat.instanceId)
cat.infoShowAnimal()

const pig = new Animal('Поросенок', 'Пепа', 'морковку', 'хрю-хрю')
console.log(pig.instanceId)
pig.infoShowAnimal()

console.log('Всего было создано' + ' ' + Animal.count + ' ' + 'животных')

const crow = new Animal('Ворона', 'Кар Карыч', 'орешки', 'кар-кар')
console.log(crow.instanceId)
crow.infoShowAnimal()

console.log('Всего было создано' + ' ' + Animal.count + ' ' + 'животных')