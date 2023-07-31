import React from 'react'
import "./Intro.css"
import img1 from "../../images/mpic.png"


const intro = () => {
  return (
    <>
    <div className="i">
        <div className="il">
            <div className="il-wraper">
                <h2 className='myintro'>Hi, my name is</h2>
                <h3 className='myname'>Rohit Khairnar</h3>
                <div className="i-title">
                  <div className="i-title-wraper">
                    <div className="i-title-items">Frontend Developer </div>
                    <div className="i-title-items">Web Developer</div>
                    <div className="i-title-items">UI/UX Designer</div>
                    <div className="i-title-items">Content Creater</div>
                  </div>
                </div>
            <div className="i-desc">
              I design and develope a UI for websites of
              all sizes,specialising in creating modern and stylish web services. 
            </div>
           
          
            </div>
            </div>
        <div className="ir">
         <div className="i-bg1"></div>
        <img src={img1} alt=''  className='i-img'></img>
        
        </div>
    </div>

    </>

  )
}

export default intro