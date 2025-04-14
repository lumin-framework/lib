import * as assert from "uvu/assert"
import { test } from "uvu"

test("basic math", () => {
    assert.equal(1 + 1, 2)
})

test.run()