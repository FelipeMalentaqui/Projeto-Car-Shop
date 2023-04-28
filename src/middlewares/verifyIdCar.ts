import { NextFunction, Request, Response } from 'express';

const verifyCar = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id) {
    // return res.status(404).json({ message: 'Car not found' });
    throw new Error('Car not found');
  }

  next();
};

export default verifyCar;
