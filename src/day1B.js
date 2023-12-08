/////////////////////////
// Advent of Code 2023 //
// Day 1 Part 2        //
/////////////////////////

// Imports
import { data1, calibrationCode } from "./day1A";

// Test data, should be 634
const testData = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
    "eighthree",
    "twone",
    "vj3",
    "ninefivenine2fiveb",
    "eight",
    "threesix4hcsnpdfqksfour5three"
]

// Define valid spelled-out digits
const spelledOutDigits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// Once again, using a factory function to organise the data
const organisedData = [];

testData.forEach (datum => {
    const code = datum;
    let digit1;
    let digit2;

    // Find first and last numerical digits
    for (let i = 0; i < code.length; i++) {
        if (Number.isInteger(Number(code[i])) && !digit1) {
            digit1 = code[i];
        } else if (Number.isInteger(Number(code[i])) && digit1) {
            digit2 = code[i];
        }
        if (!digit2) {
            digit2 = digit1;
        }
    }
    // Find first and last spelled-out digits. Check if their indices give them priority over the numerical digits
    // Do it twice to catch overlaps (ex. "eightwo") or spelled-out digits that count twice (ex. "eight")
    spelledOutDigits.forEach(digit => {
        if ((code.includes(digit) && !digit1) || code.includes(digit) && (code.indexOf(digit) < code.indexOf(digit1))) {
            digit1 = digit;
        } else if (code.includes(digit) && (code.lastIndexOf(digit) > code.indexOf(digit2))) {
            digit2 = digit;
        }
        
        if ((code.includes(digit) && !digit1) || code.includes(digit) && (code.indexOf(digit) < code.indexOf(digit1))) {
            digit1 = digit;
        } else if (code.includes(digit) && (code.lastIndexOf(digit) > code.lastIndexOf(digit2))) {
            digit2 = digit;
        }
    })

    /* Somewhere HERE is where digit2 gets fucked in some cases. But how? */

    // If digit1 or digit2 is spelled-out, make it numerical
    if (!Number.isInteger(Number(digit1))) {
        digit1 = spelledOutDigits.indexOf(digit1) + 1;
    }
    if (!Number.isInteger(Number(digit2))) {
        digit2 = spelledOutDigits.indexOf(digit2) + 1;
    }

    // The calibration value is still digit1 and digit 2 concatenated
    let calibrationValue = Number(`${digit1}${digit2}`);

    //console.log(digit1, digit2, calibrationValue);
    const newCalibrationCode = calibrationCode(code, digit1, digit2, calibrationValue);
    organisedData.push(newCalibrationCode);
})

let answer1B = 0;

organisedData.forEach(datum => {
    console.log(datum.code, datum.digit1, datum.digit2, datum.calibrationValue);
    answer1B = answer1B + datum.calibrationValue;
});

console.log(answer1B);

// Exports
export { answer1B };