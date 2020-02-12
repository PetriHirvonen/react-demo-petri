import React, { Component, Fragment } from 'react';
//import AwsDynamoDbEventComp from './awsDynamoDbEventComp';
import AwsDynamoDbTableComp from './awsDynamoDbTableComp';
import axios from "axios";
//const config = require('../config.json');
import AwsDynamoDbTableCompID from './awsDynamoDbTableCompID';

export default class AwsDynamoDbEventAdminComp extends Component {
  constructor() {
    super()
    this.state = {
      //newtapahtuma: null,
      newtapahtuma: {
          id: "", 
          reason: "",
          urgent: "",
      },
      tapahtumat: [],
      key: 'id',
      //direction: 'asc', //toimii myös tällä
      direction: {
        id:'desc',
        //reason:'asc',
      },
      deletetapahtuma: {
        id: "", 
      },
      //deletetapahtumaid: "",  // ei tarvitse
      //sort: { key: 'id', direction: 'asc' }
      updatetapahtuma: {
        id: "",
        reason: "",
        urgent: "", 
      }
    }
    this.fetchTapahtumat = this.fetchTapahtumat.bind(this);
    this.sortByInitial = this.sortByInitial.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.handleAddTapahtuma = this.handleAddTapahtuma.bind(this);
    this.handleDeleteTapahtuma = this.handleDeleteTapahtuma.bind(this);
    this.handleUpdateTapahtuma = this.handleUpdateTapahtuma.bind(this);
    console.log("key constructorista:", this.state.key);
    console.log("direction constructorista:", this.state.direction);
  }

