import React from 'react';
import List from './List'
import ItemForm from './ItemForm'


class App extends React.Component {
  state= {
    groceries: [
      { id: 1, item: "pineapple", complete: false},
      { id: 2, item: "tomatoes", complete: false},
      { id: 3, item: "avocado", complete: false},
      { id: 4, item: "potatoes", complete: false}
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (item) => {
    debugger
    const { groceries } = this.state;
    const grocery = {item, id: this.getUniqId(), complete: false};
    this.setState({ groceries: [grocery, ...groceries]});
  }

  
  render(){
    const { groceries } = this.state;
    return(
      <div>
        <List name="Grocery List" items={groceries} />
        <ItemForm addItem={this.addItem} />
      </div>
    )}
  }

export default App;
