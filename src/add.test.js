import {
  test,
  expect,
} from "@jest/globals";

import { add } from "./add.js";

test("adds 2 and 3", function () {
  expect(add(2, 3)).toBe(5);
});