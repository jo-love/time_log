import Enumerable from './Enumerable';
import { work, study, reading, sleep, workout, etc } from 'assets';

class Category extends Enumerable {
  public static WORK = new Category('WORK', '일', work);
  public static STUDY = new Category('STUDY', '공부', study);
  public static READING = new Category('READING', '독서', reading);
  public static SLEEP = new Category('SLEEP', '수면', sleep);
  public static WORKOUT = new Category('WORKOUT', '운동', workout);
  public static ETC = new Category('ETC', '기타', etc);

  public static allCases = [
    Category.WORK,
    Category.STUDY,
    Category.READING,
    Category.SLEEP,
    Category.WORKOUT,
    Category.ETC,
  ];
}

export default Category;
