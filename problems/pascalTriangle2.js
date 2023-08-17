/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var pascalTriangle = []
    var line1 = [1]
    var line2 = [1,1]
    pascalTriangle.push(line1)
    if (rowIndex===0) {
        return pascalTriangle[0]
    }
    pascalTriangle.push(line2)
    if (rowIndex===1) {
        return pascalTriangle[1]
    }
    for (let i = 2; i < rowIndex+1; i++) {
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
    return pascalTriangle[rowIndex]
};