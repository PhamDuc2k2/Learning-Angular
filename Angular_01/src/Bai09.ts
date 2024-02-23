console.clear()
type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

let productsList : Product[] = [
    {
        id: 1,
        name: "Điều hòa",
        price: 24,
        quantity: 178
    },
    {
        id: 2,
        name: "Điều hòa",
        price: 245,
        quantity: 178
    },
    {
        id: 3,
        name: "Điều hòa",
        price: 23,
        quantity: 178
    },
    {
        id: 4,
        name: "Điều hòa",
        price: 263,
        quantity: 178
    },
    {
        id: 5,
        name: "Điều hòa",
        price: 234,
        quantity: 178
    }
]



console.log("Giá :" ,productsList.reduce((sumValue, item) => {

    return sumValue + (item.price*item.quantity)
}, 0
))

console.log("Những sản phẩm có giá lớn hơn 100: ", productsList.filter(item => {
    return item.price > 100
}))

const productsLisrDes = productsList.map(item => {
    return `Sản phẩm ${item.name} có giá ${item.price} đồng và còn ${item.quantity} sản phẩm`
})

console.log(productsLisrDes)

console.log("Giá của các mặt hàng có giá  < 100:" ,productsList.reduce((sumValue, item) => {
    if(item.price < 100)
        return sumValue + item.quantity
    return sumValue
}, 0
))

let getDiscountedProducts = (products : Product[], discount : number):any => {
    return products.map(item => {
        return {
            id: item.id,
            name: item.name,
            price: Math.floor(item.price - item.price * discount / 100),
            quantity: item.quantity,
        }
    })
}
console.log(getDiscountedProducts(productsList, 30))