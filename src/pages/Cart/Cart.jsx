import axios from "axios"
import { useEffect, useState } from "react"
import CartItem from "../../components/CartItem/CartItem";


export default function Cart() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/cart")
            .then(res => {
                setCart(res.data)
                console.log(res.data)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/cart/${id}`)
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div className="px-20 py-8">
            <h1 className="text-center text-5xl pb-10">Cart Items: {cart.length}</h1>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    cart.map(cartItem => <CartItem key={cartItem._id} cartItem={cartItem} handleDelete={handleDelete}></CartItem>)
                }
            </div>

        </div>
    )
}
