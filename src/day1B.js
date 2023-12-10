/////////////////////////
// Advent of Code 2023 //
// Day 1 Part 2        //
/////////////////////////

// Imports
import { data1, calibrationCode } from "./day1A";

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

// Regex to find first digit
let regexFirst = /\d|one|two|three|four|five|six|seven|eight|nine/;

// Regex to find last digit
let regexLast = /^.*(\d|one|two|three|four|five|six|seven|eight|nine)(?=[^.]*$)/;


testData.forEach(string => {
    console.log(string);
    console.log(string.match(regexFirst).at(0));
    console.log(string.match(regexLast).at(string.match(regexLast).length - 1));
});

const answer1B = "idk";

// Exports
export { answer1B };

