export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  // Add new error to the repository
  addError(errorCode, description) {
    this.errors.set(errorCode, description);
  }

  // Read description of the error by its code
  translate(errorCode) {
    if (this.errors.has(errorCode)) {
      return this.errors.get(errorCode);
    }
    return 'Unknown error';
  }
}
