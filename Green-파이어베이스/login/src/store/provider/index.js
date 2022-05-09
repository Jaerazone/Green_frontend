// 구글 인증관련 내용만 따로 작성한 store 모듈

// 1) 파이어베이스 앱 객체 모듈을 들고와서 작성할수 있도록한다
import firebase from "firebase/compat/app";
import "firebase/compat/auth" // 파이어베이스/컴팻의/ 인증 패캐지를 들고온다, 9버전이지만 8버전처럼사용

// 라우터를 사용하고싶다면 import로 들고온다
import router from "@/router";

// 2)사용하기 위한것들 다 적었고, 내보내기 위해 export해줌 store>index.js와 연결시켜주려고함
export default {
    state: {
        oUser : null, // 사용자 정보를 담을 객체를 생성

    },
    mutations: {
        // 사용자 객체 저장 (user을 설정한다! setUser)
        fnSetUser(state, payload) { // 저장하기위해서 사용할 함수, payload 는 user라고생각하믄댐 그냥이름임
            state.oUser = payload;
        }
        
    },
    getters: { // 무엇을 가져오는가? 
        // 사용자 객체를 반환 (원래는 store.state.oUser로 사용했었는데 이번에는 getters로 저값을 가져오는 함수를 만듦)
        fnGetUser(state) {
            return state.oUser;
        },
        // 사용자 객체값의 유무로 로그인 여부 판단 
        // : 값이 있으면 로그인, 값이없으면 로그아웃되는 내용
        fnGetAuthStatus(state) {
            return state.oUser != null; //리턴값으로 비교해서 출력
        }
    },
    actions: { // 구글에 값을 보내기위해 actions 적음
        // 이메일 회원가입 처리 
        // 전체를 들고와도되지만 commit 내용만 들고오려고 {commit} 적음
        // state.oUser도 변경되어야해서 mutations의 fnSetUser로 payload를 state.oUser에 할당함
        fnRegisterUser({commit}, payload) { // 이메일과 비밀번호를 가져왔다는 가정하에 적어줌
            // 스토어에 시간 걸림으로 바꿈
            commit("fnSetLoading", true)
            // 파이어베이스에 이메일 회원생성 및 저장 (이제 4번 줄 쓴다 import firebase~)
            // 구글에 이메일과 패스워드가 맞는지 인증해주는 단계
            firebase.auth().createUserWithEmailAndPassword(payload.pEmail, payload.pPassword) //신규 사용자 가입
            .then( (pUserInfo) => { //요청이 성공했으면 응답(pUserInfo로 받아줌)이 오고 아래 처리해준다
                // 신규 회원 이메일 정보를 스토어에 저장
                commit("fnSetUser", { // fnSetUser 를 통해서 저장해준다
                    // 7버전은 pUserInfo.email 혹은 다른 id번호같이 바로 보내주는식, 접근할 수 있지만, 
                    // 9버전은 값을 여러개로 보내줄수 있기때문에 좀더 상세하게 적는다 . pUserInfo.user.email를 통해 접근한다
                    // 책과 다른부분임
                    email : pUserInfo.user.email, 
                });
                commit("fnSetLoading", false); // 로딩완료
                commit("fnSetErrorMessage", "") // 스토어 에러메시지없음 저장
                router.push('/main');
            })
            .catch((err) => {
                commit("fnSetErrorMessage", err.message);
                commit("fnSetLoading", false); // 에러메세지를 뷰(컴포넌트)자체에 띄워서 확인할 예정
                //(콘솔로 에러출력내용은 지움)
            })

        },

        // 로그인에 대한 내용 작성
        DoLogin( {commit}, payload) {
            // 로그인도 동일하게 시간이 걸린다고 작성해줌
            commit("fnSetLoading", true)
            // 로그인 하기위해 파이어베이스에 이메일 회원 로그인 인증처리를 요청한다
            firebase.auth().signInWithEmailAndPassword(payload.pEmail, payload.pPassword) // 기존 사용자 로그인
            // (1)로그인 성공했을때와  (2)실패했을때
            // (1) 성공했을때
            .then((pUserInfo) => {
                // 로그인이 성공하면 스토어에 계정정보 저장
                commit("fnSetUser", {
                    // 값을 여러개 들고올거라 아래 저장하도록한다
                    id : pUserInfo.user.uid,
                    name : pUserInfo.user.displayName,
                    email : pUserInfo.user.email,
                    photoURL : pUserInfo.user.photoURL
                });
                commit("fnSetLoading", false); // 로딩이 끝났다!
                commit("fnSetErrorMessage", ""); // 에러가 없었다고 알려줌
                //성공했으면 라우터 이동
                router.push('/main')
            }).catch((err) => {
                commit("fnSetErrorMessage", err.message);
                commit("fnSetLoading", false); // 에러메세지를 뷰(컴포넌트)자체에 띄워서 확인할 예정
                //(콘솔로 에러출력내용은 지움)
            }) 
        },
        //로그인과 회원가입을 연결시켜보자 (자바스크립트로 Google을 사용하여 인증)
        // 구글 계정 회원 로그인(팝업)
        fnDoGoogleLogin_Popup({commit}) { // 구글로 로그인할때는 받아올값이 없기때문에 commit만 적어준다
            commit("fnSetLoading", true) // 시간걸림
            // 파이어베이스에 구글 회원 로그인 인증 처리 요청
            // 로그인 제공자 객체 생성
            const oProvider = new firebase.auth.GoogleAuthProvider();
            // 오픈 계정의 범위 (가져오는 값)
            oProvider.addScope("profile"); //구글에서 정해주는 사용자의 
            oProvider.addScope("email");

            // 로그인 요청
            firebase.auth().signInWithPopup(oProvider) // 로그인 팝업
            .then((pUserInfo) => {
                // 로그인이 성공하면 스토어에 계정 정보 저장
                commit("fnSetUser", {
                    // 값을 여러개 들고올거라 아래 저장하도록한다
                    id : pUserInfo.user.uid,
                    name : pUserInfo.user.displayName,
                    email : pUserInfo.user.email,
                    photoURL : pUserInfo.user.photoURL
                });
                commit("fnSetLoading", false); // 로딩이 끝났다!
                commit("fnSetErrorMessage", ""); // 에러가 없었다고 알려줌
                router.push('/main');
            })
            .catch((err) => {
                commit("fnSetErrorMessage", err.message);
                commit("fnSetLoading", false); // 에러메세지를 뷰(컴포넌트)자체에 띄워서 확인할 예정
                //(콘솔로 에러출력내용은 지움)
            })
        },
        // 로그아웃(App.vue에 적어준다)
        // 로그아웃에 관한 문서도 찾아보기(사용자 관리)
        // https://firebase.google.com/docs/auth/web/password-auth
        fnDoLogout({commit}) {
            firebase.auth().signOut();
            commit("fnSetUser", null);
            router.push('/');
        },
        // 회원탈퇴
        fnDoDelete({commit}) {
            // 파이어베이스에 회원탈퇴를 요청
            const user = firebase.auth().currentUser;
            user.delete()
            .then( () => {
                //스토어의 회원에 빈값을 넣음
                commit("fnSetUser", null);
                router.push('/');
            })
            .catch((err) => {
                console.log(err)
            });
        },
        // 자동로그인처리
        fnDoLoginAuto( {commit}, pUserInfo) { // 자동으로 정보가 바꼈을때 들고와서 commit으로 저장만 해주면됨
            commit("fnSetUser", {
                // 값을 여러개 들고올거라 아래 저장하도록한다
                id: pUserInfo.uid,
                name: pUserInfo.displayName,
                email: pUserInfo.email,
                photoURL: pUserInfo.photoURL,
            });
            // 자동로그인처리에서 에러가 있다면 초기화 해줌
            commit("fnSetLoading", false);
            commit("fnSetErrorMessage", ""); // 에러메세지도 "" 초기화
        },
    }
};
//원형돌았던거 commone에 넣어준다?

// 구현아직안함
// 비번재전송
// 써클계속 도는거
// firebase 한번더 사용해보도록함
// 이번처러 디자인하는게아니라 핵심내용부분만(actions) 작성하고 사용해보도록함