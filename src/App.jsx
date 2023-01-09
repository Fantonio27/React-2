import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interests"
import Footer from "./components/Footer"
import "./App.css"

export default function App(){
    return(
        <main>
            <div className="container">
                <div className="box">
                    <Info />
                    <About />
                    <Interest />
                    <Footer />
                </div>
            </div>
        </main>
    )
}