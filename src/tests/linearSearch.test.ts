import { test, describe } from "node:test";
import { linearSearch  } from "@/algorithms";
import assert from "node:assert/strict";

describe('Linear Search', () => {
    test('should return true when search value is in an array', () => {
        const testArr = [1,2,3,4];
        assert.strictEqual(linearSearch(testArr, 3), true);
    });

    test('should return false when search value is not in an array', () => {
        const testArr = [1,2,3,4];
        assert.strictEqual(linearSearch(testArr, 5), false);
    });

    test('should return true for bondary values', () => {
        const testArr = [1,2,3,4];
        assert.strictEqual(linearSearch(testArr, 1), true, 'failed to find first value in an array');
        assert.strictEqual(linearSearch(testArr, 4), true, 'failed to find last value in an array');
    });
});