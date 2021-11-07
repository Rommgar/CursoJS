
export const NOT_STRING_TEXT = 'The value is not a String'


const makeFunction = (functionToExec, value, extra=null) => (extra !== null)
                                                                ? functionToExec(value, extra)
                                                                : functionToExec(value)
export const printingFunction = (groupName, functionToExec, extra=null) => {
    console.groupCollapsed(groupName);
        console.log('Test number: ');
        console.log(makeFunction(functionToExec, 1, extra));
        console.log('Test Bool: ')
        console.log(makeFunction(functionToExec, true, extra));
        console.log('Test []: ');
        console.log(makeFunction(functionToExec, [], extra));
        console.log('Test {}: ')
        console.log(makeFunction(functionToExec, {}, extra));
        console.log('Test text: ');
        console.log(makeFunction(functionToExec, "Esto es un ejemplo, ejemplo", extra));
    console.groupEnd();
}
export const isString = (text) => typeof text === "string";