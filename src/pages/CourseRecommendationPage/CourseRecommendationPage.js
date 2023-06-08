import React from 'react'

import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'

function CourseRecommendationPage() {
  return (
    <div>
      <section id="about-home">
            <h2>Courses /</h2>
               
        </section>

        <section id="course">
            <h1>Courses We Recommend For You</h1>
             <p>Replenish man have thing gathering lights yielding shall you </p>
             <div class="course-box">
            
                <div onClick={() => window.location.href = 'http://127.0.0.1:8000/bs/pythoncourse/'} className="courses" >
                   <img src={c3}/>
                        <div class="details">
                           <span>Updated 4/6/23</span>
                           <h6>Python Course</h6>
                             <div class="star">
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                               <i class="fas fa-star"></i>
                                <span>(239)</span>
                             </div> 
                         </div>   
                 </div>
                 <p id="visitlink"><a href="https://www.youtube.com/channel/your-channel" target="_blank">Visit YouTube Channel</a>
                    Control flow is another fundamental concept in Python. It allows you to control the execution of code based
                     on certain conditions. Conditionals, such as if-else statements, are commonly used to make decisions in
                      your program.</p>
                 

                 <div onClick={() => window.location.href = 'http://127.0.0.1:8000/bs/javacourse/'} className="courses" >
                     <img src={c4} />
                          <div class="details">
                             <span>Updated 4/6/23</span>
                             <h6>Java Course</h6>
                               <div class="star">
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                  <span>(239)</span>
                               </div>
                           </div>
                   </div>

                   <div onClick={() => window.location.href = 'http://127.0.0.1:8000/bs/cppcourse/'} className="courses">
                     <img src={c5} />
                          <div class="details">
                             <span>Updated 4/6/23</span>
                             <h6>CPP Course</h6>
                               <div class="star">
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                 <i class="fas fa-star"></i>
                                  <span>(239)</span>
                               </div>
                           </div>
                   </div>


             </div>
     </section> 


    </div>
  )
}

export default CourseRecommendationPage
