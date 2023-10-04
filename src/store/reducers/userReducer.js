const initialState = {
    user: null,
    accessToken: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_ACCESS_TOKEN':
        return { ...state, accessToken: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  