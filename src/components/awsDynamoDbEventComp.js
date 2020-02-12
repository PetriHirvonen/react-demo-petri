//TÄMÄ FILE EI KÄYTÖSSÄ.
import React, { Component, Fragment }  from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AwsDynamoDbEventComp extends Component {

  state = {
    isEditMode: false,
    updatedtapahtumaname: this.props.name
  }

  handleTapahtumaEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateTapahtuma(this.props.id, this.state.updatedtapahtumaname);
  }

  onAddTapahtumaNameChange = event => this.setState({ "updatedtapahtumaname": event.target.value });

  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/" onClick={this.handleTapahtumaEdit} className="product-edit-icon">
              {/* <FontAwesomeIcon icon="edit" /> */}
            </a>
            <button onClick={event => this.props.handleDeleteTapahtuma(this.props.id, event)} className="delete"></button>
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Edit tapahtuma name</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter name"
                value={this.state.updatedtapahtumaname}
                onChange={this.onAddTapahtumaNameChange}
              />
              <p className="product-id">id: { this.props.id }</p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >save</button>
            </div>
          // : <div>
          //     <p className="product-id"> id: { this.props.id }</p>
          //     <p className="product-title">{ this.props.name }</p>
          //     <p className="product-title">{ this.props.urgent }</p>
          //     <p className="product-title">{ this.props.dateCreated }</p>
          //     <p className="product-title">{ this.props.timeCreated }</p>
          //     <p className="product-title">{ this.props.timeUpdated }</p>
          //   </div>
          : <div>
              { this.props.id }
              { this.props.name }
              { this.props.urgent }
              { this.props.dateCreated }
              { this.props.timeCreated }
              { this.props.timeUpdated }
            </div>

        }
      </div>
    )
  }
}
