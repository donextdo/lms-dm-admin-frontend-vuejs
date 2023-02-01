import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const className = new Vuex.Store({
  state: {
    topic:null,
  },
  mutations: {
    //------------set user is login to the system----
    setClassName(state,topic){
      state.topic = topic;
      sessionStorage.setItem('topic',className.getters.topic)  

    },
    
  },
  getters: {
    topic: state => state.topic,
  }
});
export const store = new Vuex.Store({
  state: {
    isLogin:false,
  },
  mutations: {
    //------------set user is login to the system----
    setLoginStatus(state,flag){
      state.isLogin = flag;
    },
    
  },
  getters: {
    isLogin: state => state.isLogin,
  }
});


export const upcomingSession = new Vuex.Store({
  state: {
    session:[],
  },
  mutations: {
    //------------set user is login to the system----
    setUpcomingSession(state,session){
      state.session = session;
      sessionStorage.setItem('upcoming',JSON.stringify(session))

    },
    
  },
  getters: {
    session: state => state.session,
  }
});

export const pastSession = new Vuex.Store({
  state: {
    session:[],
  },
  mutations: {
    //------------set user is login to the system----
    setPastSession(state,session){
      state.session = session;
      sessionStorage.setItem('past',JSON.stringify(session))

    },
    
  },
  getters: {
    session: state => state.session,
  }
});

export const studentSession = new Vuex.Store({
  state: {
    student:[],
  },
  mutations: {
    //------------set user is login to the system----
    setStudentSession(state,student){
      state.student = student;
    },
    
  },
  getters: {
    student: state => state.student,
  }
});

export const tutorSession = new Vuex.Store({
  state: {
    tutor:null,
  },
  mutations: {
    //------------set user is login to the system----
    setTutorSession(state,tutor){
      state.tutor = tutor;
    },
    
  },
  getters: {
    tutor: state => state.tutor,
  }
});

export const singleSession = new Vuex.Store({
  state: {
    session:{},
  },
  mutations: {
    //------------set user is login to the system----
    setSingleSession(state,session){
      state.session = session;

    },
    
  },
  getters: {
    session: state => state.session,
  }
});