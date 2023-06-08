import React from 'react'

function Dashboard() {
    return (
        <div>
            <section id="about-home">
                <h2>Dashboard /</h2>
            </section>

            <section class="main-dash">


                <h1>RoadMap</h1>
                <div class="main-skills-dash">
                    <div class="card">
                        <i class="fas fa-laptop-code"></i>
                        <h3>Web developemt</h3>
                        <p>Join Over 1 million Students.</p>
                        <button>Get Started</button>
                    </div>
                    <div class="card">
                        <i class="fab fa-wordpress"></i>
                        <h3>WordPress</h3>
                        <p>Join Over 3 million Students.</p>
                        <button>Get Started</button>
                    </div>
                    <div class="card">
                        <i class="fas fa-palette"></i>
                        <h3>graphic design</h3>
                        <p>Join Over 2 million Students.</p>
                        <button>Get Started</button>
                    </div>
                    <div class="card">
                        <i class="fab fa-app-store-ios"></i>
                        <h3>IOS dev</h3>
                        <p>Join Over 1 million Students.</p>
                        <button>Get Started</button>
                    </div>
                </div>

                <section class="main-course-dash">
                    {/* // display:flex, flex-direction:row, grid:3; */}
                    <h1>My Courses</h1>
                    <div class="course-box-dash">
                        {/* // flex aakan ullath */}
                        <ul>
                            <li><a href="#section1" class="category" data-target="inprogress">In Progress</a></li>
                            <li><a href="#section2" class="category" data-target="recommended">Courses Recommended</a></li>
                            <li><a href="#section3" class="category" data-target="finished">Finished</a></li>
                        </ul>

                        <div class="course">
                            <div class="box inprogress">
                                <h3>HTML</h3>
                                <p>80% - Progress</p>
                                <button>Continue</button>
                                <i class="fab fa-html5 html"></i>
                            </div>

                            <div class="box inprogress">
                                <h3>CSS</h3>
                                <p>50% - Progress</p>
                                <button>Continue</button>
                                <i class="fab fa-css3-alt css"></i>
                            </div>

                            <div class="box inprogress">
                                <h3>JavaScript</h3>
                                <p>30% - Progress</p>
                                <button>Continue</button>
                                <i class="fab fa-js-square js"></i>
                            </div>

                            <div class="box recommended">
                                <h3>Python</h3>
                                <p>10% - Progress</p>
                                <button>Continue</button>
                                <i class="fab fa-python python"></i>
                            </div>

                            <div class="box recommended">
                                <h3>Java</h3>
                                <p>70% - Progress</p>
                                <button>Continue</button>
                                <i class="fab fa-java java"></i>
                            </div>

                            <div class="box finished">
                                <h3>C#</h3>
                                <p>100% - Completed</p>
                                <button>Review</button>
                                <i class="fab fa-windows windows"></i>
                            </div>
                        </div>
                    </div>
                </section>



            </section>
        </div>
    )
}

export default Dashboard
