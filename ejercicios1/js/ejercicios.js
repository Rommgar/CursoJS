
const NOT_STRING_TEXT = 'The value is not a String'

const isString = (text) => typeof text === "string";
const countCharactersText = (text) => (isString(text)) ? text.length : NOT_STRING_TEXT
const sliceText = (text, last_index) => (isString(text)) ? text.slice(0, last_index) : NOT_STRING_TEXT
const splitText = (text, splitCharacter) => (isString(text)) ? text.split(splitCharacter) : NOT_STRING_TEXT
const repeatText = (text, rep) => {
    if (isString(text)) {
        if (rep > 1){
            rep--;
            text += "\n" + repeatText(text, rep)
        }
        return text
    }else {
        return NOT_STRING_TEXT
    }
}
const makeFunction = (functionToExec, value, extra=null) => (extra !== null)
                                                                ? functionToExec(value, extra)
                                                                : functionToExec(value)

const printingFunction = (groupName, functionToExec, extra=null) => {
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
        console.log(makeFunction(functionToExec, "Esto es un ejemplo", extra));
    console.groupEnd();
}

printingFunction("Character Count" ,countCharactersText);
printingFunction("Slice Text", sliceText, 23);
printingFunction("Split Text", splitText, " ")
printingFunction("Repeat Text", repeatText, 3)
