export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MARKET':
      return !state;
    default:
      return state;
    }
  };