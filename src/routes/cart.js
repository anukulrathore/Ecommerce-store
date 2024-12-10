import express from 'express';
import addItemToCart from '../controllers/cartController';

const cartRouter = express.Router();

cartRouter.post('/add', addItemToCart)

export default cartRouter;