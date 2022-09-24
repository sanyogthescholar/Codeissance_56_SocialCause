import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LineAxisOutlined } from '@mui/icons-material';
import Axios from 'axios'
export default function Addcourse() {

    const url=""
    const [data, setData] = useState({
        name:"",
        Description:"",
        link:""
    })
    // const [name, setname] = useState('');
    // const [Description, setDescription] = useState("");
    // const [link, setlink] = useState("");
    // const [type, settype] = useState("");
    
    // useEffect(() => {
    //     async function getData() {
    //       const response = await fetch(
    //         `http://172.168.1.6?name=${name}&description=${Description}&link=${link}&type=${type}`,
    //      {
    //         method: "POST",
    //         headers: {
    //          Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //      } )
      
    //       console.log(response)
    //     }
    //     getData()
    //   }, [])

    function submit(e){
        e.preventDefault()
        Axios.post(url,{
            name:data.name,
            Description:data.Description,
            link:data.link
        }).then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
     const newdata={...data}
     newdata[e.target.id]=e.target.value
     setData(newdata)
     console.log(newdata)
    }


    return (
        <>
        <form onSubmit={(e)=>submit(e)}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "100vh",padding:"20px" }}>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        padding:"15px"
                    }}
                >
                    <TextField fullWidth label="Course Name"   onChange={(e) => handle(e)} value={data.name} id="name" />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        padding:"15px"
                    }}
                >
                    <TextField fullWidth label="Description"   onChange={(e) => handle(e)} value={data.Description} id="Description"/>
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        padding:"15px"
                    }}
                >
                    <TextField fullWidth label="Enter Your Course Link" type="url"  onChange={(e) => handle(e)} value={data.link} id="link"  />
                </Box>
                <div className="mb-3">
                    <label for="" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Type Of Course</h5></label>
                    {/* <select  name="country" style={{ padding: "15px", border: "0px", outline: "none", width: "250px", height: "50px", borderRadius: "3.5px" } >
                        <><option value="australia" style={{ fontSize: "14px" }}>communication</option><option value="canada"> craftwomanship</option><option value="usa"> tutors</option><option value="usa"> Singer</option></>
                    </select> */}
                    <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                </div>
                {/* <Button variant="contained" disableElevation type="submit" >
                    ADD COURSE
                </Button> */}
                <button style={{padding:"10px",borderRadius:"5px",backgroundColor:"blue",color:"#fff",border:"0px",outline:"none"}}>Add course</button>
            </div>
            </form>
        </>

    );
}
