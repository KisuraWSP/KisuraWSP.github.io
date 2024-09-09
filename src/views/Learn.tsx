import {  memo } from "react";
import KNavBar from "../components/Nav.component";
import KFoot from "../components/Footer.component";

function Learn() {
    return(
        <>
            <KNavBar/>
            <h1 style={{textAlign: "center", paddingTop: "10rem"}}>
                Page is under construction!
            </h1>
            <KFoot/>
        </>
    );
}

export default memo(Learn);