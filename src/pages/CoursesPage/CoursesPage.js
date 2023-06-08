import React from 'react'
import './CoursesPage.css'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'

function CoursesPage() {
  return (
    <div>

      {/* <!-- Navigation --> */}

      <section id="about-home-coursepage">
        <h2>Courses /</h2>

      </section>
      {/* <section id="about-container">
                    <div class="about-img">
                       <img src="images/a.png" alt="">
                    </div>--> */}

      <section id="course-coursepage">
        <h1>Our Courses</h1>
        <p>Replenish man have thing gathering lights yielding shall you </p>
        <div class="course-box-coursepage">

          <div onClick={() => window.location.href = 'http://localhost:3000/pythoncoursepage/'} className="courses">
            <img src={c3} />
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

          <div onClick={() => window.location.href = 'http://localhost:3000/javacoursepage/'} className="courses" >
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

          <div onClick={() => window.location.href = 'http://localhost:3000/cppcoursepage/'} className="courses">
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

export default CoursesPage
