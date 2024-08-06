import React, {useState} from 'react'

export default function Darkmode() {
    const [styleSheet, setstyleSheet] = useState(
        {
            color : "black",
            backgroundColor : "white"
        }
    )
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const toggleColor = () =>{
        if(styleSheet.color === "black" && styleSheet.backgroundColor === "white"){
            setstyleSheet(
                {
                    color : "white",
                    backgroundColor : "black",
                    border : "1px solid white"
                }
            )
            setBtnText("Disable Dark Mode ");
        }
        else{
            setstyleSheet(
                {
                    color : "black",
                    backgroundColor : "white"
                }
            )
            setBtnText("Enable Dark Mode ");
        }
    }
    return (
        <div className='m-3 container' style = {styleSheet} >
            <div className="accordion accordion-flush " id="accordionFlushExample">
                <h2 className='m-3'>About TextUtils</h2>
                <div className="accordion-item" style = {styleSheet} >
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style = {styleSheet} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style = {styleSheet}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style = {styleSheet} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style = {styleSheet}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style = {styleSheet} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={toggleColor} className='btn btn-primary m-2'>{btnText}</button>
            </div>
        </div>
    )
}
