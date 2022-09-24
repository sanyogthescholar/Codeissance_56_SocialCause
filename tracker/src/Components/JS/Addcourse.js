import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'


export default function Addcourse() {

    const url = "http://localhost:4000/add-course"
    const [data, setData] = useState({
        name: "",
        description: "",
        link: "",
        type_: ""
    });

    function submit(e) {
        e.preventDefault()
            /* Axios.post(url, data: {
                name: data.name,
                description: data.description,
                link: data.link,
                type_: data.type_
            }) */
        var final_url = url + `?name=${data.name}&description=${data.description}&link=${data.link}&type_=${data.type_}`
        console.log(final_url)
        axios.get(final_url)
    }

    function handle(e) {
        const newdata = {...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }


    return ( <
        >
        <
        form onSubmit = {
            (e) => submit(e)
        } >
        <
        div style = {
            { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "100vh", padding: "20px" }
        } >
        <
        Box sx = {
            {
                width: 500,
                maxWidth: '100%',
                padding: "15px"
            }
        } >
        <
        TextField fullWidth label = "Course Name"
        id = "name"
        value = { data.name }
        onChange = {
            (e) => handle(e)
        }
        /> </
        Box >
        <
        Box sx = {
            {
                width: 500,
                maxWidth: '100%',
                padding: "15px"
            }
        } >
        <
        TextField fullWidth label = "Description"
        id = "description"
        value = { data.description }
        onChange = {
            (e) => handle(e)
        }
        /> < /
        Box > <
        Box sx = {
            {
                width: 500,
                maxWidth: '100%',
                padding: "15px"
            }
        } >
        <
        TextField fullWidth label = "Enter Your Course Link "
        id = "link"
        type = "url"
        value = { data.link }
        onChange = {
            (e) => handle(e)
        }
        /> < /
        Box > <
        div className = "mb-3" >
        <
        label
        for = ""
        style = {
            { display: "flex", textAlign: "center", gap: "10px" }
        } > < h5 > Type Of Course < /h5></label >
        <
        select id = "type_"
        name = "type_"
        style = {
            { padding: "15px", border: "0px", outline: "none", width: "250px", height: "50px", borderRadius: "3.5px" }
        }
        value = { data.type_ }
        onChange = {
            (e) => handle(e)
        } >
        <
        option value = "communication"
        style = {
            { fontSize: "14px" }
        } > communication < /option> <
        option value = "craftwomanship" > craftwomanship < /option> <
        option value = "tutors" > tutors < /option> <
        option value = "Singer" > Singer < /option>

        <
        /select> <
        div id = "emailHelp"
        className = "form-text" > We 'll never share your Phone with anyone else.</div> < /
        div >
        <
        button > ADD COURSE < /button> < /
        div > <
        /form> < / >

    );
}