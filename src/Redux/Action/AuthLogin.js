// import { history } from "../Store";
import {
  API_URL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../Constant";

export const login_Request = creds => ({
  type: LOGIN_REQUEST
});

export const login_Success = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const login_Error = message => ({
  type: LOGIN_FAILURE,
  payload: message
});

export function loginUser(data) {
  const URL = API_URL + "api/login";
  return dispatch => {
    dispatch(login_Request(data));
    return (
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
        },
        body: JSON.stringify(data)
      })
        // .then(handleErrors)
        .then(res => res.json())
        .then(responseJson => {
          // if (responseJson.responseCode === 100) {
          // localStorage.setItem("user", JSON.stringify(responseJson.data));
          dispatch(login_Success(responseJson));
          console.log("LOGIN SUCCESS >> ", responseJson);
          // if (responseJson.data.user.role === "admin") history.push("/admin");
          // else history.push("/member");
          // } else {
          // dispatch(login_Error(responseJson.data));
          // }
        })
        .catch(error => {
          console.log(error);
          dispatch(login_Error(error));
        })
    );
  };
}
