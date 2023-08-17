
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var pascalTriangle = []
    var line1 = [1]
    var line2 = [1,1]
    pascalTriangle.push(line1)
    if (numRows===1) {
        return pascalTriangle
    }
    pascalTriangle.push(line2)
    if (numRows===2) {
        return pascalTriangle
    }
    for (let i = 2; i < numRows; i++) {
        let newLine = [1]
        let prevLine = pascalTriangle[i-1]
        let lengthNewLine = (i+1)-2
        for (let j = 0; j< lengthNewLine; j++) {
            let newNode = prevLine[j] + prevLine[j+1]
            newLine.push(newNode)
        }
        newLine.push(1)
        pascalTriangle.push(newLine)
    }
    return pascalTriangle
};

console.log(generate(5))