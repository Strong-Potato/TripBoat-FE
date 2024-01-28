import {parseInviteCode} from './parseInviteCode';

describe('parseInviteCode Function', () => {
  let consoleError: typeof console.error;

  beforeEach(() => {
    consoleError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = consoleError;
  });
  it('올바른 토큰 형식입니다.', () => {
    const validInviteCode =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvayIsInB1cnBvc2UiOiJqb2luX3NwYWNlIiwic3BhY2VfaWQiOjEsImlhdCI6MTcwNTkzMzE4NCwiZXhwIjoxNzA1OTQwMzg0fQ.Gj-f92qBjLJ_1OVMx-KGs4a_wjLKmq3ZEtROLobl2h4';
    const expectedDecoded = {
      exp: 1705940384,
      iat: 1705933184,
      iss: 'ok',
      purpose: 'join_space',
      space_id: 1,
    };

    const result = parseInviteCode(validInviteCode);

    expect(result).toEqual(expectedDecoded);
  });

  it('잘못된 토큰 형식입니다.', () => {
    const invalidInviteCode = '이상한코드.dfadfa.d123123';
    const result = parseInviteCode(invalidInviteCode);

    expect(result).toBeNull();
  });
});
