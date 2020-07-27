import axios from "axios";

export const getUser = (user) => ({
  type: "GETUSER",
  user,
});

export const addUsers = (newUser) => ({
  type: "ADDUSER",
  newUser,
});

export const deleteUsers = (idUser) => ({
  type: "DELETEUSERS",
  idUser,
});

export const editUser = (idUser, updatedUser) => ({
  type: "EDITUSER",
  idUser,
  updatedUser,
});

export const getUserdata = async (dispatch) => {
  const result = await axios.get(`http://localhost:5000/api/user`);
  console.log();
  dispatch(getUser(result.data));
};

export const addUser = async (user, dispatch) => {
  const result = await axios.post(`http://localhost:5000/api/user`, {
    name: user.name,
    username: user.username,
  });
  window.location.reload(true);
};

export const deleteUser = async (id, dispatch) => {
  const result = await axios.delete(`http://localhost:5000/api/user/${id}`);
  window.location.reload(true);
};

export const updateUsers = async (id, user) => {
  const result = await axios.put(`http://localhost:5000/api/user/${id}`, {
    name: user.name,
    username: user.username,
  });
  window.location.reload(true);
};
