import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../assets/css/Nav.component.css";

const KNavBar : React.FC = () => {
    return(
        <>  
            <Nav variant="tabs" className="justify-content-end" activeKey="/home" style={{paddingTop: "1rem"}}>
                <h1 style={{position:"relative", marginRight: "60rem"}}>KISURA</h1>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
};

export default KNavBar;