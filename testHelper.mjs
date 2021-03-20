export { runTest, assertEqual };

let testCount;
let passCount;

function runTest(fn) {
    testCount++;
    console.log(`Testing ${fn.name}`);
    testCount = 0;
    passCount = 0;
    fn();
    console.log(`  Passed ${passCount} out of ${testCount} tests.`);
}

function assertEqual(val, expected, name) {
    testCount += 1;
    if (name === undefined) {
        name = `Test ${testCount}`;
    }

    // HACK: Convert values to JSON format and compare
    // that - to handle arrays and objects better.
    // Note: Might be wrong for objects since attribute order
    // is undefined in JSON.
    val = JSON.stringify(val);
    expected = JSON.stringify(expected);

    if (val === expected) {
        passCount += 1;
    } else {
        console.error(`  ${name} failed (${val} != ${expected})`);
    }
}