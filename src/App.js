import React,{Component} from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {
  state = {
    books: [
      { id: 1, bookName :"1984", writer : "George Orwell"},
      { id: 2, bookName :"The Vinci Code ", writer : "Dan Brown"},
      { id: 3, bookName :"The Alchemist", writer : "Paulo Cohelho"}
    ]
    
  }
   
  

  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({
      books: books
    });
  }

  delteBookState = (index)=> {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books
    })
  }


  render() {
     const style = {
       border: "1px solid red",
       borderRadius: "5px",
       backgroundColor: "black",
       color: "white"
     }
     
       //const bookState = this.state.books;
       const books = this.state.books.map((book, index) => {
          return (
            <Book 
            bookName={book.bookName}
            writer = {book.writer}
            delete = {()=>this.delteBookState(index)}
            key= {book.id}
            inputName={(event)=>this.changeWithInputState(event,index)}/>
          )
       })

       //console.log(books)
       
       
      return  (
      <div className="App">
      <h1 style={style}>Book List</h1>     
        {books}
       
    </div>
    )
  }
}


export default App;
