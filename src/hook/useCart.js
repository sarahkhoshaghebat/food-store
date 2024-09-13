import { useEffect, useState } from "react"

export const UseCart = () => {
    const [cartItems,setCartItems]= useState()


    useEffect(()=>{
        const data = localStorage.getItem('add-to-cart')
        setCartItems(!!JSON.parse(data)? JSON.parse(data):[])
    },[])

    useEffect(()=>{
        if( cartItems !== undefined)
        localStorage.setItem('add-to-cart', JSON.stringify(cartItems))
    },[cartItems])


    const addToCart = (itemId) => {
        if(!cartItems?.find((item) => item.id === itemId))
        setCartItems([...cartItems,{id: itemId, count: 1}])
        else
        setCartItems(cartItems.map((item)=>{
        if(item.id === itemId)
            return {...item, count: item.count +1}
        else
            return item
        }))
    }
    const removeFromCart =(itemId) => {
        setCartItems (cartItems.map((i) => {
            if(i.id === itemId)
                return {...i, count: i.count === 0 ? 0 : i.count - 1 }
            else return i
        }))
    }

    const checkout =() => {
        const paymentGatewayURL = "https://your-payment-gateway.com/checkout";
        window.location.href = paymentGatewayURL;
    }

    const deleteCart = ()=> {
        setCartItems([]);
        localStorage.removeItem('add-to-cart')
        localStorage.clear()}

    return {cartItems, addToCart, removeFromCart,deleteCart,checkout}
}