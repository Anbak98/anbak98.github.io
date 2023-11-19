## 개요
군대 안에 있을 때 AI가 갑작스레 발전됐다.  
그림그리는 AI에서 시작해 chatGPT까지 나오자 인간의 일자리가 위협받는 건 아닌지 무서워졌다.  

지피지기면 백전백승.
나는 AI를 이기고자 아주대학교의 특별 커리큘럼 AI집중교육을 수강했다.  
해당 프로젝트는 이 과목에서 진행한 팀 프로젝트다.  
## 기획
Unity에서 오로지 Camera로 사냥꾼을 물색해 사냥하는 에이전트를 만든다.  
강화학습에 있어서 Unity가 제공하는 ML-Agent 플러그인을 사용한다.  
더 나아가 ML-Agent에서 제공하는 Example인 Pramid를 변형해 사용한다.  

![캡처](https://github.com/Anbak98/anbak98.github.io/assets/149641237/f01f2248-40b2-47c1-9cb4-8bf80543697d)  
카메라가 CNN 모델에 의해 Segmentation되고 이걸 이용해 강화학습을 진행한다.  
아키텍처는 이렇다.  
1. Unity Camera.targetRenderTexture을 png로 encoding한다. 
2. flask를 통해 png를 python으로 보낸다.
3. python의  cnn모델로 png를 segmentation한다.
4. Segmentation된 png를 flask를 통해 다시 Unity로 전송한다.
5. Unity의 renderTexture에 png를 decode한다.
6. 해당 renderTexture로 강화학습 진행
## 후기
프로젝트를 시작하는 단계부터 성공 가능성을 짐작하고 위험요인을 예방했다.  
일정관리도 괜찮았고 실패 타이밍과 성공 타이밍도 잘 잡았다.  
덕분에 프로젝트는 성공적으로 마무리됐다.  
