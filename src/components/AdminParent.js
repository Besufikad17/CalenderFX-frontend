import React from "react";
import Admin from "./Admin";
import { Card } from "reactstrap";
import { useMediaQuery } from './hooks';

const AdminParent = () => {
    const mediaMatch = useMediaQuery('(max-width: 1200px)');

    return (
        <div>
            <br/>
            <div style={{textAlign:"center"}}>
                <h2 style={{ color: "#ffffff" }}>Users</h2> <br /><br />
            </div>
            <Card body style={{ margin: mediaMatch ? "auto" : "0px 320px 0px 320px", background:"transparent" }}>
                <Admin />
            </Card>
        </div>

    )
}

export default AdminParent;