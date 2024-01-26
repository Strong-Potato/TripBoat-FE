import {atom} from 'recoil';

export const isRegistrationSelectedState = atom<number[]>({
  key: 'isRegistrationSelectedState',
  default: [],
});

export const DatePickerState = atom<Date>({
  key: 'DatePickerState',
  default: new Date(),
});

export const DatePickerIsValued = atom<boolean>({
  key: 'DatePickerIsValued',
  default: false,
});

export const ReviewStarCount = atom<number>({
  key: 'ReviewStarCount',
  default: 0,
});

export const ReviewInputValue = atom<string>({
  key: 'ReviewInputValue',
  default: '',
});

export const IsHeartValued = atom<boolean>({
  key: 'IsHeartValued',
  default: false,
});

export const IsLoginState = atom<boolean>({
  key: 'IsLoginState',
  default: true,
});

export const TabIndexState = atom<number>({
  key: 'TabIndexState',
  default: 0,
});

export const TabYPosition = atom<number>({
  key: 'TabYPosition',
  default: 0,
});
