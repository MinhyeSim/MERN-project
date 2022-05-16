import React,{useState} from "react";
import {Learned} from '@/components'
//import { useDispatch } from "react-redux";
import { registerRequest, registerSaga } from "@/modules/auth/register";
//필요한 것만 쓸 것임

const LearnedPage = () => {
    const[write, setWriter] = useState({
        //useState는 상태를 유지해주는 역할. 
        title:'', subject:'' 
    })
    //const dispatch =useDispatch()
    //리듀서와 연결
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setWriter({...write,[name]: value})
    }
    const onSubmit = e => {
        e.preventDefault()
        //dispatch(registerRequest(write))
    }


    return (
       <Learned onChange={onChange} onSubmit={onSubmit}/>
    );
};

export default LearnedPage
 