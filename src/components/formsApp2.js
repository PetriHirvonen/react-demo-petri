import React from 'react';
import FormsFormContainerSmart2 from "./formsFormContainerSmart2"



function formsApp2() {
    return (
        <div>
            <div>
                Form2 example2 below.  Used for traveller profiling alike. 
            </div>
            <div>
                <FormsFormContainerSmart2 />
            </div>
        </div>
    )
}

export default formsApp2;


//HUOM: flow menee näin: 
//
//  FormsFormComponentDumbUI2  
//           -> FormsFormContainerSmart2 
//                          -> formsApp2.js 
//                                      -> indexOma.js 

