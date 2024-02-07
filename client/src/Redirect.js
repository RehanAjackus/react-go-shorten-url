import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer,toast} from "react-toastify"

export default function Redirect(){
    const [msg,setMsg]=useState('')
    const [shorturl,setUrl]=useState('')
    const navigate=useNavigate()
    const params=useParams()
    const checkRoute=()=>{
        
    }
    useEffect(()=>{
        if(params.url){
            console.log('Urs is',params.url)
            axios.post('http://localhost:8080/api/geturl',{ shortUrl:params.url})
            .then(res=>{
                toast('Redirecting...',{type:'success'})
                window.location.href=res.data.url.longUrl
            },err=>{
                toast(err,{type:'error'})
            })
        }
    },[])
    return <div>
        <ToastContainer/>
    </div>
}