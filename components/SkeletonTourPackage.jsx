'use client'
import { Card } from 'react-bootstrap';

const SkeletonTourPackage = () => {
    return (


        <div className="col-12 col-sm-12 col-md-8 col-lg-4 mb-4 d-flex justify-content-start px-2">
            <Card className="card bg-transparent rounded-4 overflow-hidden w-100">
                <div className="card-image-container skeleton skeleton-image"></div>
                <div className="row card-content d-flex align-items-center justify-content-center">
                    <div className="w-100 d-flex justify-content-between align-items-start pt-0 pb-0">
                        <div className="skeleton skeleton-text skeleton-price">

                        </div>
                        <div className="skeleton skeleton-text skeleton-duration">

                        </div>
                    </div>
                    <div className="w-100  d-flex justify-content-center flex-column align-items-start pt-0">
                        <div className="skeleton skeleton-text skeleton-title"></div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SkeletonTourPackage;
