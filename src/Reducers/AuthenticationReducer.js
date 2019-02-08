const initialState = {
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOFF':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}