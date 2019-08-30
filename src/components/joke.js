import React from 'react';
   
function Joke (props) {
    console.log(props.question);    
    return (
            <div className="todocss">
                {/* Peruskysymysrenderöinti: */}
                {/* <h6>Question: {props.question} </h6> */}
                {/* Seur. tekee että jos ei ole kysymystä ollenkaan, jättää sanan "Question" renderöimättä: */}
                {/* <h6 style={{display: props.question ? "block" : "none"}} > Question: {props.question} </h6> */}
                {/* Seur.on sama kuin yllä, vain eri tavalla kirjoitettu: */}
                <h6 style={{display: !props.question && "none"}} > Question: {props.question} </h6>
                

                {/* Perusvastausrenderöinti: */}            
                {/* <h6>Answer: {props.punchLine} </h6> */}
                {/* Seur. tekee että jos ei ole (ts. "isn´t" ! ja "then" &&) kysymystä ollenkaan, muuttaa vastauksen värin: */}
                <h6 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine} </h6>

                <h6>validiteetti: {props.validity} </h6> 

                <hr/>

            </div>
        );
}


export default Joke;

