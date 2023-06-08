import React from 'react'
import './Homepage.css'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'

function Homepage() {
    return (
        <>
            <section id="home">
                <h2>Enhance Your Future With Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque
                    suscipit aut ullam quisquam laboriosam eum nesciunt quos, molestias optio tenetur
                    nobis vel sint quis veniam molestiae nemo deserunt autem!</p>
                <div className="btn">
                    <a className="blue" href="#">Learn More</a>
                    <a className="yellow" href="#">Visit Courses</a>
                </div>
            </section>

            <section id="features">
                <h1>Awesome Features</h1>
                <p>Replenish man have thing gathering lights yielding shall you </p>
                <div className="fea-base">

                    <div className="fea-box">
                        <i className="fas fa-graduation-cap"></i>
                        <h3>Scholarship Facility</h3>
                        <p>0ne make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>

                    <div className="fea-box">
                        <i className="fas fa-graduation-cap"></i>
                        <h3>Feature 2</h3>
                        <p>0ne make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>

                    <div className="fea-box">
                        <i className="fas fa-award"></i>
                        <h3>Feature 3</h3>
                        <p>0ne make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>

                </div>
            </section>
            <section id="course">
                <h1>Our Courses</h1>
                <p>Replenish man have thing gathering lights yielding shall you </p>
                <div className="course-box">

                    <div onClick={() => window.location.href = 'http://localhost:3000/pythoncoursepage/'} className="courses">
                        <img src={c3} />
                        <div className="details">
                            <span>Updated 4/6/23</span>
                            <h6>Python Course</h6>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>(239)</span>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => window.location.href = 'http://localhost:3000/javacoursepage/'} className="courses">
                        <img src={c4} />
                        <div className="details">
                            <span>Updated 4/6/23</span>
                            <h6>Java Course</h6>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>(239)</span>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => window.location.href = 'http://localhost:3000/cppcoursepage/'} className="courses">
                        <img src={c5} />
                        <div className="details">
                            <span>Updated 4/6/23</span>
                            <h6>CPP Course</h6>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>(239)</span>
                            </div>
                        </div>
                    </div>


                </div>
            </section> I
        </>
    )
}

export default Homepage
