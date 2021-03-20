import { runTest, assertEqual } from "./testHelper.mjs";
import { numberToEnglish } from "./numberToEnglish.mjs";

export function runTests() {
    console.log("Running tests...");
    runTest(testFunction);
    runTest(testDigits);
    runTest(testTwoDigits);
}

function testFunction() {
    let result = numberToEnglish(1);
    assertEqual(typeof(result), "string", "Must be a string.");
}

function testDigits() {
    const answers = ["zero", "one", "two",
    "three", "four", "five", "six", "seven",
    "eight", "nine"];
    for (let i = 0; i < 10; i++) {
        let result = numberToEnglish(i);
        assertEqual(result, answers[i]);
    }
}

function testTwoDigits() {
    assertEqual(numberToEnglish(11), "eleven");
    assertEqual(numberToEnglish(21), "twenty one");
    assertEqual(numberToEnglish(99), "ninety nine");
    assertEqual(numberToEnglish(30), "thirty");
}