import ErrorRepository from '../main';

test('Add new error to the repository', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.addError(1, 'Error 1');
  expect(errorRepository.errors.get(1)).toBe('Error 1');
});

test('Read description of the error by its code', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.addError(1, 'Error 1');
  errorRepository.addError(2, 'Error 2');
  errorRepository.addError(3, 'Error 3');
  expect(errorRepository.translate(1)).toBe('Error 1');
  expect(errorRepository.translate(2)).toBe('Error 2');
  expect(errorRepository.translate(3)).toBe('Error 3');
});

test("Recieve 'Unknown error' if there is no such error code", () => {
  const errorRepository = new ErrorRepository();
  errorRepository.addError(1, 'Error 1');
  errorRepository.addError(2, 'Error 2');
  expect(errorRepository.translate(4)).toBe('Unknown error');
});
