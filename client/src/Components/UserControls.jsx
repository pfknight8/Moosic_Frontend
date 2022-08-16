import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Edit(props) {
  const [isFormActive, setIsFormActive] = useState(false)
  const [username, setUsername] = useState(props.user.username)
  const [password, setPassword] = useState(props.user.password)
  let { id } = useParams()
  const toggleActive = () => {
    setIsFormActive(!isFormActive)
  }

  const [upA, setUpA] = useState({})
  const updateAccount = async (e) => {
    const res = await axios.put(`/api/user/${props.user._id}`, {
      username: username,
      password: password
    })
    setUpA(res.data)
    props.getUser()
  }
  const [delA, setDelA] = useState({})
  const deleteAccount = async (user) => {
    const res = await axios.delete(`/api/user/${user}`)
    setDelA(res.data)
    props.getUser()
  }
  return (
    <div>
      {isFormActive ? (
        <div>
          <form className="edit" onSubmit={updateAccount}>
            <textarea
              className="edittext"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name={'username'}
              placeholder={'username'}
            />
            <textarea
              className="edittext"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name={'password'}
              placeholder={'password'}
            />
            <button type="submit" onClick={props.getPassword}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="accountinfo">
            <h2 className="card">Username: {props.user.username}</h2>
            <h2 className="card">Password: {props.user.password}</h2>
            <button onClick={toggleActive}> Update Info</button>
            <button onClick={() => deleteAccount(props.user._id)}>
              {' '}
              Delete Account{' '}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
