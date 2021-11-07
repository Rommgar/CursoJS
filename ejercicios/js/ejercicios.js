import {NOT_STRING_TEXT, isString, printingFunction} from './common.js'

const countCharactersText = (text) => (isString(text)) ? text.length : NOT_STRING_TEXT;
const sliceText = (text, last_index) => (isString(text)) ? text.slice(0, last_index) : NOT_STRING_TEXT;
const splitText = (text, splitCharacter) => (isString(text)) ? text.split(splitCharacter) : NOT_STRING_TEXT;
const repeatText = (text, rep) => (isString(text)) ? text.repeat(rep) : NOT_STRING_TEXT;

printingFunction("Character Count" ,countCharactersText);
printingFunction("Slice Text", sliceText, 23);
printingFunction("Split Text", splitText, " ");
printingFunction("Repeat Text", repeatText, 3);
