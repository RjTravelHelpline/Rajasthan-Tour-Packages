import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="container-fluid mt-5 pt-5 bg-black">
            </div>
            <Breadcrumb breadcrumbKey="tourandtravels" />
            <div className="container-fluid bg-black text-white px-0 py-5">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center text-uppercase'>tour & travels</h1>
                        <p className='text-center fw-normal'>Embark on unforgettable journeys with travel guides, tips from adventure seekers.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
