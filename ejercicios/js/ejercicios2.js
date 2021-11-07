import {printingFunction, NOT_STRING_TEXT, isString} from './common.js'

const backwardText = (text) => {
    let newText = "";
    text.split('').forEach((character) =>newText = character.toString() + newText);
    return newText;
}
const backwardsShow = (text) => (isString(text))
    ? backwardText(text)
    : NOT_STRING_TEXT
const wordCount = (text, search) => (isString(text))
    ? text.replace(/[.,:;]/g, ' ').split(' ').filter((word) => word === search).length
    : NOT_STRING_TEXT
const isPalindrom = (text) => (isString(text))
    ? (backwardText(text) === text)
    : NOT_STRING_TEXT
const deletePatter = (text, pattern) => (isString(text))
    ? text.replace(new RegExp(pattern, 'g'), '')
    : NOT_STRING_TEXT

printingFunction('Backward Text', backwardsShow)
printingFunction('Word Count', wordCount, 'ejemplo')
printingFunction('Is palindrom', isPalindrom)
printingFunction('Delete pattern', deletePatter,"ejemplo")

