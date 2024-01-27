import validationForm from './inputValidation';

describe('validationForm', () => {
  test('email', () => {
    const success = 'vbghdl@naver.com';
    const fail = 'asdsdfa';
    expect(validationForm.email.test(success)).toBe(true);
    expect(validationForm.email.test(fail)).toBe(false);
  });

  test('password', () => {
    const success = 'asdasd123#';
    const fail = 'asdsdfadd';
    expect(validationForm.password.test(success)).toBe(true);
    expect(validationForm.password.test(fail)).toBe(false);
  });

  test('emailSertCode', () => {
    const success = 'asdsdfa4';
    const fail = 'afa4';
    expect(validationForm.emailSertCode.test(success)).toBe(true);
    expect(validationForm.emailSertCode.test(fail)).toBe(false);
  });

  test('nickname', () => {
    const success = '남궁종민';
    const fail = '안녕하세요제이름은남궁종민입니다';
    expect(validationForm.nickname.test(success)).toBe(true);
    expect(validationForm.nickname.test(fail)).toBe(false);
  });
});
