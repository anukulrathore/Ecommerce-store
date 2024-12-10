import store from "../models/store";

const addItemToCart = (req,res) => {
    const { userId, items } = req.body;

    if (!userId || !items || !Array.isArray(items) || items.length===0){
        return res.status(400).json({message: "Invalid Request"})
    }
    //initialize cart
    if(!store.carts[userId]){
        store.carts[userId] = { userId, items:[]}
    }

    //add items to cart
    store.carts[userId].items.push(...items);
    return res.status(200).json(store.carts[userId]);
}

export default addItemToCart;