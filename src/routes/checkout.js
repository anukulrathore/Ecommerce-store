import express from 'express';
import checkout from '../controllers/checkoutController';

const checkoutRouter = express.Router();

checkoutRouter.post('/', checkout);

export default checkoutRouter;