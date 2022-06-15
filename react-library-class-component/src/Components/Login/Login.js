import './Login.css';
import book from './book.jpg';
import { usernameValidation, passwordValidation } from '../Validation';
import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getForm: {
        username: '',
        password: ''
      },
      getValidation: {
        username: '',
        password: ''
      }
    }
  }
  onChangeHandler = (event) => {
    this.setState({
      getForm: {
        ...this.state.getForm,
        [event.target.name]: event.target.value
      }
    })
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      getValidation: {
        username: !usernameValidation(this.state.getForm.username) ? "Please provide the username" : '',
        password: !passwordValidation(this.state.getForm.password) ? "Please provide the password" : ''
      }
    });
    if (usernameValidation(this.state.getForm.username) && passwordValidation(this.state.getForm.password)) {
      alert("success");
      let username = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if (username === this.state.getForm.username && password === this.state.getForm.password) {
        document.location.href = "/dashboard";
      }
      else {
        this.setState({
          getValidation: {
            username: 'no match found',
            password: 'no match found'
          }
        });
      }
    }
  }
  render() {
    return (<div>
      <div className="container pic">
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-4">
            <form className="heading">
              <h1 className="login-label">LIBRARY</h1>
              <h3 className="login-label"> MANAGEMENT SYSTEM</h3>
              <img className='img-book' src={book} width={50} Height={50} />
              <div className="form-group">
                <br />
                <table>
                  <tr></tr>
                  <td><label className="login-label">User Name</label></td>
                  <td><input type="text" onChange={this.onChangeHandler} className="form-control" id="UserName" name="username" placeholder="User Name" />   </td>
                  {this.state.getValidation.username && <div className="alert alert-danger" role="alert">
                    {this.state.getValidation.username}
                  </div>}
                  <br />
                  <br />
                  <tr></tr>
                  <td><label className="login-label">Password</label></td>
                  <td><input type="password" onChange={this.onChangeHandler} className="form-control" id="password" name="password" placeholder="Password" /></td>
                  {this.state.getValidation.password && <div class="alert alert-danger" role="alert">
                    {this.state.getValidation.password}
                  </div>}
                </table>
              </div>
              <br />
              <br />
              <button onClick={this.onSubmitHandler} type="submit" class="btn btn-warning">Submit</button>
            </form>
          </div>
          <div className="col-4">
          </div>
        </div>
      </div>
    </div>)
  }
}
export default Login;