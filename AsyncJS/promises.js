

let isOpen = false

let order = (time, work) => {

    return new Promise((resolve, reject) => {
        if(isOpen) {
            setTimeout(()=>{
                resolve(work())
            },time)
        } else {
            reject(console.log("Our shop is closed"))
        }
    })

}

let work = () => {
    console.log("Lets work bitch")
}


order(2000, work)
    .then(() => {
    return order(0, () => console.log("Production has started"))
})
    .then(() => {
        return order(2000, () => console.log("Fruit was chopped"))
    })
    .catch(() => {
        console.log("Customer left")
    })
    .finally(() => {
        console.log("Teste")
    })

