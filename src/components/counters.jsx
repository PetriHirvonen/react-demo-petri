import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 1 },
            { id: 3, value: 0 },
            { id: 4, value: 1 }
        ]
    };


// Event handler counterin poistamiseen:
    handleDelete = (counterId) => {
        console.log('Event handler called' ,  counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters});
    };

    render () {
        return (
          <div>
              {this.state.counters.map(counter => ( 
                    <Counter
                         key={counter.id} 
                         onDelete={this.handleDelete} 
                         value={counter.value} 
                         id={counter.id}
                          >
                        {/* Huom. seur. children-rivi pitää olla synkassa counter.jsx:n kanssa: */}
                    <h4>Counter #{counter.id}</h4>
                    </Counter> 
                    ))}
              {/* <Counter /> */}
           </div>  
        ); 
    } 
}

    
export default Counters;

