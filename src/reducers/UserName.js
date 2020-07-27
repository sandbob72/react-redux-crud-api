export default (
    state = [],
    action
  ) => {
    switch (action.type) {
      case "GETUSER":
        return [...state, action.user];
      case "ADDUSER":
        return [...state, action.newUser];
      case "DELETEUSERS":
        return state.filter((user) => user.id !== action.idUser);
      case "EDITUSER":
        return state.map((user) => (user.id === action.idUser ? action.updatedUser : user));
      default:
        return state;
    }
  };