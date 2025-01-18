import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import { page_titles } from './data'

const Page = () => {
    return (
        <>
            <HeroBanner backgroundImage='' slides={page_titles} />
        </>
    )
}

export default Page