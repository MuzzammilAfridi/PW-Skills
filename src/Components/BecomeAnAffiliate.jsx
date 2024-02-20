import React from 'react'
import Nav from './Nav'
import AffiliateHero from './AffiliateHero'
import Benifits from './Benifits'

const BecomeAnAffiliate = () => {
 
    const navData = [
        {
        first:"Courses",
        second:"PW Skills Lab",
        third:"Job Portal",
        forth:"Become an affiliate",
        fifth:"Hall of Fame"
      }
    ]

  return (
    <div>
        <Nav navData={navData}/>
        <AffiliateHero/>
        <Benifits/>
    </div>
  )
}

export default BecomeAnAffiliate