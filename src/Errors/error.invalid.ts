class ErrorInvalid extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 422;
  }
}

export default ErrorInvalid;
