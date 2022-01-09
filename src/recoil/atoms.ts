import { atom } from 'recoil';
import Category from 'utils/Category';

// export const listState = atom<Category[]>({
//   key: 'listState',
//   default: [],
// });

export const pauseState = atom({
  key: 'pause',
  default: false,
});
