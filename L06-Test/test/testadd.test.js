import { add } from '../logic.js'
import { describe } from 'mocha'
import { assert } from 'chai'

describe("Test add", () => {
    it("Test 1 on add", () => {
        let result = add(1, 2)
        let expected = 3
        assert.equal(result, expected)
    })
})