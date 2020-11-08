export const sayHello = (): void => {
    const g: Record<string, any> = globalThis;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const c: Record<string, any> = g.console;

    c.log("hello");
};
