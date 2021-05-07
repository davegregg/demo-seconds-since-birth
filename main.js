let birthYear = prompt("What year were you born? (Example: 1991)")
if (birthYear === null) {
    alert("Since YOU didn't give us a year, we're going to assume you're ashamed of your age, and use 2000.")
    birthYear = 2000
} else {
    birthYear = Number(birthYear)
}

let birthMonth = prompt("What month (as a number) were you born? (Example: 2)")
if (birthMonth === null) {
    alert("We'll use the month October.")
    birthMonth = 10
} else {
    birthMonth = parseInt(birthMonth)
}

let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth()
let secondsInMonth = 60 * 60 * 24 * 30

console.log({birthYear})
console.log({birthMonth})
console.log({currentYear})
console.log({currentMonth})
console.log({secondsInMonth})

let yearsInBetween = currentYear - birthYear - 1

let monthsInBetween = yearsInBetween * 12
let monthsInBirthYear = 12 - birthMonth
let monthsInCurrentYear = currentMonth + 1
let totalMonths = monthsInBirthYear + monthsInBetween + monthsInCurrentYear

let totalSeconds = (totalMonths * secondsInMonth).toLocaleString()
console.log({totalSeconds})

document.write(`<h3>${totalSeconds}</h3>`)