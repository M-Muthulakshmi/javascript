import './About.css';
import image from '../../assests/download.jpg';
const About = () => {
  return (<div class="img-container">
    <img src={image} style={{ width: "1708px", height: "500px" }} />
    <div>
      <h3 class="Library">Welcome to </h3>
      <h3 class="Library1"> Library Management System</h3>
    </div>
    <p>Online library management project in spring and hibernate is complete solution for all the manual problem that we
      face during library management. Mainly there are 2 main actor of the application going to operate the application. <b>1)Admin/Librarian and 2) User/Students.</b> <br />
      Book or Digital books is the main module of the library management system. Book are assets that we are storing in
      the database with some details like name, author name and version and a PDF format. So admin can perform crud
      operation and issued the booked to users
    </p>
  </div>)
}
export default About;