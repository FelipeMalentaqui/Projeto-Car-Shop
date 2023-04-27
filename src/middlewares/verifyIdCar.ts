import { NextFunction, Request, Response } from 'express';

const verifyCar = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id) {
    // return res.status(404).json({ message: 'Car not found' });
    throw new Error('Car not found');
  }

  if (id === undefined || id === null) {
    // return res.status(422).json({ message: 'Invalid mongo id' });
    throw new Error('Invalid mongo id');
  }

  next();
};

export default verifyCar;
