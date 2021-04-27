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
    let output = [];
    for(let i = 0; i < array.length; ++i){
        let stringOutput = "";
        let numString = array[i].toString();
        for(let j = 0; j < numString.length; ++j){
            let stringNum = Number(numString[j]);
            stringOutput += phoneticNumberStorage[stringNum];
        }
        output.push(stringOutput);
    }
    return output;
}