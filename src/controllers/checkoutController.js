import { v4 } from "uuid";
import store from "../models/store";
import { validateDiscount } from "../utils/discountHelper";

const checkout = (req,res) => {
    const { cartId, discountCode } = req.body;

    if(!store.carts[cartId]){
        return res.status(400).json({message: "Cart not found"})
    }

    const cart = store.carts[cartId];
    const totalAmount = cart.items.reduce((acc,item) => acc + item.price * item.quantity, 0);

    let finalAmount = totalAmount;
    let discountApplied = 0;

    //calculate and validate discount
    if(discountCode){
        const isValid = validateDiscount(discountCode)
        if(!isValid){
            return res.status(200).json({message: "Invalid Coupon"})
        }

        discountApplied = (totalAmount * 0.1);
        finalAmount -= discountApplied;
        store.discountCodes[discountCode].isValid = false;
    }

    //create order
    const orderId = v4();
    store.orders.push({
        orderId,
        cartId,
        userId: cart.userId,
        totalAmount,
        discountApplied,
        finalAmount,
    });

    //clear cart
    delete store.carts[cartId];
    
    store.orderhistory.orderCount++;

    return res.status(201).json({
        orderId,
        totalAmount,
        discountApplied,
        finalAmount
    });

}

export default checkout;