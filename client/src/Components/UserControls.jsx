import React from 'react'
import { useEffect, useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'

export default function Edit(props) {
  const [email, setEmail] = useState(props.user.email)
  const [username, setUsername] = useState(props.user.username)
  const [password, setPassword] = useState(props.user.password)
  let { id } = useParams()

  const updateAccount = async (e) => {
    const res = await Client.put(`${BASE_URL}/api/user/${props.user.id}`, {
      username: username,
      password: password
    })
  }

  const deleteAccount = async (user) => {
    const res = await Client.delete(`${BASE_URL}/api/user/${props.user.id}`)
  }
  return (
    <div>
      <div>
        <form className="edit" onSubmit={updateAccount}>
          <input
            className="edittext"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name={'email'}
            placeholder={'email'}
          />
          <input
            className="edittext"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name={'username'}
            placeholder={'username'}
          />
          <input
            className="edittext"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="password"
          />
          <button type="submit" onClick={props.getPassword}>
            Submit
          </button>
          <button
            className="buttonz"
            onClick={() => deleteAccount(props.user._id)}
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  )
}
