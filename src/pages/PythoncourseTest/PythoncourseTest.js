import React from 'react'
import './PythoncourseTest.css'
function PythoncourseTest() {
  return (
    
   <div>
    <div className="heading-test">
      <h1 id="head">Take Test</h1>
      <h2 id="subheading">Please take the test so that we can recommend suitable courses for you</h2>
    </div>
    <form className='testform'>
      <div id="content1">
        <br />
        <label htmlFor="question1" className="larger-question">Question 1</label><br /><br />
        <input type="radio" name="question1" id="definitely" className="larger-option" />
        <span className="option-label">Definitely</span><br />
        <input type="radio" name="question1" id="maybe" className="larger-option" />
        <span className="option-label">Maybe</span><br />
        <input type="radio" name="question1" id="notsure" className="larger-option" />
        <span className="option-label">Not sure</span>
        <br /><br />

        <br />
        <label htmlFor="question2" className="larger-question">Question 2</label><br /><br />
        <input type="radio" name="question2" id="definitely" className="larger-option" />
        <span className="option-label">Definitely</span><br />
        <input type="radio" name="question2" id="maybe" className="larger-option" />
        <span className="option-label">Maybe</span><br />
        <input type="radio" name="question2" id="notsure" className="larger-option" />
        <span className="option-label">Not sure</span>
        <br /><br />

        {/* Repeat the above pattern for other questions */}

      </div>
    </form>
  </div>

  
  )
}

export default PythoncourseTest
