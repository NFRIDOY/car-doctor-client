import axios from "axios"
import { useContext, useEffect, useState } from "react"
import CartItem from "../../components/CartItem/CartItem";
import { AuthContext } from "../../Provider/AuthProvider";


export default function Cart() {

    const {user} = useContext(AuthContext)

    const [cart, setCart] = useState([]);

    // const URL = `http://localhost:5000/cart?email=${user?.email}`
    const URL = `http://localhost:5000/cart`

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setCart(res.data)
                console.log(res.data)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/cart/${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.deletedCount===0) {
                    return alert("Delete Failed")
                }
                const remaining = cart.filter(item => item._id !== id)
                setCart(remaining)
                return alert("Deleted")
            })
    }

    return (
        <div className="px-20 py-8">
            <h1 className="text-center text-5xl pb-10">Cart Items: {cart.length}</h1>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    cart.map(cartItem => <CartItem key={cartItem?._id} cartItem={cartItem} handleDelete={handleDelete}></CartItem>)
                }
            </div>

        </div>
    )
}
