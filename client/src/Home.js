import './Home.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
export default function Home(){
    const [url,setUrl]=useState('')
    const [shortUrl,setShortUrl]=useState('')
    const [alertMsg,updateAlertMessage]=useState({msg:'',type:'success'})
    const host='http://localhost:3000/bit/'
    useEffect(()=>{

    },[])
    useEffect(()=>{
        if(alertMsg.msg!=''){
            toast(alertMsg.msg,{type:alertMsg.type})
        }
    },[alertMsg])
    const addUrl=()=>{
        axios.post('http://localhost:8080/api/addurl',{longUrl:url})
        .then(res=>{
            console.log('response is',res)
            setShortUrl(res.data.url.shortUrl)
            updateAlertMessage({msg:res.data.message,type:'success'})
        },
        err=>{
            updateAlertMessage({msg:err.message,type:'error'})
        }
        )
    }
    return (
        <div>
            <div className="container">
                <div>
                    <div className="input">
                        <TextField onChange={(e)=>setUrl(e.target.value)} id="outlined-basic" label="Enter your URL" variant="outlined" />
                    </div>

                    <div style={{width:'100%',marginTop:'20px'}}>
                        <Button onClick={()=>addUrl()} variant="contained" style={{width:'100%'}} >Get URL</Button>
                    </div>
                    <ToastContainer progressStyle={false}/>
                </div>
            </div>
            <div style={{textAlign:'center',marginTop:'20px'}}>{shortUrl!='' && <a href={host+shortUrl}>{host+shortUrl}</a>}</div>
        </div>
    )
}