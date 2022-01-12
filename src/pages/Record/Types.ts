import Category from "utils/Category";

export interface StopWatchProps {
  clickedItems: Category[];
  setClickedItems: Function;
  list: Category;
  index: number;
  timerArr: number[];
  setTimerArr: Function;
}
