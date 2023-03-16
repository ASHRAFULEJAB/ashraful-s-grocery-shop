import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/features/carts/cartSlice';

const SingleCart = ({ carts }) => {
    const dispatch = useDispatch()
    const total = carts.price * carts.quantity;

    const handleRemove = () => {
        dispatch(removeFromCart(carts))
    }


    return (
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
                <div class="w-20">
                    <img
                        class="h-24"
                        src={carts.image}
                        alt=""
                    />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{carts.name}</span>
                    <span class="text-red-500 text-xs">Apple</span>
                    <button
                        onClick={handleRemove}
                        class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                        Remove
                    </button>
                </div>
            </div>
            <div class="flex justify-center w-1/5">
                <span> {carts.quantity} pc</span>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">
                {carts.price}
            </span>
            <span class="text-center w-1/5 font-semibold text-sm">
                {total}
            </span>
        </div>




    );
};




export default SingleCart;


