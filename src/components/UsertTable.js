import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteUser } from "../actions";
import { getUserdata } from '../actions'

const UserTable = ({ userData, editRow, dispatch }) => {
 
  useEffect(() => {
    getUserdata(dispatch);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.length > 0 ? (
          userData.map( subuserData => subuserData.map((user, index) =>
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => editRow(user)}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user._id, dispatch)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  userData: state.UserName,
});

const AppWithConnect = connect(mapStateToProps)(UserTable);

export default AppWithConnect;
