import React, { Component } from 'react';

export default class MainSimplest4counter extends Component {
  
  constructor() {
    super()
    this.state = {
      uutekstiiuu: "uyuy: ", 
      counter: 1,
      counterB: 1,
      kaikki: []
    }
    this.plusyksi= this.plusyksi.bind(this)
    this.plusyksiPrevStatenKautta= this.plusyksiPrevStatenKautta.bind(this)
    this.kymppiin= this.kymppiin.bind(this)
    this.nollaan= this.nollaan.bind(this)
    this.stoppaa= this.stoppaa.bind(this)
    this.aloita= this.aloita.bind(this)
    // Tällä lähtee rullaamaan heti kun sivu aukeaa:
    // setInterval(() => {
    //   this.setState({ counter: this.state.counter + 1 })
    // }, 3000)
  }

  aloita() {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1 
      });
    }, 1000);
  }

  plusyksi() {
    this.setState({ counter: this.state.counter + 1 })
  }
  plusyksiIlmanBindiaEliNuolella = () => {
    this.setState({ 
      counter: this.state.counter + 1, kaikki: this.state.kaikki.concat('A')
    })
  }
  plusyksiIlmanBindiaEliNuolellaCounterilleB = () => {
    this.setState({ counterB: this.state.counterB + 1, kaikki: this.state.kaikki.concat('B') })
  }
  //Huom: "concat" ei muuta olemassaolevaa taulukko vaan luo uuden taulukon (mihin uusi alkio on lisätty)
  plusyksiPrevStatenKautta () {
    this.setState((prevState) => ({ 
      counter: prevState.counter + 1 
    }))
  }

  kymppiin () {
    this.setState({ counter: 10 })
  }

  nollaan () {
    this.setState({ counter: 0 })
  }

  //asetaArvoonFunktioJokaPalauttaaFunktion (eli Currying), tehty ilman Bindia eli nuolella: 
  asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella = (arvo) => {
    return () => {
      this.setState({ counter: arvo })
    }
  }  
  //asetaArvoonFunktioJokaPalauttaaFunktion2 (eli Currying), tehty ilman Bindia eli nuolella, tiivistäen: 
  asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella2 = (arvo) => () => this.setState({ counter: arvo })

  stoppaa() {
    clearInterval(this.interval);
  }
  
  handlerMetodina = () => {
    console.log('nappia 3 painettu')
    this.setState({ counter: 0 })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    const HelloWithProps = (props) => { return ( <div> <p>Hello. Here is your counter: {props.countteri} !</p> </div> ) }
    console.log('renderöidään', this.state.counter)

    //3 eri tapaa tehdä sama:
    const Display1 = (props) => {
      return ( 
        <div>{props.counter}</div>
      )
    }
    const Display2 = ({ counter }) => {
      return (
        <div>{counter}</div>
      )
    }
    const Display3 = ({ counter }) => <div>{counter}</div>

    //2 eri tapaa tehdä sama "Uudelleenkäytettävä nappi", eli minkä toiminta määritellään render>returnissa suoraan :
    const Button1 = (props) => (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
    const Button2 = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    //Taulukkko: (Huom: "join"-metodilla muodostetaan taulukosta merkkijono, joka sisältää taulukon alkiot)(erotettuna välilyönnillä.)
    // const historia = () => this.state.kaikki.join(' ')
    //Y.o. 1 rivi ehdollisena, eli return riippuu siitä onko näppäimiä painettu vai ei --> 14 riviä :
    const historia = () => {
      if (this.state.kaikki.length === 0) {
        return (
          <div>
            <em>sovellusta käytetään nappeja painelemalla</em>
          </div>
        )
      }
      return (
        <div>
          näppäilyhistoria: {this.state.kaikki.join(' ')}
        </div>
      )
    }

    const handlerRenderissa = () => {
      console.log('nappia 2 painettu')
      this.setState({ counter: 0 })
    }
    
    //  const helloWho = (who) => {
    //    const handlerWho = () => { 
    //       this.setState({ counter: this.state.counter + 10  }); 
    //       console.log('hello', who)
    //    }
    //    return handlerWho
    //  }
    //Y.o. (apumuuttujalla handlerWho) on sama kuin a.o lyhyempi tapa (ilman apumuuttujaa):
    const helloWho = (who) => {
      return () => { 
        this.setState({ counter: this.state.counter + 10  }); 
        console.log('hello', who)
      }
    }

    const setToValue = (newValue) => () => { 
      this.setState({ counter: newValue })
    }


    return (
      <div>
        <HelloWithProps countteri={this.state.counter} />
        <HelloWithProps countteri={this.state.counterB} />
        Tai suoraan:  &nbsp;   {this.state.counter}  &nbsp;  &nbsp; ja B: &nbsp; {this.state.counterB} &nbsp;  &nbsp;
        <button onClick = {this.plusyksi}> Plus 1 </button>
        <button onClick = {this.plusyksiIlmanBindiaEliNuolella}> Plus 1 Nuolella A:lle </button>
        <button onClick = {this.plusyksiIlmanBindiaEliNuolellaCounterilleB}> Plus 1 Nuolella B:lle</button>
        <button onClick = {this.plusyksiPrevStatenKautta}> Plus 1 PrevStatesta </button>
        <button onClick = {this.kymppiin}> Set to 10 </button>
        <button onClick = {this.nollaan}> Set to 0 </button>
        <button onClick={() => this.setState({counter: 0})}>Set to 0 suoraan render>returnista</button>
        <button onClick={() => this.setState({counter: 10})}>Set to 10 suoraan render>returnista</button>
        &nbsp;
        <button onClick = {this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(this.state.counter + 1)}> Plus 1 funktiofunktio</button>
        <button onClick = {this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(0)}> Set to 0 funktiofunktio </button>
        <button onClick = {this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella2(this.state.counter + 1)}> Plus 1 funktiofunktio2</button>
        <button onClick = {this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella2(0)}> Set to 0 funktiofunktio2 </button>
        &nbsp; 
        <button onClick = {this.stoppaa}> Freeze </button> &nbsp; 
        <button onClick = {this.aloita}> Start </button> &nbsp; 
        <div>
          <Display1 counter={this.state.counter}/>
          <Display2 counter={this.state.counter}/>
          <Display3 counter={this.state.counter}/>
          <div>
            <button onClick = {this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(this.state.counter+1)}>Plus 1 taas</button>
            <button onClick = {this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(0)}>Set to 0 taas</button>
          </div>
        </div>
        <div>
          <Display1 counter={this.state.counter}/>
          <Display2 counter={this.state.counter}/>
          <Display3 counter={this.state.counter}/>
          <div>
            <Button1 handleClick={this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(this.state.counter + 1)} text="B1 Plus 1 taas" />
            <Button1 handleClick={this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(this.state.counter - 1)} text="B1 Minus 1" />
            <Button1 handleClick={this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(0)} text="B1 Set to 0 taas" />
            <Button2 handleClick={this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(this.state.counter + 1)} text="B2 Plus 1 taas" />
            <Button2 handleClick={this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(this.state.counter - 1)} text="B2 Minus 1" />
            <Button2 handleClick={this.asetaArvoonFunktioJokaPalauttaaFunktionIlmanBindiaEliNuolella(0)} text="B2 Set to 0 taas" />
          </div>
        </div>
        
        <button onClick={this.plusyksiIlmanBindiaEliNuolella}>Plus 1 Nuolella, concatA</button>
        <button onClick={this.plusyksiIlmanBindiaEliNuolellaCounterilleB}>Plus 1 Niolella B:lle, concatB</button>
        <div> Historia concateille: {historia()}</div>

        <button onClick={() => console.log('nappia 1 painettu')}> "nappia 1 painettu" consoleen</button>
        <button onClick={handlerRenderissa}> "nappia 2 painettu" consoleen ja Set to 0 Renderista  </button>
        <button onClick={this.handlerMetodina}> "nappia 3 painettu" consoleen ja Set to 0 Metodista </button>
    
        <div>
          {this.state.counter}
          {this.state.uutekstiiuu}
          <button onClick={helloWho('world')}>nappi world +10</button>
          <button onClick={helloWho('react')}>nappi react +10</button>
          <button onClick={helloWho('function')}>nappi function +10</button>

          <button onClick={setToValue(1000)}>Set to 1000</button>
          <button onClick={setToValue(0)}>Set to 0</button>
          <button onClick={setToValue(this.state.counter+1)}>Plus 1</button>
        </div>

      </div>
    )

  }

}

