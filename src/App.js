import React, { useState } from "react";
import './App.css';
import UserTable from "./components/UsertTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { connect } from 'react-redux'
import { editUser } from './actions'
import { updateUsers } from './actions'

function App({dispatch}) {
  
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    console.log(user);
    setEditing(true);
    setCurrentUser({ id: user._id, name: user.name, username: user.username });
  };

  const updateUser = (id, User) => {
    setEditing(false);
    updateUsers(id, User)
  };

  return (
    <div className="container">
    <h1>React Redux API CRUD</h1>
    <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm />
          </div>
        )}
      </div>
      <div className="flex-large">
        <h2>View users</h2>
        <UserTable
          // userData={users}
          editRow={editRow}
          // deleteUser={deleteUser}
        />
      </div>
    </div>
  </div>
  );
}


const mapStateToProps = state => ({
  userData: state.UserName
})

const AppWithConnect = connect(mapStateToProps)(App)

export default AppWithConnect;