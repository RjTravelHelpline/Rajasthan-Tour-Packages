import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="container-fluid mt-5 pt-5 bg-black">
            </div>
            <Breadcrumb breadcrumbKey="food" />
            <div className="container-fluid bg-black text-white px-0 py-5">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center text-uppercase'>food</h1>
                        <p className='text-center fw-normal'>Discover delectable recipes, culinary tips, and food culture around the globe.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
