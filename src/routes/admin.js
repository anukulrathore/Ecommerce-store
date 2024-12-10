import express from 'express'
import { generateDiscount, getSummary } from '../controllers/adminController';

const adminRouter = express.Router();

adminRouter.post('/generate-discount', generateDiscount);
adminRouter.get('/summary', getSummary);

export default adminRouter;