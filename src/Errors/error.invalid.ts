class ErrorInvalid extends Error {
  public statusCode: number;

  constructor(message: string, status:number) {
    super(message);
    this.statusCode = status;
  }
}

export default ErrorInvalid;
