const initialState = {
  loading: false,
  data: null
};

export default function profileReducer(state = initialState, action) {
  // let users = action.data;
  switch (action.type) {
    case "PROFILE_REQUEST":
      return { ...action.data, loading: true };
    case "PROFILE_SUCCESS":
      return { users: action.data, loading: false };
    default:
      return state;
  }
}
