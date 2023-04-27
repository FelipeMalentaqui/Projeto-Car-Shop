class VerifyCar extends Error {
  public statusCar: number;

  constructor(message: string) {
    super(message);
    this.statusCar = 404;
  }
}

export default VerifyCar;
