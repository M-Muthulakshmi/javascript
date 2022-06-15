import './AddBook.css';
import { BookIdValidation, BookTitleValidation, BookDescValidation, AuthorNameValidation, NumberofBooksValidation } from '../Validation';
import axios from 'axios';
import { Component } from 'react';

class AddBook extends Component {
  constructor(props){
    super(props);
    this.state={
      Book:{
        BookId: '',
        BookTitle: '',
        BookDesc: '',
        AuthorName: '',
        NumberofBooks: ''
      },
      getValidation:{
        BookId: '',
        BookTitle: '',
        BookDesc: '',
        AuthorName: '',
        NumberofBooks: ''
      }
    }
  }
 onChangeHandler = (event) => {
  this.setState({
    Book:{
      ...this.state.Book, [event.target.name]: event.target.value
    }
    })
  }
onAddHandler = (event) => {
    event.preventDefault();
    this.setState({
      getValidation:{
        Bookid: !BookIdValidation(this.state.Book.BookId) ? "please provide BookId" : '',
        BookTitle: !BookTitleValidation(this.state.Book.BookTitle) ? "Please provide BookTitle" : '',
        BookDesc: !BookDescValidation(this.state.Book.BookDesc) ? "Please provide BookDescription" : '',
        AuthorName: !AuthorNameValidation(this.state.Book.AuthorName) ? "Please provide AuthorName" : '',
        NumberofBooks: !NumberofBooksValidation(this.state.Book.NumberofBooks) ? "Please provide NumberofBooks" : ''
      } 
    });
    if (this.state.Book.BookId && this.state.Book.BookTitle && this.state.Book.BookDesc && this.state.Book.AuthorName && this.state.Book.NumberofBooks) {
    // let BookDetails = [];
        axios.post('http://localhost:3000/library',{
          BookId:this.state.Book.BookId,
          BookTitle:this.state.Book.BookTitle,
          BookDesc:this.state.Book.BookDesc,
          AuthorName:this.state.Book.AuthorName,
          NumberofBooks:this.state.Book.NumberofBooks
        }).then(()=>{
          document.location.href = '/dashboard';
        }).catch(()=>{
           alert("error");
        })
    }
    // else {
    //   alert("Please add some data");
    // }
  }
  render(){
    return (<div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div class="container">
              <div>
                <div class="col-3">
                </div>
                <div>
                  <form>
                    <div><h3>Add Book</h3></div>
                    <div class="form-group">
                      <label>Book ID:</label>
                      <input onChange={this.onChangeHandler} type="text" class="form-control" name="BookId" id="firstname" />
                    </div>
                    <div class="form-group">
                      <label>Book Title:</label>
                      <input onChange={this.onChangeHandler} type="text" class="form-control" name="BookTitle" id="text" />
                    </div>
                    <div class="form-group">
                      <label>Book Desc:</label>
                      <input  onChange={this.onChangeHandler} type="text" class="form-control" name="BookDesc" id="text" />
                    </div>
                    <div class="form-group">
                      <label>Author Name:</label>
                      <input onChange={this.onChangeHandler} type="text" class="form-control" name="AuthorName" id="text" />
                    </div>
                    <div class="form-group">
                      <label>Number of Book Available:</label>
                      <input onChange={this.onChangeHandler} type="text" class="form-control" name="NumberofBooks" id="text" />
                    </div>
                    <button onClick={this.onAddHandler} type="submit" className="btn btn-warning">Add Book</button>
                  </form>
                </div>
                <div class="col-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
  }
export default AddBook;