/* 
    Author: Doylan Mihov
    Date: 04/27/2021
*/

let phoneticNumberStorage = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
let inputArgumentArray = [];

for (let i = 2; i < process.argv.length; ++i) {
    inputArgumentArray.push(process.argv[i]);
}

const converter = array => {
    let convertedArray = [];
    for(let i = 0; i < array.length; ++i){
        let stringOutput = "";
        let numString = array[i].toString();
        for(let j = 0; j < numString.length; ++j){
            let stringNum = Number(numString[j]);
            stringOutput += phoneticNumberStorage[stringNum];
        }
        convertedArray.push(stringOutput);
    }
    return convertedArray;
}

const printPhoneticArray = convertedArray => {
    for(let i = 0; i < convertedArray.length-1; ++i){
        process.stdout.write(convertedArray[i] + ",");
    }
    process.stdout.write(convertedArray[convertedArray.length-1]);
}

let phoneticArray = converter(inputArgumentArray);
printPhoneticArray(phoneticArray);