import React from 'react'
import c4 from '../../assets/c4.jpg'


function Cppcoursepage() {
    return (
    <div>
      <section id="about-home">
        <h2>Enroll in Our Course and Skill Up</h2>
      </section>

      <section id="course-inner">
        <div className='leftside'>
        <div className="overview">
          <img className="course-img" src={c4} alt="" />
          <div className="course-head">
            <div className="c-name">
              <h2>Python Course</h2>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>
                The CPP course is designed to introduce you to the fundamentals of Python programming.
                This course will help you develop your skills and understanding of Python.
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div>
        <h3>Course Overview</h3>
        <p>
          The Python course is designed to provide a comprehensive introduction to the Python programming language.
          Starting from the basics, the course covers essential concepts and syntax to help you become proficient in Python.
          <br /><br />
          The course delves into fundamental topics such as variables, data types, and type conversion, as well as operators and expressions.
          You will also explore control structures including conditional statements (if-else, switch-case) and looping statements (for, while),
          enabling you to effectively control the flow of your programs. <br /><br />
          Additionally, you will learn how to work with strings and perform input and output operations.
          The course covers functions extensively, teaching you how to define and call functions, work with parameters and return values,
          and manage variable scope.
        </p>
        </div>
        <hr />
        
        <div>
        <h3>What You'll Learn</h3>
        <div className="learn">
          <p><i className="far fa-check-circle"></i>Python from scratch - beginner to advanced</p>
          <p><i className="far fa-check-circle"></i>Everything you need to become a Python expert and apply for Python jobs</p>
          <p><i className="far fa-check-circle"></i>All about variables, functions, objects, and arrays</p>
          <p><i className="far fa-check-circle"></i>All core features and concepts you need to know in modern Python development</p>
          <p><i className="far fa-check-circle"></i>Project-driven learning with plenty of examples</p>
          <p><i className="far fa-check-circle"></i>Object-oriented programming</p>
        </div>
        </div>
        </div>
        <div className="enroll">
          <h3>This Course Includes:</h3>
          <p><i className="fa fa-solid fa-video"></i>52 hours of video</p>
          <p><i className="fa fa-newspaper"></i>75 articles</p>
          <p><i className="fa fa-cloud-download"></i>Downloadable resources</p>
          <p><i className="fa fa-thumbs-up"></i>Full lifetime access</p>
          <p><i className="fa fa-mobile"></i>Access on mobile and TV</p>
          <p><i className="fa fa-paperclip"></i>Assignments</p>
          <p><i className="fa fa-trophy"></i>Certificate of completion</p>
          <div className="enroll-btn">
            <a className="blue" href="/signuppage">Take Test</a>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Cppcoursepage
