import React, {useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginCancelled, logoutRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';
import { useRouter } from 'next/router';
import { Profile } from '@/components'

const LoginPage = () => {

  const[user, setUser] = useState({userid:'', password:''})
  const dispatch = useDispatch()
  const router = useRouter()
  const {isLoggined, loginUser} = useSelector(state => state.login)

  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setUser({...user,[name]: value})
  }
  const onSubmit = e => {
      e.preventDefault()
      alert('로그인 확인:'+JSON.stringify(user))
      dispatch(loginRequest(user))
      //router.push('/user/profile')
  }
 
  return (
    isLoggined
    ? <Profile loginUser={loginUser}/>
    : <Login onSubmit={onSubmit} onChange={onChange}/>);
};

const mapStateToProps = state => ({loginUser: state.login.loginUser})
const loginActions = {loginRequest, loginCancelled, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);