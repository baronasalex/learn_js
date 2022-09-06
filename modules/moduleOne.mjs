const sum = (a, b) => a + b

export default sum // экспорт по дефолту - можно использовать разные имена, без дефолта имена строго

const one = 1
const two = 'two'

export {   // строгие имена
    one,
    two
}