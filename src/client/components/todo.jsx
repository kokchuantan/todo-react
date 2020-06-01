import React from "react";

export default class List extends React.Component {
    constructor() {
      super();
  
      this.state = {
        item:"",
        list: []
      };
    }
    changeHandler(event) {
        this.setState({item: event.target.value});
    }

    clickHandler() {
        this.state.list.push(this.state.item);
    }
    
      render() {
        var allItems = this.state.list.map((index) => {
            return (
                <li>{index}</li>
                )
        })
        return (
            <div>
          <form>
            <div>
              <input type="text" value={this.state.item} onChange={this.changeHandler}></input>
            </div> 
            <button type = 'submit' onClick={this.clickHandler}> Add Item </button>
          </form>
              <ul>{allItems}</ul>
          </div>
          

        );
      }
    }