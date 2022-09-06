import sumNumders from "./moduleOne.mjs";

const res1 = sumNumders(10, 2)
console.log(res1)

const res2 = sumNumders(5, 10)
console.log(res2)


import { // строгие имена
    one as oneRenemed, //  смена имени через as
    two
} from './moduleOne.mjs'  

console.log(one)
console.log(two)

