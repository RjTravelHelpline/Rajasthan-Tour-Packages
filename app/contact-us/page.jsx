import React from 'react'
import { PiBuildingOffice, PiFacebookLogoFill } from "react-icons/pi";
import { BiLogoInstagramAlt, BiLogoSkype } from "react-icons/bi";
import { RiWhatsappFill } from 'react-icons/ri';
import { MdCall, MdContactSupport, MdMail } from 'react-icons/md';
import Bread from '@/components/Bread';
import { IoShareSocial } from 'react-icons/io5';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGlobe } from 'react-icons/fa';

const page = () => {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Contact Us", link: null, active: true },
    ];
    const date = new Date()
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row mt-lg-5 mt-sm-3 text-black d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-8 col-sm-12 px-0">
                            <div className="insider bg-white rounded-3 text-black ">
                                <Bread items={breadcrumbItems} style='bg-white px-0' />
                                <div className="insider bg-white rounded-3 px-3 text-black">
                                    <h1 className='text-capitalize web-title fw-bold'>contact us</h1>
                                    <hr />
                                    <div className='d-flex'>
                                        <span><PiBuildingOffice className='me-2' /></span>
                                        <span>
                                            <h3 className='text-capitalize web-title'>
                                                registered office</h3>
                                            <p>G-18, City Plaza
                                                Bani Park,
                                                Jaipur - 302016 (Rajasthan, India)</p>
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <span>
                                            <IoShareSocial className='me-2' />
                                        </span>
                                        <span><h3 className=' text-capitalize web-title'>social screens</h3>
                                            <div className='d-flex justify-content-start gap-2 flex-wrap py-3'>
                                                <a href='https://www.facebook.com/rajasthantravelhelpline/' target='_blank' rel='noopener noreferrer'>
                                                    <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2 color-tertary'>
                                                        <PiFacebookLogoFill className='fs-2 p-1' />
                                                    </button>
                                                </a>
                                                <a href='https://www.instagram.com/rajasthantravelhelpline/' target='_blank' rel='noopener noreferrer'>
                                                    <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2 color-tertary'><BiLogoInstagramAlt className='fs-2 p-1' />
                                                    </button>
                                                </a>
                                                <a href='skype:rajasthantravel?chat' target='_blank' rel='noopener noreferrer'>
                                                    <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2 color-tertary'><BiLogoSkype className='fs-2 p-1' /></button>
                                                </a>
                                                <a href='https://www.rajasthantourpackages.in' target='_blank' rel='noopener noreferrer'>
                                                    <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2 color-tertary'><FaGlobe className='fs-2 p-1' /></button>
                                                </a>
                                            </div>
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <span>
                                            <BsFillPersonLinesFill className='me-2' />
                                        </span>
                                        <span>
                                            <h3 className=' text-capitalize web-title'>contact options</h3>
                                            <div className='d-flex flex-column gap-2 justify-content-center py-2'>
                                                <a href='tel:+91-9024337038' target='_blank' rel='noopener noreferrer' className='d-flex align-items-center anchor gap-2'>
                                                    <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2 text-black'><MdCall className='fs-2 p-1' />
                                                    </button>
                                                    <span className='text-black text-lowercase'>+91-9024337038</span>
                                                </a>
                                                <a href='https://wa.me/919166555888' target='_blank' rel='noopener noreferrer' className='d-flex align-items-center anchor gap-2'>
                                                    <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2 color-tertary'><RiWhatsappFill className='fs-2 p-1' style={{ color: '#4AB060' }} />
                                                    </button>
                                                    <span className='text-black text-lowercase'>+91-9166555888</span>
                                                </a>
                                                <a href='mailto:jaipurtaxiservice@gmail.com' target='_blank' rel='noopener noreferrer' className='d-flex align-items-center anchor gap-2'>
                                                    <button className='bg-tertary-down rounded-5 d-flex justify-content-center align-items-center p-2 color-tertary text-lowercase'><MdMail className='fs-2 p-1' />
                                                    </button>
                                                    <span className='text-black text-lowercase'>mail@rajasthantravelhelpline.com</span>
                                                </a>
                                            </div></span>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <span>
                                            <MdContactSupport className='me-2' />
                                        </span>
                                        <span>
                                            <h3 className=' text-capitalize web-title'>quick inquiry</h3>
                                            <p className='text-muted text-capitalize'>option will be provided soon</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page