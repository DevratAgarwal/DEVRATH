import React from "react";
import ReactStars from "react-rating-stars-component";


const starStyle = {
  size: 40,
  count: 5,
  isHalf: true,
  value: 2,
  color: "white",
  activeColor: "#26a69a",
};

export default function Feedbackform() {

  return (
    <div className="Feedbackform">
     <form>
         <ul>
             <li>
                <h6>
                  <b>Problem Solving: </b> answering correctly, without much help or hints   
                </h6><ReactStars {...starStyle} />
             </li>
             <li>
                <h6>
                  <b>Coding: </b> bug-less, clean, readable, reusable and maintainable code
                </h6><ReactStars {...starStyle} />
             </li>
             <li>
                <h6>
                  <b>Communication: </b> clarity of the answers and line of reasoning   
                </h6><ReactStars {...starStyle} />
             </li>
         </ul>
         <h6><b>Things your peer did well:</b></h6>
         <input type='text' name='good' className="white-text"/>
         <h6><b>Things your peer has to work on::</b></h6>
         <input type='text' name='bad' className="white-text"/>
         <br />
         <br/>
         <input type='submit' className="btn btn-large waves-effect waves-light hoverable accent-3" 
           style={{marginLeft:"3em", background:"#26a69a", textTransform:"capitalize", borderRadius:"8px"}} />
     </form>
    </div>
  );
}
