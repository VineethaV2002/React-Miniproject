import React from 'react'
import './AboutPage.css'

function AboutPage() {


    // Features
    const handleFeatureBoxClick = (feature) => {
        // Handle feature box click event
        // Perform the desired action using the selected feature
    };
    return (
        <div>
            {/* Home */}
            <section id="about-home">
                <h2>About OurName /</h2>
            </section>

            <section id="features">
                <h1>Awesome Features</h1>
                <p>Replenish man have thing gathering lights yielding shall you</p>
                <div className="fea-base">
                    <div className="fea-box" onClick={() => handleFeatureBoxClick('Scholarship Facility')}>
                        <i className="fas fa-graduation-cap"></i>
                        <h3>Scholarship Facility</h3>
                        <p>0ne make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>

                    <div className="fea-box" onClick={() => handleFeatureBoxClick('Feature 2')}>
                        <i className="fas fa-graduation-cap"></i>
                        <h3>Feature 2</h3>
                        <p>0ne make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>

                    <div className="fea-box" onClick={() => handleFeatureBoxClick('Feature 3')}>
                        <i className="fas fa-award"></i>
                        <h3>Feature 3</h3>
                        <p>0ne make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
