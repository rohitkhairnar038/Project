import React from 'react'
import "./Services.css"
import  image1 from "../../images/ui.png"
import image2 from "../../images/web.jpg"
import image3 from "../../images/design.png"
import image4 from "../../images/software.jpg"
const Services = () => {
  return (
<>
<div className="sermain">

<div className="sertitle">
    <h3>services</h3>
</div>

<div className="sercontext">
<div className="row">
<div className="col-md-3">

<div className="card" >
  <img src = {image1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">UI developement</h5>
    <p className="card-text">A UI (User Interface) developer specializes in designing and developing the visual.</p>
    <a className="btn btn-primary">Read more</a>
  </div>
</div>

</div>

<div className="col-md-3">
<div className="card" >
  <img src={image2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Web developement</h5>
    <p className="card-text">Web development refers to the creating,building,and maintaining of websites.</p>
    <a className="btn btn-primary">Read more</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div className="card" >
  <img src={image3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Web design</h5>
    <p className="card-text">Web design includes actual creation of planning and architecture. </p>
    <a  className="btn btn-primary">Read more</a>
  </div>
</div>

</div>

<div className="col-md-3">

<div className="card" >
  <img src={image4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Software developement</h5>
    <p className="card-text">Software development is the process programmers use to build computer programs.</p>
    <a  className="btn btn-primary">Read more</a>
  </div>
</div>


</div>

</div>



</div>





</div>







</>


    
  )
}

export default Services;