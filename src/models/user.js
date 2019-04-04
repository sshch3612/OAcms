import { query as queryUsers, queryCurrent } from '../services/user';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      console.log(9999999);
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },


  reducers: {

    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    // saveCurrentUser(state, action) {
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //   };
    // },
    saveCurrentUser(state, action){
      return {
        ...state,
        currentUser:{name:333}
      }
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload,
        },
      };
    },
  },
};
