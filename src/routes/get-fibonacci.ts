import express, { Request, Response } from 'express';
import { fibonacci } from '../helpers/fibonacci';

const router = express.Router();

router.get('/api/fibonacci/:number', async (req: Request, res: Response) => {
    const n = parseInt(req.params.number);

    if (isNaN(n) || n < 0) {
        res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
    } else {
        const result = fibonacci(n);
        res.json({ result });
    }
});

export { router as getFibonnacciRouter };