import React from 'react'
import BannerImg from '../../assets/Banner.png'

const HeroSection = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div style={{ marginTop: '25%' }} className=''>
                    <span className='fs-1 text-black opacity-75 '>Fair price ride</span >
                    <h1 style={{ fontSize: '70px' }} className='fw-bold'>Rent our <span style={{ color: '#ef8d21' }} className='fw-bold opac'>Scooter</span></h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the <br /> 1500s,  when an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. </p>
                </div>
                <div className='mt-5'>
                    <img className='img-fluid' src={BannerImg} alt="bannerimg" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
