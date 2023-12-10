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

let regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

testData.forEach(string => {
    
    // Use matchAll because it works with global matching
    // Convert to array because matchAll returns an iterator
    // Get just the info we need from that array

    let matches = Array.from(string.matchAll(regex), (match) => match[1]);
    let digit1 = matches.at(0);
    let digit2 = matches.at(matches.length - 1);
    console.log(string, digit1, digit2);

});

const answer1B = "idk";

// Exports
export { answer1B };

