import { v4 } from "uuid";
import store from "../models/store";

export const generateDiscount = (req,res) => {
    const n=5;

    //generate discount coupon
    if(store.orderhistory.orderCount % n ===0 ){
        const code = v4.slice(0,8).toUpperCase()
        store.discountCodes[code] = {isValid:true}
        return res.status(201).json({code})
    }

    return res.status(400).json({ message: `Discount code not applicable on this order` });
};

export const getSummary = (req,res) => {
    const totalItemsPurchased = store.orders.reduce((sum, order) => {
        const cart = store.carts[order.cartId];
        return sum + (cart ? cart.items.reduce((count, item) => count + item.quantity, 0) : 0)
    }, 0);

    const totalPurchaseAmount = store.orders.reduce((sum, order) => sum+order.finalAmount, 0);
    const discountCodes = Object.keys(store.discountCodes);
    const totalDiscountAmount = store.orders.reduce((sum,order) => sum + order.discountApplied, 0);

    return res.status(200).json({
        totalItemsPurchased,
        totalPurchaseAmount,
        totalDiscountAmount,
        discountCodes,
    })
}



