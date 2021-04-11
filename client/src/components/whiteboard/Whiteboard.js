import React from 'react'
import WhiteApp from "./WhiteApp"
import NavDashboard from './NavDashboard'
import "./styles.css"

function Whiteboard() {
    return (
        <div className="White">
            <NavDashboard />
            <WhiteApp />
        </div>
    )
}

export default Whiteboard
