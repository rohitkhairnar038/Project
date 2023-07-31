import React from "react";
import "./Skills.css"
import img2 from "../../images/html.jpg"
import img3 from "../../images/css.png"
import img4 from "../../images/Javascript.jpg"
import img5 from "../../images/react.jpg"
const Skills = () => {
  return (
    <>
    <div className="s-main">
      <div className="sh">
        <h3>Skills</h3>
      </div>
    <div className="s" >

<div className="s-left">
  <div className="row">
<div className="col-md-3">

<div class="card h=100" >
  <img src={img2}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">HTML</h5>
    <p className="card-text">HTML stands for hypertext markup language used in web browser.  </p>
    <a className="btn btn-primary">Read more</a>
  </div>
</div>
</div>



  <div className="col-md-3">
  <div className="card h=100" >
  <img src={img3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">CSS</h5>
    <p className="card-text">Cascading Style Sheets, fondly referred to as CSS, is a simple design language.</p>
    <a  className="btn btn-primary">Read more</a>
  </div>
</div>
</div>



<div className="col-md-3">
<div className="card   h=100" >
  <img src={img4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Javascript</h5>
    <p className="card-text">JavaScript language used for client side and server side programming.</p>
    <a className="btn btn-primary">Read more</a>
  </div>
</div>
</div>


<div className="col-md-3">


<div className="card h=100" >
  <img src={img5} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">React js</h5>
    <p className="card-text">React is a free and open-source front-end JavaScript library.</p>
    <a class="btn btn-primary">Read more</a>
  </div>
</div>






</div>










  </div>
  </div>
</div>
</div>
  









    
    
  
    
    </>

  )
}

export default Skills;