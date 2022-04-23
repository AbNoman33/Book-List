import React,{Component} from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {
  state = {
    books: [
      { bookName :"1984", writer : "George Orwell"},
      { bookName :"The Vinci Code ", writer : "Dan Brown"},
      {bookName :"The Alchemist", writer : "Paulo Cohelho"}
    ],
    otherProp: "I am some other Property"
  }
   
  changeBookState = newBookName => {
    this.setState({
      books: [
        { bookName : newBookName, writer : "George Orwell"},
        { bookName :"The Vinci Code ", writer : "Dan Brown"},
        {bookName :"Good Man", writer : "Ramond Marvin"}
      ]
    } );
  }

  changeWithInputState = event => {
    this.setState({
      books: [
        { bookName : event.target.value, writer : "George Orwell"},
        { bookName :"The Vinci Code ", writer : "Dan Brown"},
        {bookName :"Good Man", writer : "Ramond Marvin"}
      ]  } );
  }


  render() {
     const style = {
       border: "1px solid red",
       borderRadius: "5px",
       backgroundColor: "black",
       color: "white"
     }
         return(
      <div className="App">
      <h1 style={style}>Book List</h1>
      <button onClick={()=>this.changeBookState("Jungle Book")}>Change State</button>
      <input type= "text" onChange={this.changeWithInputState}/>
      <Book bookName = {this.state.books[0].bookName} writer = {this.state.books[0].writer}
       inputName = {this.changeWithInputState} />
      <Book bookName ={this.state.books[1].bookName} writer = {this.state.books[1].writer}/>
      <Book bookName ={this.state.books[2].bookName} writer = {this.state.books[2].writer}
       change = {this.changeBookState.bind(this, "Another Jungle Book")}    />
       
    </div>
    )
  }
}


export default App;
