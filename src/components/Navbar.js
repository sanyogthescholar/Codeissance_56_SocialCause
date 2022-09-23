import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-scroll';
// import { MdContactPage } from 'react-icons/md'
// import { AiOutlineCustomerService } from 'react-icons/ai'
// import { FcAbout } from 'react-icons/fc'
// import { FcHome } from 'react-icons/fc'
// import { BiLogIn } from 'react-icons/bi'
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // useEffect(() => {
    //     AOS.init({ duration: 1000 })
    // }, [])


    return (
        <div className="Navbar" id="Navbar">
            <Link to='Home' className="nav-logo"><span >TrackZ</span></Link>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to="/raddiwala" onClick={() => setIsOpen(!isOpen)}>Home <i></i> </Link>
                <Link to="About" onClick={() => setIsOpen(!isOpen)}>About <i></i></Link>
                <Link to="Service" onClick={() => setIsOpen(!isOpen)}>Service <i></i></Link>
                <Link to="Contact" onClick={() => setIsOpen(!isOpen)}>Contact <i></i></Link>
                <Link to="/SimpleUser" onClick={() => setIsOpen(!isOpen)}>SignUp<i></i></Link>
                <Link to="/Notification" onClick={() => setIsOpen(!isOpen)}>
                    Notification{/* <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge> */}
                </Link>
                <Link to="/ProfileUser" onClick={() => setIsOpen(!isOpen)}><b style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"orangered",padding:"7px"}}>NA</b></Link>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};
export default Navbar;