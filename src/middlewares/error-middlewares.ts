import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err.statusCar) {
    return res.status(err.statusCar).json({ message: err.message });
  }

  return res.status(500).json({ error: err.message });
};

export default errorMiddleware;
