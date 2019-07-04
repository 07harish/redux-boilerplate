import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE
} from "../Action/constant";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: user ? user : {}
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        isAuthenticated: true,
        user: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
