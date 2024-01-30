# ⛵️ 함께 할때 더 좋은 여행 일정 서비스 TRIPVOTE

![1 표지](https://github.com/Strong-Potato/TripVote-FE/assets/120024673/acbebd6f-1cb7-4e98-8804-1c0dcce509cb)


- 배포 URL : https://tripvote.site
- Test ID : test@test.com
- Test PW : 1q2w3e4r!Q

<br>

## 프로젝트 소개

- TRIPVOTE는 일행과 함께 여행일정을 만들어 갈 수 있는 서비스입니다.
- 여행 스페이스를 만들고 투표와 일정을 등록할 수 있습니다.
- 검색을 통해서 장소를 찾고, 투표와 일정에 등록시킬 수 있습니다.
- 일행과 함께 투표에 참여하여 일정을 정해볼 수 있습니다.

<br>

## 팀원 구성

<div align="center">

| **남궁종민** | **박성후** | **박은영** | **백상원** | **정서현** | **진정민** |
| :------: |  :------: | :------: | :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/100336573?v=4" width=150px alt="종민"> <br> @NamgungJongMin](https://github.com/NamgungJongMin) | [<img src="https://avatars.githubusercontent.com/u/120024673?v=4" width=150px alt="성후"> <br> @HOOOO98](https://github.com/HOOOO98) | [<img src="https://avatars.githubusercontent.com/u/139188760?v=4" width=150px alt="은영"> <br> @SKY-PEY](https://github.com/SKY-PEY) | [<img src="https://avatars.githubusercontent.com/u/121215024?v=4" width=150px alt="상원"> <br> @Yamyam-code](https://github.com/Yamyam-code) | [<img src="https://avatars.githubusercontent.com/u/63582234?v=4" width=150px alt="서현"> <br> @JSH99](https://github.com/JSH99) | [<img src="https://avatars.githubusercontent.com/u/57976371?v=4" width=150px alt="정민"> <br> @JeongMin83](https://github.com/JeongMin83) |

</div>

<br>

## 1. 개발 환경

- Front : React(Vite), TypeScript, SCSS
- Back-end : TourAPI, Java Springboot3
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, Notion, Slack
- 서비스 배포 환경 : Vercel, Github Action
- 디자인 : [Figma](https://www.figma.com/file/ypTLv92s72sihUApnxjP5C/%EA%B0%95%EC%9E%90%EB%B0%AD-%ED%94%BC%EA%B7%B8%EB%A7%88?type=design&node-id=40%3A3&mode=design&t=uYBOpmiZcAjXWHWQ-1)
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, SCSS

- React(Vite)
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 커스텀 훅과 유틸 함수를 사용하여 일관된 데이터를 사용할 수 있도록 노력했습니다.
- SCSS
    - module.scss를 사용해서 className의 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    - BEM 방법론을 도입하여 컴포넌트 구조를 좀 더 쉽게 파악할 수 있도록 했습니다.
    
### Recoil

- 최상위 컴포넌트를 만들어 props로 유저 정보를 내려주는 방식의 경우 불필요한 props 전달이 발생합니다. 따라서, 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.
- Redux가 아닌 Recoil을 채택한 이유
    - Recoil은 React만을 위한 라이브러리로, 사용법도 기존의 useState 훅을 사용하는 방식과 유사해 학습비용을 낮출 수 있었습니다.
    - 또한 Redux보다 훨씬 적은 코드라인으로 작동 가능하다는 장점이 있었습니다.

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

### MSW

- 기획, 디자인이 완료되어 렌더링에 필요한 데이터를 명세를 통해 정하고, 이를 바탕으로 API를 mocking하여 사용할 수 있었습니다.
- BackEnd에서 API를 제공해주는 시점 전에도 미리 API 연결을 통해 미리 화면을 구성하여 작업을 진행할 수 있었습니다.


### Jest

- 유틸 함수를 테스트하여 일관된 데이터가 도출 되는지 확인하여, 변칙적인 상황을 줄였습니다. 

### 브랜치 전략

- Git-flow 전략을 기반으로 main, dev 브랜치로 버전을 관리하였고, Git issue를 통해 브랜치를 생성하여 이슈단위로 기능을 개발했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 PR merge 후 각 브랜치를 자동 삭제해주었습니다.
-  Github actions에 CI를 적용하여 빌드 및 시작에 오류가 없는지 테스트하고 그 결과를 PR 상태에 반영했습니다.
<br>

## 3. 프로젝트 구조

```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂chakra
 ┣ 📂components
 ┣ 📂firebase
 ┣ 📂hooks
 ┣ 📂mocks
 ┣ 📂pages
 ┣ 📂recoil
 ┣ 📂routes
 ┣ 📂sass
 ┣ 📂types
 ┗ 📂utils
```

<br>

## 4. 역할 분담

### 남궁종민
- **UI**
    - 마이페이지 , 로그인 , 회원가입
- **기능**
  -  비밀번호 변경 , 재발급 , 회원 가입 , 로그인 , 소셜 로그인 , 회원 탈퇴 , 프로필 변경 

<br>
    
### 박성후

- **UI**
    - 사이드바 , 알림
- **기능**
    - 푸시알림 , 카카오톡 초대

<br>

### 박은영

- **UI**
    - 투표
- **기능**
    - 투표만들기 , 투표하기 , 투표 페이지에서 일정 추가, 지도보기 , 여행지 후보 등록 , 후보 장소 메모작성 , 나의 찜 가져오기, 전체 지역 필터 기능

<br>

### 백상원

- **UI**
    - gnb , 온보딩 , 장소 검색 , 지도
- **기능**
    - 홈페이지 리스팅 , 검색 인기 장소 리스팅 , 장소 검색 지도
 

<br>

### 정서현

- **UI**
    - 여행 스페이스
- **기능**
    - 여행 날짜 정하기 , 여행지 정하기 , 일정 탭 화면 , 지도 확대 기능 , 일정 편집 기능 , 투표에서 불러오기 , 루트 최적화 , 장소 검색 , 찜목록 검색
 
<br>

### 진정민

- **UI**
    - 상세페이지 , 리뷰 , 찜
- **기능**
    - 찜하기 , 리뷰쓰기 , 리뷰수정 , 후보 등록하기 , 주변 다른 숙소
    
<br>

## 5. 개발 기간 및 작업 관리

### 프로젝트 기간

- 전체 기간 : 2023-12-04 ~ 2024-01-29
- 기획 / UI  : 2023-12-04 ~ 2024-01-05
- 기능 구현 : 2024-01-05 ~ 2024-01-29

<br>

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하고 각자의 작업 상황을 공유했습니다.
- 노션에는 정해진 컨벤션을 정리하고, 슬랙으로는 전체적인 공지를 확인하고, 디스크드에 깃허브 웹훅을 사용해 PR의 생명주기를 단축시켰습니다. 

<br>

## 6. 신경 쓴 부분

- React-Query
    - 의존적 쿼리 키 : 쿼리 키를 사용해서 데이터 가져오기 요청을 최적화했습니다. 쿼리 키가 변경될 때 마다 새롭게 데이터를 업데이트를 할 수 있어 불필요한 재요청을 방지할 수 있습니다.
    - 로딩, 에러 처리 : 데이터가 도착하기 전 상태를 자동으로 감지하여 수동으로 코드를 적용하지 않았습니다. 또한 에러를 자동으로 감지하기 때문에 에러 바운더리를 정해 컴포넌트 렌더링 최적화를 위해 노력했습니다.
- Proxy
    - 프록시 서버를 사용하여 개발 환경 및 배포 환경에서 발생하는 CORS 문제를 해결했습니다.
    - 보안과 개발자 경험을 향상시키기 위해 노력했습니다.

<br>

## 7. 시연영상

[![Video Label](https://i.ytimg.com/vi/bfKGZHpvXsc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_JSsy52DV0U5jdfOjhp5_iYFVvw)](https://www.youtube.com/watch?v=bfKGZHpvXsc)

<br>

## 8. 트러블 슈팅

###  남궁종민



<br>

### 박성후

- Service Worker
    - 파이어베이스에서 제공하는 자바스크립트 FCM을 사용하기 위해 애플리케이션에서 백그라운드에서 실행되는 스크립트를 사용했었지만, 포그라운드에서 onMessage를 수신하지 못하는 현상을 마주했습니다. 이는 PWA가 아닌 순수 웹의 한계였음을 깨닫고 이후 PWA를 공부 후 프로젝트에 적용해보기로 했습니다.
- 카카오 API
    - 일행 추가 로직을 정리하면서 분기처리 및 예외 처리의 중요성을 깨달았습니다.
    - 복합적인 기능을 구현하기 위해 상황을 단순화하는 과정을 거치고 꼼꼼하게 예외처리를 하여 기능을 성공적으로 구현할 수 있었습니다.
    - 카카오 로직 변경 과정



| <img width="500" alt="스크린샷 2024-01-30 오후 5 31 41" src="https://github.com/Strong-Potato/TripVote-FE/assets/120024673/bc4c7693-b384-4579-b7fd-9c2229454a28"> | <img width="500" alt="스크린샷 2024-01-30 오후 5 31 53" src="https://github.com/Strong-Potato/TripVote-FE/assets/120024673/b9c4dc50-b745-45b6-85c2-83a6c0c52db1"> |
|------------------------|------------------------|

<br>

### 박은영



<br>

### 백상원



<br>

### 정서현



<br>

### 진정민



<br>

<br>

## 9. 개선 목표

- **목표**
    
- **2024-00-00 성능 개선 내용**
    
    
<br>

## 10. 프로젝트 후기

###  남궁종민



<br>

### 박성후

- UXUI 다지이너 1, PM 5, BE 5, FE 6 명이 모인 프로젝트를 통해 어떤 점을 조심하고 더 잘 할 수 있을지 생각해 보았습니다. 다양한 역할의 팀원들과 함께하며 소통의 부재가 일정 지연으로 이어질 수 있음을 깨달았고, 기획과 기술 검증에 충분한 시간을 할애하지 않은 점이 문제였다고 느꼈습니다. 이를 개선하기 위해 소통 창구를 단순화하고 트렐로와 같은 도구를 활용하는 것이 좋겠다고 생각했습니다.
개인적으로는 개발에 대한 열정을 재확인하고, 리더로서의 소통 능력과 상황 파악 능력의 중요성을 인식하게 되었습니다. 의지가 강한 팀원들과 함께 프로젝트를 완성해 나갈 수 있었던 것은 큰 행운이었으며, 이러한 경험을 통해 부딪히고 문제를 해결하는 능력을 키울 수 있는 좋은 기회가 되었습니다.

<br>

### 박은영



<br>

### 백상원



<br>

### 정서현



<br>

### 진정민



<br>


