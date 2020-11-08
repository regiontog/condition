/// <reference types="jest" />

import { sayHello } from "./hello";

test("sayHello test", () => {
    expect(sayHello()).toBe(1);
});
