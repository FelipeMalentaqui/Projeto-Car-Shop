import express from 'express';
import CarRoutes from './Routes/Car.routes';
import errorMiddleware from './middlewares/error-middlewares';

const app = express();

app.use(express.json());
app.use(CarRoutes);
app.use(errorMiddleware);

export default app;
