import React,{useState} from 'react';
import '@fortawesome/fontawesome-free';
import {Navbar, NavItem, Button} from 'react-bootstrap';
import logo_image from './Images/ChargeBee.PNG';


function Toolbar(){
    const [hoveButton1, setHoveButton1] = useState(false);
    const [hoveButton2, setHoveButton2] = useState(false);
    let material1 = hoveButton1 ? <Button classname="button-style-1"><i className="fa fa-lock fa-lg"></i>Log in -></Button> : <Button className="button-style-1"><i className="fa fa-lock fa-lg"></i>Log in {'>'}</Button>
    let material2 = hoveButton2 ? <Button classname="button-style-2">Schedule A Demo -></Button> : <Button className="button-style-2">Schedule A Demo {'>'}</Button>
    return(
        <>
        <div className="Toolbar-grid">
            <div className="row justify-content-start">
                <div className="col-sm-1 ">
                    <img src={logo_image} width="120px"/>
                </div>
                <Navbar className="navstyle col-sm-8" collapseOnSelect expand="md">
                    <NavItem className="nav-item-style">Product</NavItem>
                    <NavItem className="nav-item-style">Pricing</NavItem>
                    <NavItem className="nav-item-style">Solution</NavItem>
                    <NavItem className="nav-item-style">Customers</NavItem>
                    <NavItem className="nav-item-style">Resources</NavItem>
                </Navbar>
                <div className="col-sm-3">
                    <span onMouseOver={() => setHoveButton1(true)} onMouseOut={() => setHoveButton1(false)}>{material1}</span>
                    <span onMouseOver={() => setHoveButton2(true)} onMouseOut={() => setHoveButton2(false)}>{material2}</span>
                </div>                    
            </div>
       </div>
       </>
    );
}


export default Toolbar;