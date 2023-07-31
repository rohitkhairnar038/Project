import React from 'react'
import "./Contact.css"
import imgphone from "../../images/phone.jpg"
import imgmail from "../../images/email.png"
import imghome from "../../images/home.jpg"
const Contact = () => {
  return (
    <>
    
    <div className="cont">
    <div className="conttitle">
        <h3>contact me</h3>
    </div>
    <div className="contmain">
     
     <div className="cont-left">

<div className="contheading"><h5>Let me contact here</h5></div>

<div className="continfo">

<div className="cont1">
<img src={imgphone} alt=''  className='icon'/>
     +91 9545350456
</div>

<div className="cont1">
<img src={imgmail} alt=''  className='icon'/>
   rohitkhairnar038@gmail.com

</div>

<div className="cont1">
<img src={imghome} alt=''  className='icon'/>
   At Post Jehur Tq kannad Dist Sambhaji Nagar
</div>

</div>

     </div>
      <div className="cont-right">

    <form>
     <input type='text' placeholder='name' className='input1' />
     <input type='text' placeholder='subject'  className='input1'/>
     <input type='text' placeholder='email'   className='input1'/>
     <textarea rows="5" placeholder='message' className='input2'/>
     <button type="button"  id='btn1' className="btn btn-primary">Submit</button>
    </form>


      </div>



    </div>


    </div>
    
    
    </>
  )
}

export default Contact;