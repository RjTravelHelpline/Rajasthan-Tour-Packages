import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="container-fluid mt-5 pt-5 bg-black">
            </div>
            <Breadcrumb breadcrumbKey="historyandculture" />
            <div className="container-fluid bg-black text-white px-0 py-5">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center text-uppercase'>history & culture</h1>
                        <p className='text-center fw-normal'>Delve into the rich tapestry of history, traditions, and cultural experiences from different regions.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
