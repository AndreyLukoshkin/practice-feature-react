import React from 'react'
import useInput from '../hooks/useInput'

const ControlledInputWithCustomHook = () => {
  const userName = useInput('')
  const userPassword = useInput('')

  // console.log(userName.value, userPassword.value)

  return (
    <div>
      <div>Controlled Input with custom hook useInput</div>
      <input {...userName} type="text" placeholder="userName" />
      <input {...userPassword} type="text" placeholder="userName" />
      <div>
        userName: {userName.value} userPassword: {userPassword.value}
      </div>
    </div>
  )
}

export default ControlledInputWithCustomHook
