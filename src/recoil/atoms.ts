import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userEmailState = atom({
  key: 'userEmailState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const tokenState = atom({
  key: 'tokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
