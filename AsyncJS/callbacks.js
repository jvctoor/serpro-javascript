

let order = (fruit, product) => {
    setTimeout(()=> {
        console.log(`${stocks.Fruits[fruit]} was selected`)
        product()
    }, 2000)
}

let production = () => {
    setTimeout(()=>{
        console.log("order received, starting production")
    },0)
}



order(0,production)



let stocks = {
    Fruits: ["banana", "maçã", "pera"],
    BaseLiquid: ["water", "milk"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}



