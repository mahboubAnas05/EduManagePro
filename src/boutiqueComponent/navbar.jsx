import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar(){
    const [openBurgger, setOpenBurgger] = useState(false)
    function TogglerNav(){
        setOpenBurgger(!openBurgger)
    }
    
    return(
        <nav className="p-3 border-bottom fixed-top mx-1" style={{
           background : "linear-gradient(to right, #132d46, #191e29, rgb(33, 33, 34), #000)"
        }}>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1 style={{
                        fontFamily : "'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
                    }} className="text-light d-flex align-items-center">
                        <span className="me-1">  
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#01c38d"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                        </span>
                        <b style={{
                            borderBottom : "3px solid #01c38d"
                        }}><i>EduManagePro</i></b>
                    </h1>
                </div>
                <div className="d-md-flex d-none gap-5 align-items-center">
                    <div><Link className="hoverNav text-decoration-none">home</Link></div>
                    <div><Link className="hoverNav text-decoration-none">Liste des étudiants</Link></div>
                    <div><Link className="hoverNav text-decoration-none">A propos</Link></div>
                    <div><Link className="btn text-decoration-none text-light w-100" style={{
                        background : "#01c38d"
                    }}>LogIn</Link></div>
                </div>
                <div className="d-md-none">
                    <button style={{
                            boxShadow : "1px 2px 10px 1px rgba(1, 195, 140, 0.51)"
                    }} onClick={TogglerNav} className="btn hover">
                        {
                            !openBurgger 
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#eee"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#eee"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        }
                    </button>
                </div>
            </div>

            <div className={`${!openBurgger ? 'd-none' : 'd-block d-md-none'}`}>
                <div className="p-3"><Link className="hoverNav text-decoration-none">home</Link></div>
                <div className="p-3"><Link className="hoverNav text-decoration-none">Liste des étudiants</Link></div>
                <div className="p-3"><Link className="hoverNav text-decoration-none">A propos</Link></div>
                <div className="p-3"><Link className="btn text-decoration-none text-light w-100" style={{
                    background : "#01c38d"
                }}>LogIn</Link></div>

            </div>
        </nav>
    )
}