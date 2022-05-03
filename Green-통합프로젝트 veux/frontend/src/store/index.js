import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
// Vuex의 store에서 따로 하므로 Vue의 프로토타입에 넣지않고 사용

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user : "",
    memos : [
      {
        id : 1,
        writer : "@@익명",
        title : "@@확인용 첫번째 제목"
      }
    ],
    memo : {
      title : "##제목",
      memo : "##내용"
    },
    comments : [
      {
          writer : "!!!익명",
          comment : "!!!내용"
      }
    ]
  },
  getters: {},
  mutations: {
    loginuser(state, user) { // state는 현재store의state 들고오고, homeview에서 가져온user 두개써주고
      state.user = user; // 내가가져온 user를 현재state.user에 넣어준다
    },
    changememolist(state, mlist) { // mlist를 받아와 현재 memos에 할당
      state.memos = mlist;
    },
    changememo(state, memo) { // memo를 받아와 현재 memo에 할당
      state.memo = memo;
    },
    changecomments(state, comments) { // comments 받아와 현재 comments에 할당
      state.comments = comments;
    }
  },
  actions: {
    getmemolist({commit}) { // changememolist를 불러와서 사용해보도록함
      // {commit} 을 적어주는 이유는 실제로 commit을 여러번 호출해야하므로 코드를 단순화하기위함임
      // 문서참조) https://vuex.vuejs.org/guide/actions.html 
      axios.get("/api/memo").then( (response) => {
        // 가져온 response.data값을 memos에 넣어줌
        commit("changememolist", response.data); // 사용할 뮤테이션과, 보낼값을 적어준다
      })
    },
    // id값은 사용하는 컴포넌트에서 전달(PageView.vue에서 사용함 go~)
    getmemo({commit}, id) {
      // vuex >store이기때문에 router에 바로 접근해서 params값을 들고왔는데
      // 컴포넌트에서 값을 넘겨받아 사용해야한다 id !!!
      axios.get(`/api/memo/${id}`).then( (response) => { 
        // 가져온 response.data값을 memo에 넣어줌
        commit("changememo", response.data) // 사용할 뮤테이션과, 보낼값을 적어준다
      })
    },
    getcomment({commit}, id) {
      // 이번에는 코멘트를 들고온다
      axios.get(`/api/comment/${id}`).then( (response) => { 
        // 가져온 response.data값을 comments에 넣어줌
        commit("changecomments", response.data) // 사용할 뮤테이션과, 보낼값을 적어준다
      })
    },
    // comment 객체를 컴포넌트에서 받아옴
    postcomment({commit}, comment) {
      axios.post("/api/comment", {
        data : {
          //컴포넌트에서 받아온 comment객체 추가
          comment: comment,
        }
      }).then ((response) => {
        console.log(response.data); //받은거 콘솔로 확인
        /*comment값을 받아와서 화면에 출력해야한다 . 
        위에서 코멘트가져온애 : changecomments  임마임, 
        근데 임마는 코멘트 바뀐값을 넣어준거이긴한데 
        post를 통해서도 바꿔준 comment값을 들고오게되는데, 
        그래서 우리가 아까 만들어준 
        commit('changecomments')를 통해서 
        들고온 데이터를 다시한번 changecomments 임마 안에 넣어준다
        // 그다음 PageView로 가서 메소드로 addcomment()해줌
        */
        commit("changecomments", response.data);
      }) 
    }
  },
  modules: {}
})