  fetchTapahtumat = async () => {
    try {
      //const res = await axios.get(`${config.api.invokeUrl}/getmany`);
      const res = await axios.get(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/getmany`);  // res = http response holder
      const tapahtumat = res.data;
      this.setState({ tapahtumat: tapahtumat });
      console.log("current tapahtumat fetchTapahtumista: ", tapahtumat);
      const tapahtumacountF = res.data.length;
      console.log("current tapahtumacount fetchTapahtumista: ", tapahtumacountF);
      // Mäppäys jotta saadaan id´t listaan console logiin sekä fetchTapahtumiin että CMD:hen:
      const tapahtumaids = tapahtumat.map(pTaiWhatever => pTaiWhatever.id);
        console.log("current tapahtuma_ids fetchTapahtumista: ", tapahtumaids);
          //Tällä this.setStatella saadaan käytettyäyä arvoa myös CMD:ssä: 
          this.setState({ tapahtumaidsetState: tapahtumaids});
    } catch (err) {
      console.log(`Ay ay, an error has occurred: ${err}`);
    }
  }

  //async await tarvitaan componentDidMounttiin jotta on dataa mitä järjestää onMount-vaiheessa!
  componentDidMount = async () => {
    await this.fetchTapahtumat();
    this.sortByInitial();
    //const tapahtumacountCMD = this.state.tapahtumat.length;
    //const defaultuusiid = tapahtumacountCMD + 1;
    //const defaultuusiid = this.state.newtapahtuma.id;  // prints --
    //console.log("current default_uusi_id: ", defaultuusiid); 
    const suurinID =  this.state.suurinID;
    const defaultuusiid = suurinID + 1;
    this.setState({
      newtapahtuma: {id: defaultuusiid},
    });
    const currentIds = [this.state.tapahtumaidsetState] ;
    console.log("current ids CMD:stä: ", currentIds); 
  }


  sortByInitial (){
    const key = this.state.key;  // on sama kuin: // const key= 'id';
    const direction = this.state.direction;
    const tapahtumat = this.state.tapahtumat;
    console.log("key sortByInitial:ista:", key);
    console.log("direction sortByInitial:ista:", direction);
    console.log("current tapahtumat sortByInitial:sta:", tapahtumat);
    
    // this.setState({
    //    tapahtumat: this.state.tapahtumat.sort( (a,b) => a[key] - b[key] ),
    //    direction: {[key]: direction[key]}
    //  });

    this.setState({
    tapahtumat: this.state.tapahtumat.sort( (a,b) => (
        this.state.direction[key] === 'asc'  // check if the this.state key is asc 
            // pakko muuttaa erikseen stringistä numeroksi:
            ? parseFloat(a[key]) - parseFloat(b[key]) // if key is asc, order from smallest -> largest
            : parseFloat(b[key]) - parseFloat(a[key]) // if key is not asc, order from largest -> smallest 
    )),
    direction: {[key]: direction[key]}
    });

    console.log("current tapahtumat sortByInitial:sta:", this.state.tapahtumat);
    console.log("direction sortByInitial:ista:", this.state.direction[key]);
    console.log("yksi tapahtuma sortByInitialista:", this.state.tapahtumat[0]);
    console.log("yksi tapahtuma sortByInitialista.dateCreated:", this.state.tapahtumat[0].dateCreated);
    console.log("yksi tapahtuma sortByInitialista.id:", this.state.tapahtumat[0].id);
    const suurinIDsource = this.state.tapahtumat[0].id;
    this.setState({ suurinID: suurinIDsource}); 
  }




  sortBy(key) {
    console.log("key sortBy:stä:", key);
    this.setState({
        //tapahtumat: this.state.tapahtumat.sort( (a,b) => a[key] - b[key] ) // laittaa (vain) järjestykseen 1,2,3...
        tapahtumat: this.state.tapahtumat.sort( (a,b) => (
            this.state.direction[key] === 'asc'
                //? a[key] - b[key] 
                //: b[key] - a[key] 
                // jos tarvii muuttaa erikseen stringistä numeroksi:
                ? parseFloat(a[key]) - parseFloat(b[key])
                : parseFloat(b[key]) - parseFloat(a[key])
        )),
        direction: {
            [key]: this.state.direction[key] === 'asc'  // check if the key is asc -> enables toggle
                ? 'desc'  // if key is asc, it changes to desc
                : 'asc'   // if key is not asc, it changes to asc
        },
    });
    console.log("current tapahtumat sortBy:sta:", this.state.tapahtumat);
    console.log("direction sortBy:stä:", this.state.direction[key]);
    console.log("yksi tapahtuma sortBy:stä:", this.state.tapahtumat[0]);
    console.log("yksi tapahtuma sortBy:stä.dateCreated:", this.state.tapahtumat[0].dateCreated);
  }


  handleAddTapahtuma = async (id, event) => {
    event.preventDefault();
    try {
        const params = {
            //Tässä pelaa sekä "id" että id, "reason" että reason, ja "urgent" että urgent
            id: id,
            //id: this.state.newtapahtuma.id,        // test: "id": 18,
            reason: this.state.newtapahtuma.reason,  // test: "reason": "TempLow",
            urgent: this.state.newtapahtuma.urgent,  // test: "urgent": "false"
        };
        console.log("params for body:", params);
        await axios.post(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/post/`, params);
        this.setState({ tapahtumat: [...this.state.tapahtumat, this.state.newtapahtuma] });
        // this.setState({ newtapahtuma: { "id": "" , "reason": "", "urgent": "" }});
        this.setState({ newtapahtuma: { "id": id, "reason": params.reason, "urgent": params.urgent }});
        console.log ("new id given by the user: ", id);   // prints the new id
        console.log ("this.state.newtapahtuma.reason given by the user: ", this.state.newtapahtuma.reason); 
        console.log ("this.state.newtapahtuma.urgent given by the user: ", this.state.newtapahtuma.urgent);  
        console.log ("params:", params);
        alert('Success: Event '  + id + ' with params ' + params.reason + ' AND ' + params.urgent + ' has been added to the Dynamo database.');
        //this.setState({ newtapahtuma: { id: id  + 1 }});
        //console.log ("this.state.newtapahtuma.id: ", this.state.newtapahtuma.id);   // prints the new id
        window.location.replace("/awsdynamodbEventAdminPage");  
    } catch (err) {
        console.log(`Ay ay, an error has occurred: ${err}`);
    }
    // window.location.replace("/awsdynamodbEventAdminPage"); 
  }
  onAddTapahtumaIdChange = event => this.setState({ newtapahtuma: { ...this.state.newtapahtuma, "id": Number(event.target.value) } });
  onAddTapahtumaReasonChange = event => this.setState({ newtapahtuma: { ...this.state.newtapahtuma, "reason": event.target.value } });
  onAddTapahtumaUrgentChange = event => this.setState({ newtapahtuma: { ...this.state.newtapahtuma, "urgent": event.target.value } });


