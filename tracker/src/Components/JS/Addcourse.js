import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Addcourse() {
     
    const [data, setData] = useState(null);
    const [name, setname] = useState('');
    const [Description, setDescription] = useState("");
    const [link, setlink] = useState("");
    const [type, settype] = useState("");
    
    useEffect(() => {
        async function getData() {
          const response = await fetch(
            `http://172.168.1.6?name=${name}&description=${Description}&link=${link}&type=${type}`,
         {
            method: "POST",
            headers: {
             Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
         } )
      
          console.log(response)
        }
        getData()
      }, [])

    return (
        <>
        <form>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "100vh",padding:"20px" }}>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        padding:"15px"
                    }}
                >
                    <TextField fullWidth label="Course Name" id="fullWidth" value={name} onChange={(e) => setname(e.target.value)} />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        padding:"15px"
                    }}
                >
                    <TextField fullWidth label="Description" id="fullWidth" value={Description} onChange={(e) => setDescription(e.target.value)}/>
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        padding:"15px"
                    }}
                >
                    <TextField fullWidth label="Enter Your Course Link " id="fullWidth" type="url" value={link} onChange={(e) => setlink(e.target.value)}  />
                </Box>
                <div className="mb-3">
                    <label for="" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Type Of Course</h5></label>
                    <select id="country" name="country" style={{ padding: "15px", border: "0px", outline: "none", width: "250px", height: "50px", borderRadius: "3.5px" }} value={type} onChange={(e) => settype(e.target.value)}  >
                        <option value="australia" style={{ fontSize: "14px" }}>communication</option>
                        <option value="canada"> craftwomanship</option>
                        <option value="usa"> tutors</option>
                        <option value="usa"> Singer</option>
                        
                    </select>
                    <div id="emailHelp" className="form-text">We'll never share your Phone with anyone else.</div>
                </div>
                <Button variant="contained" disableElevation type="submit" >
                    ADD COURSE
                </Button>
            </div>
            </form>
        </>

    );
}
