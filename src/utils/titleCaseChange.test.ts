import titleCaseChange from './titleCaseChange';

describe('titleCaseChange', () => {
  expect(titleCaseChange('가나다라[]')).toEqual('가나다라');
});
