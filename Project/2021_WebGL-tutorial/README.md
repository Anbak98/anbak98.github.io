Ajou University, 201920792 software 유승민

### 튜토리얼 개요
 학습자는 개발자 도구를 이용해서 페이지에 적용된 기술들을 분석한다. 페이지에 적용된 기술들은 CSS, Mouse Event, 3D Cube Rendering with texture and lighting로 세 가지이다. 

### HTML/CSS
 Page를 구성하는 가장 원초적인 요소를 설명하고자 했다. 글자를 출력하고 스타일을 입히는 법을 설명했다. 동시에 개발자 관리 도구에서 index.html 파일을 살펴보도록 유도해 효과적인 튜토리얼을 만들고자 했다.

### Mouse Event
 HTML의 응용법으로 마우스 이벤트를 통한 그림 그리기를 보여주고자 했다. 동시에 html에 script이 작성되는 모양새를 보였다. 그래픽의 기초인 moveTo lineTo를 간단히 언급했다. 

### 3D Cube Rendering with texture and lighting
 3D Grapic Rendering에 대해 설명하고자 했다. 3d 그래픽의 근본 요소인 폴리곤에 대한 간단한 설명을 했다. 그래픽 렌더링을 크개 vertex shader, fragement shader로 나눠서 설명했다. vertex shader는 정보를 만들고 fragement shader는 그림을 입힌다는 식으로 설명했다. 

### 참조
drawing: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

lighting: https://developer.mozilla.org/ko/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL

### 구현
 drawing한 canvas를 texture로 받아와 cube에 렌더링하는 코드는 직접 구현했다. 물론 몇 가지 참조하긴 했지만, 기본적으로 내 이해를 바탕으로 코드가 작성됬다
 html, css를 직접 작성했다.

### 프로젝트 하면서 있었던 일
 기존 실습 코드에 Lighting 적용하려고 몇 날을 디버깅하다 결국 실패했다.  너무 슬프다. 그래서 눈물을 머금고 참조 코드를 그대로 썼다. 코드를 그대로 참조한 것을 보고 혀를 내두를 사람들이 이것만은 알아줬으면 했다. 결과를 얻진 못했지만 그래도 덕분에 컴퓨터 그래픽의 이해에 한 발 다가갈 수 있었다.
 마우스로 큐브 움직이고 확대하는 거 열심히 만들었었는데 까먹고 적용 못 했다...
 컴퓨터 그래픽에 큰 매력을 느끼고 말았다. 내가 미래에 일을 하고 있다면 다면 그래픽 분야가 아닐까 싶다.
 그래픽 렌더링을 설명할 때 너무 요약된 설명을 한 것이 마음에 걸린다. 지식의 오류를 전달할 수도 있다.
  라이팅, 마우스 이벤트, 3d 모델을 webgl로 가져오는 것을 시도했었다.