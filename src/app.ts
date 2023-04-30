import express from 'express';
import CarRoutes from './Routes/Car.routes';
import MotorcyclesRoutes from './Routes/Motorcycles.routes';
import errorMiddleware from './middlewares/error-middlewares';

const app = express();

app.use(express.json());
app.use(CarRoutes);
app.use(MotorcyclesRoutes);
app.use(errorMiddleware);

export default app;
