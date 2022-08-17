import React from 'react'
import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Edit({ user, LogOut }) {
  const [newUsername, setNewUsername] = useState(user.username)
  const [newEmail, setNewEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState(null)
  const [oldPassword, setOldPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [editUsername, toggleEditUsername] = useState(false)
  const [editEmail, toggleEditEmail] = useState(false)
  const [editPassword, toggleEditPassword] = useState(false)
  const [wantDelete, toggleWantDelete] = useState(false)
  const navigate = useNavigate()

  const updateUsername = async (e) => {
    await Client.put(`${BASE_URL}/api/user/username/${user.id}`, {
      id: user.id,
      username: newUsername,
      password: oldPassword
    })
  }

  const updateEmail = async (e) => {
    await Client.put(`${BASE_URL}/api/user/email/${user.id}`, {
      id: user.id,
      email: newEmail,
      password: oldPassword
    })
  }

  const updatePassword = async () => {
    if (newPassword === confirmPassword) {
      await Client.put(`${BASE_URL}/api/user/${user.id}`, {
        id: user.id,
        newPassword: newPassword,
        oldPassword: oldPassword
      })
    } else {
      alert('Error"! New password does not match confirm!')
    }
  }

  const handleEditBtn = (e) => {
    e.preventDefault()
    switch (e.target.id) {
      case 'editUsernameBtn':
        toggleEditUsername(!editUsername)
        break
      case 'editEmailBtn':
        toggleEditEmail(!editEmail)
        break
      case 'editPasswordBtn':
        toggleEditPassword(!editPassword)
        break
      default:
        alert('Something went very wrong!')
    }
  }

  const deleteAccount = async () => {
    const res = await Client.delete(`${BASE_URL}/api/user/${user.id}`, {
      data: {
        id: user.id,
        password: oldPassword
      }
    })
    alert(res.data.message)
    LogOut()
    navigate('/')
  }

  return (
    <div className="editInfo">
      <div id="usernameUpdateForm">
        {editUsername ? (
          <form className="oneFieldForm">
            <label htmlFor="usernameChange">New username: </label>
            <input
              className="edittext"
              id="usernameChange"
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder={user.username}
            />
            <label htmlFor="confirmOldPassword">Current Password: </label>
            <input
              className="edittext"
              id="confirmOldPassword"
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="*********"
              required
            />
            <button
              className="buttonz"
              id="newUsername"
              onClick={updateUsername}
            >
              Submit
            </button>
          </form>
        ) : (
          <h3>Current username: {user.username}</h3>
        )}
        <button
          className="buttonz"
          id="editUsernameBtn"
          onClick={handleEditBtn}
        >
          {editUsername ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <div id="emailUpdateForm">
        {editEmail ? (
          <form className="oneFieldForm">
            <label htmlFor="emailChange">New email: </label>
            <input
              className="edittext"
              id="emailChange"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder={user.email}
            />
            <label htmlFor="confirmOldPassword">Current Password: </label>
            <input
              className="edittext"
              id="confirmOldPassword"
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="*********"
              required
            />
            <button className="buttonz" id="newUsername" onClick={updateEmail}>
              Submit
            </button>
          </form>
        ) : (
          <h3>Current email address: {user.email}</h3>
        )}
        <button className="buttonz" id="editEmailBtn" onClick={handleEditBtn}>
          {editEmail ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <div id="passwordUpdateForm">
        {editPassword ? (
          <form className="twoFieldForm">
            <label htmlFor="confirmOldPassword">Current Password: </label>
            <input
              className="edittext"
              id="confirmOldPassword"
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="*********"
              required
            />
            <label htmlFor="passwordChange">New Password: </label>
            <input
              className="edittext"
              id="passwordChange"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="*********"
              required
            />
            <label htmlFor="confirmPasswordChange">Confirm Password </label>
            <input
              className="edittext"
              id="confirmPasswordChange"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="*********"
              required
            />
            <button
              className="buttonz"
              type="submit"
              onClick={updatePassword}
              disabled={newPassword !== confirmPassword}
            >
              Submit
            </button>
          </form>
        ) : (
          <h3>Change Password?</h3>
        )}
        <button
          className="buttonz"
          id="editPasswordBtn"
          onClick={handleEditBtn}
        >
          {editPassword ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <div id="deleteAccountBtns">
        {wantDelete ? (
          <div id="deleteProtect">
            <h4>Are you sure?</h4>
            <label htmlFor="deleteConfirm">Enter password to confirm: </label>
            <input
              className="edittext"
              id="confirmOldPassword"
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="*********"
              required
            />
            <button
              className="buttonZ"
              disabled={!oldPassword}
              onClick={deleteAccount}
            >
              Yes, Delete Account
            </button>
          </div>
        ) : null}
        <button
          className="buttonZ"
          onClick={() => toggleWantDelete(!wantDelete)}
        >
          {wantDelete ? 'No, Keep my Account!' : 'Delete Account'}
        </button>
      </div>
    </div>
  )
}
