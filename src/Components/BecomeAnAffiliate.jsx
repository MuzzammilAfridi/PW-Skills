import React from 'react'
import Nav from './Nav'
import AffiliateHero from './AffiliateHero'
import Benifits from './Benifits'
import FreqAskQus from './FreqAskQus'
import Footer from './Footer'

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

    const freqAskQus =[
      {
        qus:'1. How to start this affiliate program?'
      },
      {
        qus:'2. Where can I promote affiliate link?'
      },
      {
        qus:'3. Which products of PW Skills can I earn a referral commission from?'
      },
      {
        qus:'4. Will I get referral earnings even if I make only 1 sale?'
        
      },
      {
        qus:'5. Is there any maximum limit for referral earning?'
        
      },
      {
        qus:'6. If someone enrolls for a yearly subscription will I get the commission every year?'
        
      },
      {
        qus:'7. How do I earn a bonus?'
        
      },
    ]

  return (
    <div>
        <Nav navData={navData}/>
        <AffiliateHero/>
        <Benifits/>
        <FreqAskQus freqAskQus={freqAskQus}/>
        <Footer/>
    </div>
  )
}

export default BecomeAnAffiliate