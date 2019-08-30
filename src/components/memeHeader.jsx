//Display logic file, aka UI logic, aka rendering logic, presentational component, dumb component.
//ONLY receives props and displays things correctlty.
import React from 'react';

function MemeHeader() {
    console.log("MemeHeader toimii");
        return (
            <div className="productsAppboxcss">
                <div>
                    Welcome...
                </div>
                <p className="imageboxcss">
                    <img className="imagecss"
                        src="http://pngall.com/wp-content/uploads/2016/05/Trollface.png"
                        alt="Problem?"
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <font style={{fontWeight: "bold", color: "white"}}> Meme Generator </font>
                     
                </p>
            </div>
        )
}

export default MemeHeader;
