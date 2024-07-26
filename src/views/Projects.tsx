import Card from "react-bootstrap/Card";
import KNavBar from "../components/Nav.component";

const Projects : React.FC = () => {
    return(
        <>
            <KNavBar/>
            <Card style={{ width: '18rem', margin: "1rem" }}>
                <Card.Body>
                    <Card.Title><a href="https://github.com/KisuraWSP/KisuraWSP.github.io">Portfolio</a></Card.Title>
                    <Card.Text>
                        This is my portfolio site written using Vite + TS + React 
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Projects;