import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => res
  .status(err.statusCode || 500).json({ message: err.message });

export default errorMiddleware;
