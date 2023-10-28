

export default function CartItem({ cartItem, handleDelete }) {

    const {_id, product_id, service_id, title, img, price, description, facility } = cartItem

    return (
        <div className="flex items-center gap-6 bg-red-100 rounded-lg">
            <div className="h-full">
                <img className="w-40 h-full rounded-l-lg" src={img} alt="" />
            </div>
            <div className="flex justify-around items-center w-full">
                <h1 className="text-3xl flex-grow">
                    {title}
                </h1>
                <h2 className="text-gray-700 font-bold text-2xl mr-5">
                    ৳ {price}
                </h2>
                <div>
                    <button className="btn btn-error text-white mr-5" onClick={()=> handleDelete(_id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
