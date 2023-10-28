

export default function CartItem({ cartItem }) {

    const { product_id, service_id, title, img, price, description, facility } = cartItem

    return (
        <div className="flex items-center gap-6 bg-red-100 rounded-lg">
            <div className="h-full">
                <img className="w-40 h-full rounded-l-lg" src={img} alt="" />
            </div>
            <div className="flex justify-around items-center w-full">
                <h1 className="text-3xl">
                    {title}
                </h1>
                <h2 className="text-gray-700 font-bold text-2xl">
                    ৳ {price}
                </h2>
                <div>
                    <button className="btn btn-error text-white">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