  //handleUpdateTapahtuma = async (id, reason, urgent) => {
  handleUpdateTapahtuma = async (id, event) => {
    event.preventDefault();
    try {
        const params = {
          // "id": id,
          id: this.state.updatetapahtumaid,
          // "reason": reason,
          "reason": this.state.updatetapahtuma.reason,
          //"urgent": urgent
          "urgent": this.state.updatetapahtuma.urgent,
        };
        console.log("params handleUpdateTapahtuma1:", params);
        await axios.put(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/update/${id}`, params);
        const tapahtumaToUpdate = [...this.state.tapahtumat].find(tapahtuma => tapahtuma.id === id);
        const updatedTapahtumat = [...this.state.tapahtumat].filter(tapahtuma => tapahtuma.id !== id);
        // tapahtumaToUpdate.reason = reason;
        // tapahtumaToUpdate.urgent = urgent;
        updatedTapahtumat.push(tapahtumaToUpdate);
        console.log("tapahtumaToUpdate: old values before update: ", tapahtumaToUpdate);
        this.setState({tapahtumat: updatedTapahtumat});
        //console.log (tapahtumat); // => error/ "not defined"
        console.log(updatedTapahtumat);  // printtaa vielä vanhat arvot
        const resGET = await axios.get(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/get/${id}`);
        const updatedtapahtuma = resGET.data;
        console.log("updatedtapahtuma: new values after update ", updatedtapahtuma);
        //console.log("updatedTapahtumat: new values after update: ", updatedTapahtumat); // prints --
        console.log("params handleUpdateTapahtuma2:", params);
        alert('Success: Event '  + id + ' with params ' + params.reason + ' AND ' + params.urgent + ' has been updated to the Dynamo database.');
        //window.location.replace("/awsdynamodbEventAdminPage");  
    } catch (err) {
        alert(`id:tä '${id}' ei löydy tietokannasta`);
        // Tuhotaan saman tien vahingossa luotu tapahtuma... (ei hyvä ratkaisu, vaan quick workaround)
        await axios.delete(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/deleteoneitem/${id}`);
        window.location.replace("/awsdynamodbEventAdminPage");  
        console.log(`Error updating tapahtuma: ${err}`);
    }
  }
  onUpdateTapahtumaIdChange = event => this.setState({ updatetapahtuma: { ...this.state.updatetapahtuma, "id": Number(event.target.value) } });
  onUpdateTapahtumaReasonChange = event => this.setState({ updatetapahtuma: { ...this.state.updatetapahtuma, "reason": event.target.value } });
  onUpdateTapahtumaUrgentChange = event => this.setState({ updatetapahtuma: { ...this.state.updatetapahtuma, "urgent": event.target.value } });



  handleDeleteTapahtuma = async (id, event) => {
      event.preventDefault();
      try {
        console.log("try starting");
        console.log("deletetapahtumaid this.state: ", this.state.deletetapahtumaid);
        const id = this.state.deletetapahtumaid ;
        console.log("id from handleDeleteTapahtuma try: ", id);
        await axios.delete(`https://2xzc62wc51.execute-api.us-east-1.amazonaws.com/dev/dynamodb/deleteoneitem/${id}`);
        const updatedTapahtumat = [...this.state.tapahtumat].filter(tapahtuma => tapahtuma.id !== id);
        this.setState({tapahtumat: updatedTapahtumat});
        alert('Success: Event with id '  + id + ' has been deleted from the Dynamo database.');
        window.location.replace("/awsdynamodbEventAdminPage");  
      }catch (err) {
        console.log(`Unable to delete an event (=tapahtuma): ${err}`);
      }
  }
  onhandleDeleteTapahtuma = event => this.setState({"deletetapahtumaid": Number(event.target.value) } );

  

  render() {
    const tapahtumacountrender = this.state.tapahtumat.length;
    console.log("current tapahtumacountrender: ", tapahtumacountrender);

    return (
      <Fragment>
        <section className="section">
          <div className="eventsboxcss">
             <h1>Events (Tapahtumat) </h1>
             <p >Below you will see all the events from the Petri2 Dynamo db event list. 
                 There are currently <font style={{fontWeight: "bold", color: "purple"}}> {tapahtumacountrender} </font> events in the db. </p>
          </div>
        </section>  {/* <br /> */}

        <section>
            <div className="eventsboxcss">
                 {/* form onSubmit aiheutti ikävyyksiä: */}
                 {/* <form onSubmit={event => this.handleAddTapahtuma(this.state.newptapahtuma.id, event)}> */}
                 <form >
                    {/* *******ADD NEW: ******* */}
                    <div>
                        <span> <font style={{fontWeight: "bold", color: "black"}}> ADD NEW </font> : &nbsp;
                            <input type="text" placeholder="Enter id"
                                value={this.state.newtapahtuma.id}  
                                onChange={this.onAddTapahtumaIdChange}   
                        />
                        </span> &nbsp; &nbsp; 
                        <span>
                            <input type="text" placeholder="Enter Event (Tapahtuma)"
                                // value={this.state.newtapahtuma.reason}  // Tämä aiheutti Warningin controlledista ja uncontrolledista  
                                onChange={this.onAddTapahtumaReasonChange}
                        />
                        </span> &nbsp; &nbsp; 
                        {/* <span>
                            <input type="text" placeholder="Is urgent? true/false"
                                value={this.state.newtapahtuma.urgent}  onChange={this.onAddTapahtumaUrgentChange}
                        />
                        </span> */}
                        <span>
                            <label>  &nbsp; &nbsp; Is urgent? Pls choose one. </label>
                            <select 
                            //value={this.state.newtapahtuma.urgent} // Tämä ei aiheuta Warningia controlledista ja uncontrolledista, eikä vaikuta muutenkaan  
                            onChange={this.onAddTapahtumaUrgentChange} > 
                                <option value="<choose>" > - </option>
                                <option value="true" > Yes. </option>
                                <option value="false" > No. </option>
                            </select>
                        </span> &nbsp; &nbsp; 
                        <button type="button" onClick={(event) => this.handleAddTapahtuma(this.state.newtapahtuma.id, event)}> Add Event (Tapahtuma) </button>
                    </div>
                                                              
                    {/* *******UPDATE: ******* */}
                    <div>
                        <span> <font style={{fontWeight: "bold", color: "black"}}> UPDATE </font> : &nbsp; &nbsp;
                            <input type="text" placeholder="Enter id"
                                value={this.state.updatetapahtumaid}  onChange={this.onUpdateTapahtumaIdChange}   
                        />
                        </span> &nbsp; &nbsp; 
                        <span>
                            <input type="text" placeholder="Enter Event (Tapahtuma)"
                                value={this.state.updatetapahtuma.reason}  onChange={this.onUpdateTapahtumaReasonChange}
                        />
                        </span> &nbsp; &nbsp; 
                        <span>
                            <label>  &nbsp; &nbsp; Is urgent? Pls choose one. </label>
                            <select value={this.state.updatetapahtuma.urgent} onChange={this.onUpdateTapahtumaUrgentChange} > 
                                <option value="<choose>" > - </option>
                                <option value="true" > Yes. </option>
                                <option value="false" > No. </option>
                            </select>
                        </span> &nbsp; &nbsp; 
                        <button type="button" onClick={(event) => this.handleUpdateTapahtuma(this.state.updatetapahtuma.id, event)}> Update Event (Tapahtuma) </button>
                    </div>
                    
                    {/* *******DELETE: ******* */}
                    <div>
                          <span> <font style={{fontWeight: "bold", color: "black"}}> DELETE </font> : &nbsp; &nbsp;
                              <input type="text"  placeholder="Enter id"
                                  // value={this.state.deletetapahtumaid} // Tämä aiheutti Warningin controlledista ja uncontrolledista  
                                  onChange={this.onhandleDeleteTapahtuma}  />
                          </span> &nbsp; &nbsp;  
                          <button type="button" onClick={(event) => this.handleDeleteTapahtuma(this.state.deletetapahtuma.id, event)}> Delete Event (Tapahtuma) </button>
                    </div>
                          <br/>
                    
                 </form>
            </div>
        </section>


        {/* VARSINAINEN TABLE: */}
        <section className="section">
          <div className="eventsboxcss" >
              {this.state.tapahtumat && this.state.tapahtumat.length > 0
                  ? <AwsDynamoDbTableComp tapahtumat={this.state.tapahtumat} sortBy={this.sortBy} />
                  : <div> No events loaded yet </div>
                  // : console.log("No events loaded yet")
              }
          </div>
        </section>


        {/* ID-TABLE:  */}
        <section className="section">
          <div className="eventsboxcss" >
              {this.state.tapahtumat && this.state.tapahtumat.length > 0
                  ? <AwsDynamoDbTableCompID tapahtumat={this.state.tapahtumat} />
                  : <div> No events loaded yet </div>
                  // : console.log("No events loaded yet")
              }
          </div>
        </section>


      </Fragment>
    ) 
  }    

}

