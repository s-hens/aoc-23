/////////////////////////
// Advent of Code 2023 //
// Day 1.2             //
/////////////////////////

// Imports
import { data1 } from "./day1.1";

// Test data, total should be 613
const testData = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
    "eighthree",
    "eight",
    "vj3",
    "ninefivenine2fiveb",
    "threesix4hcsnpdfqksfour5three"
];

let regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

let digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

let answer1B = 0;

function convertToNum(string) {
    if (!Number.isNaN(Number(string))) {
        return Number(string);
    } else {
        return digits.indexOf(string) + 1;
    }
}

data1.forEach(string => {
    // Use matchAll because it works with global matching
    // Convert to array because matchAll returns an iterator
    // Get just the info we need from that array
    let matches = Array.from(string.matchAll(regex), (match) => match[1]);
    let digit1 = matches.at(0);
    let digit2 = matches.at(matches.length - 1);
    // Convert to Numbers
    digit1 = convertToNum(digit1);
    digit2 = convertToNum(digit2);
    // The calibration value is digit1 and digit 2 concatenated
    let calibrationValue = Number(`${digit1}${digit2}`);
    // The final answer is the sum of all calibration values
    answer1B = answer1B + calibrationValue;
});

// Exports
export { answer1B };

