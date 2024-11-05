import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="container-fluid mt-4 pt-5 bg-black">
            </div>
            <Breadcrumb breadcrumbKey="fairandfestivals" />
            <div className="container-fluid bg-black text-white px-0 py-5">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center text-uppercase'>fair & festivals</h1>
                        <p className='text-center fw-normal'>Celebrate vibrant fairs and festivals showcasing diverse cultures, traditions, and unforgettable experiences.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
