import React, { Component, Fragment } from 'react';
//import AwsDynamoDbEventComp from './awsDynamoDbEventComp';
import AwsDynamoDbTableComp from './awsDynamoDbTableComp';
import axios from "axios";
//const config = require('../config.json');

export default class AwsDynamoDbEventsComp extends Component {
  constructor() {
    super()
    this.state = {
      newtapahtuma: null,
      tapahtumat: [],
      key: 'id',
      //direction: 'asc', //toimii myös tällä
      direction: {
        id:'asc',
        //reason:'asc',
      },
      //sort: { key: 'id', direction: 'asc' }
    }
    this.fetchTapahtumat = this.fetchTapahtumat.bind(this);
    this.sortByInitial = this.sortByInitial.bind(this);
    this.sortBy = this.sortBy.bind(this);
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
      const tapahtumacount = res.data.length;
      console.log("current tapahtumacount: ", tapahtumacount);
    } catch (err) {
      console.log(`Ay ay, an error has occurred: ${err}`);
    }
  }

  //async await tarvitaan componentDidMounttiin jotta on dataa mitä järjestää onMount-vaiheessa!
  componentDidMount = async () => {
    await this.fetchTapahtumat();
    this.sortByInitial();
  }


  sortByInitial (){
    const key = this.state.key;  // on sama kuin: // const key= 'id';
    const direction = this.state.direction;
    const tapahtumat = this.state.tapahtumat;
    console.log("key sortByInitial:ista:", key);
    console.log("direction sortByInitial:ista:", direction);
    console.log("current tapahtumat sortByInitial:sta:", tapahtumat);
    
    this.setState({
       tapahtumat: this.state.tapahtumat.sort( (a,b) => a[key] - b[key] ),
       direction: {[key]: direction[key]}
     });
    console.log("current tapahtumat sortByInitial:sta:", this.state.tapahtumat);
    console.log("direction sortByInitial:ista:", this.state.direction[key]);
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
    
  }


  render() {
    // const currentTapahtumat = this.state.tapahtumat;
    // const currentSort = this.sortBy;
    // const initialSort = this.sortByInitial;
    // console.log ("current Tapahtumat renderistä: ", currentTapahtumat);
    // console.log ("current Sort renderistä: ", currentSort);
    // console.log ("initial Sort renderistä: ", initialSort);
    const tapahtumacount = this.state.tapahtumat.length;
    console.log("current tapahtumacount: ", tapahtumacount);

    return (
      <Fragment>
        <section className="section">
          <div className="eventsboxcss">
             <h1>Events (Tapahtumat) </h1>
             <p >Below you will see all the events from the Petri2 Dynamo db event list. 
                 There are currently <font style={{fontWeight: "bold", color: "purple"}}> {tapahtumacount} </font> events in the db. </p>
          </div>
        </section>  {/* <br /> */}

        <section className="section">
          <div className="eventsboxcss" >
              {this.state.tapahtumat && this.state.tapahtumat.length > 0
                  ? <AwsDynamoDbTableComp tapahtumat={this.state.tapahtumat} sortBy={this.sortBy} />
                  // ? <AwsDynamoDbTableComp tapahtumat={currentTapahtumat} sortBy={currentSort} />
                  // ? <AwsDynamoDbTableComp tapahtumat={currentTapahtumat} sortBy={initialSort} />
                  : <div> No events loaded yet </div>
                  // : console.log("No events loaded yet")
              }
          </div>
        </section>

        {/* <<PrinttausYhteenCheckAlhaalla....>> */}

      </Fragment>
    )
  }

}




        //  <<PrinttausYhteenCheckAlhaalla...>> 
        //  <section className="section">
        //     <div className="eventsboxcss" >  
        //         <table>
        //               Tämä printtaa pelkät id numerot:
        //               <tbody>
        //                   {
        //                     this.state.tapahtumat && this.state.tapahtumat.length > 0
        //                     ? this.state.tapahtumat.map(tapahtuma => <AwsDynamoDbEventComp
        //                         id={tapahtuma.id} />)
        //                     : <div className="tile notification is-warning">No events available</div>
        //                   }
        //               </tbody>

        //               Tämä printtaa kaiken vaan riveittäin yhteen:
        //               <tbody>
        //                   {
        //                     this.state.tapahtumat && this.state.tapahtumat.length > 0
        //                     ? this.state.tapahtumat.map(tapahtuma => <AwsDynamoDbEventComp
        //                         key={tapahtuma.id} id={tapahtuma.id} name={tapahtuma.reason} urgent={tapahtuma.urgent} 
        //                         dateCreated={tapahtuma.dateCreated} timeCreated={tapahtuma.timeCreated} timeUpdated={tapahtuma.timeUpdated}   />)
        //                     : <div className="tile notification is-warning">No events available</div>
        //                   }
        //               </tbody>
        //         </table>
        //     </div>  
        // </section>








