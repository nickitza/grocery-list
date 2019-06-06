import React from 'react';
import List from './List'
import ItemForm from './ItemForm'

class App extends React.Component {
  state= {
    groceries: [
      { id: 1, item: "pineapple", complete: false},
      { id: 2, item: "tomatoes", complete: false},
      { id: 3, item: "avocado", complete: false},
      { id: 4, item: "potatoes", complete: false},
      { id: 5, item: "cat food", complete: false},
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (item) => {
    const { groceries } = this.state;
    const grocery = {item, id: this.getUniqId(), complete: false};
    this.setState({ groceries: [grocery, ...groceries]});
  }

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery;
      })
      }
    )
  }

  render(){
    const { groceries } = this.state;
    return(
      <div>
        <h1>Grocery List</h1>
        <List name="Grocery List" items={groceries} itemClick={this.handleClick}/>
        <ItemForm addItem={this.addItem} />
      </div>
    )}
  }

export default App;
