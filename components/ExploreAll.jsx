import Link from "next/link"
import { GoArrowRight } from "react-icons/go"


export const ExploreAll = ({ href, text }) => {
    return (
        <>
            <div className="explore-button-container row d-flex justify-content-center align-items-center mt-2 px-4 ">
                <Link href={href} className='d-flex w-auto more-btn align-items-center justify-content-center gap-2 p-2 px-3 fw-bold position-absolute bottom-0 bg-white text-black'>
                    {text} <GoArrowRight />
                </Link>
            </div>
        </>
    )
}
