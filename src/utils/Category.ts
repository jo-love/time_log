import Enumerable from './Enumerable';
import { work, study, reading, sleep, workout, etc } from 'assets';

class Category extends Enumerable {
  public static WORK = new Category('WORK', '일', work, 0);
  public static STUDY = new Category('STUDY', '공부', study, 0);
  public static READING = new Category('READING', '독서', reading, 0);
  public static SLEEP = new Category('SLEEP', '수면', sleep, 0);
  public static WORKOUT = new Category('WORKOUT', '운동', workout, 0);
  public static ETC = new Category('ETC', '기타', etc, 0);

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
