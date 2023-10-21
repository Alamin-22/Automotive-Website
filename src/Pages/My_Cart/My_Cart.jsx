import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCart_Card from "./MyCart_Card";

const My_Cart = () => {
    const AddedCarts = useLoaderData();

    const [Carts, setCarts] = useState(AddedCarts);


    return (
        <div className="max-w-7xl px-3  mx-auto my-10">
            {
                Carts.length === 0 ? <h1>You have not added any Cart Yet</h1>
                    :
                    <div className=" grid lg:grid-cols-2 gap-5">
                        {
                            Carts.map((Cart) => <MyCart_Card key={Cart._id} Carts={Carts} setCarts={setCarts} Cart={Cart}></MyCart_Card>)
                        }
                    </div>
            }
        </div>
    );
};

export default My_Cart;