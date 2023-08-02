



function reverse(str){

    var strRevertida = []

    for (let i = str.length-1; i >= 0; i--) {
        strRevertida.push(str[i])
    }


    return strRevertida.join('')

}


module.exports.reverse = reverse





