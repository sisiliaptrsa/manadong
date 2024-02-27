import React from 'react'

const About = () => {
return (
    <div className='about-section-container' id='about'>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About Us</p>
            <div className='dividerLine'/>
            <div className='about-section-image-container'>
                <img className='about-section-image' src={'/Assets/banner.png'} alt='' />
                <div className='about-section-text-container'>
                    <p className='about-company-text'>About Our Company</p>
                    <p className='about-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default About