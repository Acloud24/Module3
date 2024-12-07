// "" + 1 + 0
// "" - 1 + 0
// true + false
// !true
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// " -9 " + 5
// " -9 " - 5
// null + 1
// undefined + 1
// undefined == null
// undefined === null
// " \t \n" - 2

// let three = "3"
// let four = "4"
// let thirty = "30"
// //what is the value of the following expressions?
// let addition = three + four
// let multiplication = three * four
// let division = three / four
// let subtraction = three - four
// let lessThan1 = three < four
// let lessThan2 = thirty < four

// (0) console.log('#1 zero is true')
// if ("0") console.log('#2 zero is true')
// if (null) console.log('null is true')
// if (-1) console.log('negative is true')
// if (1) console.log('positive is true')

// let a = 2, b = 3;
// let result = `${a} + ${b} is `

// result += (a+b < 10) ? 'less than 10' : 'greater than 10'

// console.log(result)

// const basketballGame = {
//     score: 0,
//     freeThrow() {
//     this.score++;
//     },
//     basket() {
//     this.score += 2;
//     },
//     threePointer() {
//     this.score += 3;
//     },
//     halfTime() {
//     console.log('Halftime score is '+this.score);
//     }
//     }
//     //modify each of the above object methods to enable function chaining as below:
//     basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();