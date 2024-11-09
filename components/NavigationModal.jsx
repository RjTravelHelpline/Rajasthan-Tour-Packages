"use client"
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FaSearchLocation } from 'react-icons/fa'
import SideNavigation from './SideNavigation';
import { IoMdClose } from 'react-icons/io';

const NavigationModal = ({ place, sections }) => {

    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    return (
        <>
            <Modal size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)} >
                <Modal.Header style={{ width: '100%', background: 'var(--color-tertary-down)' }}>
                    <Modal.Title style={{ width: '100%' }}><h4 className="text-capitalize fw-normal py-1 text-black text-center mb-0">Explore <span className="fw-bold color-tertary">{place}
                    </span></h4></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: '100%', border: '0' }}>
                    {/* Sidebar Navigation */}
                    <div className="side-nav px-0 mt-3 w-100 d-flex justify-content-center align-items-center">
                        <SideNavigation sections={sections} offset={80} onClose={handleClose} containerStyle="flex-row flex-wrap gap-2 justify-content-center align-items-center" childStyle='rounded-4 d-flex justify-content-center align-items-center' />
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center align-items-center w-100 border-0 model-close pt-0">
                    <button
                        className="bg-black d-flex justify-content-center align-items-center p-2 border-0 rounded-5"
                        onClick={handleClose}
                    >
                        <IoMdClose />
                    </button>
                </Modal.Footer>
            </Modal>
            <button onClick={handleShow} style={{ position: "fixed", bottom: '16px', left: '50%', translate: '-50%', margin: 'auto', width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999, boxShadow: '0 0 0 4px var(--color-tertary-down)' }} className="bg-tertary rounded-5 text-white border-0" >
                <FaSearchLocation className="text-black me-2" /> Explore
            </button>
        </>
    )
}

export default NavigationModal
