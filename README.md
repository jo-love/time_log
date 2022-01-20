## 'time log' 토이 프로젝트

### ▷제작기간 :2020.01.4 - 2022.01.19

### ▷어플리케이션 목적

우연히 유튜브에서 집중할 수 있는 방법을 소개하는 영상을 보게되었는데, 그 중 하나가 시간을 기록하는 것이었습니다. 실천할 수 있는 좋은 방법같아서 어플을 직접 만들어서 사용해보면 어떨까해서 만들기 시작했습니다. :)

### ▷어플리케이션 구성

#### 로그인 페이지

구글 소셜 로그인 기능을 통한 페이지 접근

#### 기록 페이지(메인)

카테고리 선택(ex)공부, 일, 기타...)에 따른 타이머 기록 - 일시정지, 삭제, 저장 버튼에 따른 관리

#### 히스토리 페이지

저장된 기록들을 날짜별로 바인딩한 페이지

### 기술스텍

react + typescript + styled-component <br/>
recoil를 이용하여 전역 상태 관리 <br/>
framer motion을 통한 애니메이션 구현 <br/>
DB: firebase를 이용하여 get, post 기능 구현

![스크린샷 2022-01-20 오후 10 11 52](https://user-images.githubusercontent.com/68534900/150345831-cb8cb1e0-25d4-4a13-a05a-7ecaf6b88436.png)
