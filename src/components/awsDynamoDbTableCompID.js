import React from 'react';

export default function AwsDynamoDbTableCompID(props) {
    console.log("props.tapahtumat TABLE JS FILESTÄ: ", props.tapahtumat);

    
    return (
        <span>
            {
                props.tapahtumat.map(row1 => (
                    <span key={row1.id}>
                        {row1.id}
                    </span>
                ))
            }  
        </span>
        
    )
}
    