import React from 'react';
import './index.css';


class ItemForm extends React.Component {
  state = { item: '' }

  handleChange = (event) => {
    this.setState({ item: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: '' })
  }

  render(){

    const { item } = this.state;
    {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        value={ item }
        item = "item"
        onChange={this.handleChange}
        required 
        placeholder="Add An Item" />
      </form>


    )}
  }
}

export default ItemForm;