import React from 'react'
import classes from "./App.module.css";
import {DataElementsTable} from "./DataElementsTable";
import {SideMenu} from "./SideMenu";


const MyApp = () => {


    return (
        <div style={{gap: 32}} className={classes.container}>
            <div style={{display: "flex", gap: 32}}>
                <SideMenu/>
                <main>
                    <h1>Data Elements</h1>
                    <DataElementsTable/>
                </main>
            </div>
        </div>
    )
}

export default MyApp
