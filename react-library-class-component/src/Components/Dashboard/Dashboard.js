import './Dashboard.css';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
     index:-1,
     search:'',
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
  
  componentDidMount(){
    axios.get('http://localhost:3000/library').then((response)=>{
        console.log(response.data)
      this.setState({list:response.data});
    }).catch((error)=>{
      console.log(error);
    }) 
  }

  onDeleteHandler=(index)=>{
    let BookDetails = [...this.state.list];
    let id = BookDetails[index].id;
    axios.delete('http://localhost:3000/library/'+id).then((response)=>{
    BookDetails.splice(index,1);
    this.setState({list:BookDetails});
  }).catch(()=>{
  })
  }
 
  onEditHandler=(index)=>{
    this.setState({Book:{
        BookId:this.state.list[index].BookId,
        BookTitle:this.state.list[index].BookTitle,
        BookDesc:this.state.list[index].BookDesc,
        AuthorName:this.state.list[index].AuthorName,
        NumberofBooks:this.state.list[index].NumberofBooks
    },
    index:index
        })
     }
     
onChangeHandler=(event)=>{
  this.setState({Book:{
    ...this.state.Book,[event.target.name]:event.target.value
  }  })
    }

 onChangeSearchHandler=(event)=>{

  this.setState({search:event.target.value});

}

onEditSubmitHandler=(event)=>{
  event.preventDefault();
  let BookDetails =[...this.state.list];
  let id= BookDetails[this.state.index].id;
  axios.patch('http://localhost:3000/library/'+id,{
      BookId:this.state.Book.BookId,
      BookTitle:this.state.Book.BookTitle,
      BookDesc:this.state.Book.BookDesc,
      AuthorName:this.state.Book.AuthorName,
      NumberofBooks:this.state.Book.NumberofBooks
  }).then(()=>{
    this.setState({list:BookDetails});
    BookDetails[this.state.index].BookId = this.state.Book.BookId;
    BookDetails[this.state.index].BookDetails=this.state.Book.BookDetails;
    BookDetails[this.state.index].BookTitle =this.state.Book.BookTitle;
    BookDetails[this.state.index].BookDes = this.state.Book.BookDes;
    BookDetails[this.state.index].AuthorName = this.state.Book.AuthorName;
    BookDetails[this.state.index].NumberofBooks = this.state.Book.NumberofBooks;
  }).catch(()=>{ 
  })
}

searchFilter=(event)=>{
  event.preventDefault();
  let details = this.state.list.filter((obj)=>{
    return obj.BookId === this.state.search;
  })
  this.setState({list:details});
}

resetFilter=(event)=>{
    event.preventDefault();
    this.setState({search:''});
    if(JSON.parse(sessionStorage.getItem('BookDetails')) && JSON.parse(sessionStorage.getItem('BookDetails')).length>0){
      this.setState({list:JSON.parse(sessionStorage.getItem('BookDetails'))})
   }
   axios.get('http://localhost:3000/library').then((response) => { 
    console.log(response); 
    this.setState({list:response.data});
   }).catch((error) => { console.log(error); })
}

render(){
    return (<div className="container-fluid">
    <div className="row">
      <div className="col-3">
      <form>        
                        <div className="form-group">
                          <br/>
                          <label><b>Book Id</b></label>
                          <input type="text" value={this.state.getSearch} onChange={this.onChangeSearchHandler} className="form-control" id="bookname" name="searchBookName" placeholder="Enter Book Name"/>
                         {/* <input type="text" onChange={this.onChangeSearchHandler} className="form-control" id="BookId" name="searchBookId" placeholder="Enter BookId"/> */}
                        </div>       
                        <button onClick={this.searchFilter} type="submit" className="btn btn-warning">Search</button> &nbsp;&nbsp;
                      <button onClick={this.resetFilter}type="reset" className="btn btn-warning">Reset</button>
                      </form>
                </div>
                <div className="col-10"></div>
                <div className="col-2">
                <button type="submit" className="btn btn-warning"><Link to="/AddBook">Add Book</Link></button>
                </div>
              </div>
   <br/>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">BookId</th>
              <th scope="col">BookTitle</th>
              <th scope="col">BookDesc</th>
              <th scope="col">AuthorName</th>
              <th scope="col">NumberofBooks</th>
              <th scope="col">Edit</th>
             <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.list.map((obj,index)=>{
                           return(<tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{obj.BookId}</td>
                            <td>{obj.BookTitle}</td>
                            <td>{obj.BookDesc}</td>
                            <td>{obj.AuthorName}</td>
                            <td>{obj.NumberofBooks}</td>
                            <td><i onClick={()=>this.onEditHandler(index)} data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i onClick={()=>this.onDeleteHandler(index)} className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>

                           )
                        })
                        } 

          </tbody>
        </table>
      </div>
      <div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">ADD BOOK</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
                  <div className="form-group">
                    <label><b>Book ID:</b></label>
                    <input value={this.state.Book.BookId} onChange={this.onChangeHandler} type="text" className="form-control" name="BookId" id="text" />
                    {this.state.getValidation.BookId && <div className="alert alert-danger" role="alert">
                      {this.state.getValidation.BookId}
                    </div>}
                  </div>
                  <div className="form-group">
                    <label><b>Book Title:</b></label>
                    <input value={this.state.Book.BookTitle} onChange={this.onChangeHandler} type="text" className="form-control" name="BookTitle" id="text" />
                    {this.state.getValidation.BookTitle && <div className="alert alert-danger" role="alert">
                      {this.state.getValidation.BookTitle}
                    </div>}
                  </div>
                  <div className="form-group">
                    <label><b>Book Desc:</b></label>
                    <input value={this.state.Book.BookDesc} onChange={this.onChangeHandler} type="text" className="form-control" name="BookDesc" id="text" />
                    {this.state.getValidation.BookDesc && <div className="alert alert-danger" role="alert">
                      {this.state.getValidation.BookDesc}
                    </div>}
                  </div>
                  <div className="form-group">
                    <label><b>Author Name:</b></label>
                    <input value={this.state.Book.AuthorName} onChange={this.onChangeHandler} type="text" className="form-control" name="AuthorName" id="text" />
                    {this.state.getValidation.AuthorName && <div className="alert alert-danger" role="alert">
                      {this.state.getValidation.AuthorName}
                    </div>}
                  </div>

                  <div className="form-group">
                    <label><b>Number of Book Available:</b></label>
                    <input value={this.state.Book.NumberofBooks} onChange={this.onChangeHandler} type="text" className="form-control" name="NumberofBooks" id="text" />
                    {this.state.getValidation.NumberofBooks && <div className="alert alert-danger" role="alert">
                      {this.state.getValidation.NumberofBooks}
                    </div>}
                  </div>
                  <div><button data-dismiss="modal" onClick={this.onEditSubmitHandler} type="submit" className="btn btn-warning">Add Book</button></div>
                </form>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}
}
export default Dashboard;



