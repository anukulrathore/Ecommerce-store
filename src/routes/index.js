import express from "express";
import cartRouter from "./cart";
import checkoutRouter from "./checkout";
import adminRouter from "./admin";

const router = express.Router();

router.use('/cart', cartRouter);
router.use('/checkout', checkoutRouter);
router.use('/admin', adminRouter);

export default router;