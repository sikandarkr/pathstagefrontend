import axios from "axios";
const apiUrl = "http://localhost:5000/user_list";
export const apiRequest = () => {
  return {
    type: "PROFILE_REQUEST"
  };
};
export const fetchData = data => {
  return {
    type: "PROFILE_SUCCESS",
    data
  };
};

export const fetchProfiles = (data, browserHistory) => {
  const headers = {
    "Content-Type": "application/json"
  };
  return dispatch => {
    dispatch(apiRequest());
    return axios
      .get(apiUrl, data)
      .then(response => {
        console.log("YOur Response from the server is.......", response);
        dispatch(fetchData(response.data.datas));
      })
      .catch(error => {
        throw error;
      });
  };
};
