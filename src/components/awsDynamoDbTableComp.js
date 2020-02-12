//Tämä file on taulukon layout, ja tämän importoivat sekä filet awsDynamoDbEventsComp.js että awsDynamoDbEventAdminComp.js
import React from 'react';

export default function AwsDynamoDbTableComp(props) {
    console.log("props.tapahtumat TABLE JS FILESTÄ: ", props.tapahtumat);
    return (
        <table>
            
            <thead>
                <tr>
                  {/* <th> id </th>
                  <th> Event name / reason </th>
                  <th> Urgency: is urgent? </th>
                  <th> DateStamp / dateCreated </th> 
                  <th> TimeStamp / timeCreated </th>
                  <th> TimeStamp / timeUpdated </th>*/}
                  <th> <button  onClick={ () => props.sortBy('id')}> id </button>  </th>
                  <th> <button  onClick={ () => props.sortBy('reason')}> Event name / reason </button> </th>
                  <th> <button  onClick={ () => props.sortBy('urgent')}> Urgency: is urgent?  </button> </th>
                  <th> <button  onClick={ () => props.sortBy('dateCreated')}> DateStamp / dateCreated </button> </th>
                  <th> <button  onClick={ () => props.sortBy('timeCreated')}> TimeStamp / timeCreated  </button> </th>
                  <th> <button  onClick={ () => props.sortBy('timeUpdated')}> TimeStamp / timeUpdated </button> </th>
                </tr>
            </thead>

            <tbody>
                {
                    props.tapahtumat.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.reason}</td>
                            <td>{row.urgent}</td>
                            <td>{row.dateCreated}</td>
                            <td>{row.timeCreated}</td>
                            <td>{row.timeUpdated}</td>
                        </tr>
                    ))
                }    
            </tbody>

        </table>
    )
}
