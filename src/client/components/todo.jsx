import React from "react";

export default class Todo extends React.Component {
    constructor() {
      super();
  
      this.state = {
        item:"",
        list: []
      };
    }
    changeHandler(event) {
        console.log(event.target.value)
        this.setState({item: event.target.value});
    }
    clickHandler() {
        console.log(this)
        let newList = this.state.list;
        newList.push(this.state.item)
        this.setState({list:newList, item:""})

    }
      render() {
        var allItems = this.state.list.map((item,index) => {
            return (
                <li key={index}>{item}</li>
                )
        })
        return (
            <div>
            <div>
              <input type="text" value={this.state.item} onChange={()=>{this.changeHandler(event)}}></input>
            </div> 
            <button onClick={()=>{this.clickHandler()}}> Add Item </button>
              <ul>{allItems}</ul>
          </div>
        );
      }
    }