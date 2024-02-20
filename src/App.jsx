import { useState } from 'react'
import './App.css'
import Cource from './Components/Cource'
import PWSkillsLab from './Components/PWSkillsLab'
import JobPortal from './Components/JobPortal'
import BecomeAnAffiliate from './Components/BecomeAnAffiliate'

function App() {
  const showCaseData = [
    {
      id:'1',
      img: './src/assets/Images/statistics1.png',
      percentage: '55%',
      detail: 'Average Salary Hike'
    },
    {
      id:'2',
      img: './src/assets/Images/statistics2.png',
      percentage: '600+',
      detail: 'Different Courses'
    },
    {
      id:'3',
      img: './src/assets/Images/statistics3.png',
      percentage: '12000+',
      detail: 'Career Transitions'
    },

  ]

  const coursesData = [
    {
      id:'1',
      img:'./src/assets/Images/decode.png',
      batchName:'Decode Python with DSA Course',
      faculties: 'Vishwa Mohan and 1 more',
      startingDate: 'Starts on 10 Mar 2024',

    },
    {
      id:'2',
      img:'./src/assets/Images/java-with-dsa.png',
      batchName:'Decode Java with DSA Course',
      faculties: 'Vishwa Mohan and 1 more',
      startingDate: 'Starts on 10 Mar 2024',

    },
    {
      id:'3',
      img:'./src/assets/Images/C++-with-dsa.png',
      batchName:'Decode C++ with DSA Course',
      faculties: 'Vishwa Mohan and 1 more',
      startingDate: 'Starts on 10 Mar 2024',

    },
  ]

  const ecosystemData =[
    {
      id:'1',
      img: './src/assets/Images/products-icon1.png',
      title: 'PW Skills Lab',
      desc: 'Buying a new PC is no longer required, Access unlimited computing power!',

    },
    {
      id:'2',
      img: './src/assets/Images/products-icon2.png',
      title: 'Experience Portal',
      desc: 'Self-paced portal prioritizes hands-on training with 570+ internship projects',

    },
    {
      id:'3',
      img: './src/assets/Images/products-icon3.png',
      title: 'Hall Of Fame',
      desc: 'Our student placements and 100K+ career transitions speak volumes.',

    },
    {
      id:'4',
      img: './src/assets/Images/products-icon4.png',
      title: 'Job Portal',
      desc: 'Use exceptional templates for a stand-out resume minus the sign up process.!',

    },
    {
      id:'5',
      img: './src/assets/Images/products-icon5.png',
      title: 'Become an affiliate',
      desc: 'Explore affiliate marketing opportunities and attain financial freedom.',

    },

  ]

  const OurAchivementData = [
    {
      img: './src/assets/Images/wipro.png',
    },
    {
      img: './src/assets/Images/tata.png',
     
    },
    {
      img: './src/assets/Images/verizo.png',

    },
    {
      img: './src/assets/Images/Swigy.png',

    },
    {
      img: './src/assets/Images/unac.png',

    },
  ]

  const headerData = [
    {
      first:'Cources',
   
      second:'PW Skils Lab',
   
      third:'Job Portal',
    
      fourth:'Experence Portal',
    
      fifth:'Become an Affliate',
    
      sixth:'Hall of Fame',
     
      
    }
  ]

  const dhinchakLabData = [
    {
      img:'./src/assets/Images/c.jpg',
      name:'C'
    },
    {
      img:'./src/assets/Images/c++.jpg',
      name:'C++'
    },
    {
      img:'./src/assets/Images/go.jpg',
      name:'Go'
    },
    {
      img:'./src/assets/Images/java.jpg',
      name:'Java'
    },
    {
      img:'./src/assets/Images/python.jpg',
      name:'Python'
    },
    {
      img:'./src/assets/Images/swiftPro.jpg',
      name:'Swift'
    },
    {
      img:'./src/assets/Images/julia.jpg',
      name:'Julia'
    },
    {
      img:'./src/assets/Images/kotlin.jpg',
      name:'Kotlin'
    },
    {
      img:'./src/assets/Images/mongo+node.jpg',
      name:'MongoDB + Node.js'
    },
    {
      img:'./src/assets/Images/mongo+python.jpg',
      name:'MongoDB + Python'
    },
    {
      img:'./src/assets/Images/mysql.jpg',
      name:'MySQL'
    },
    {
      img:'./src/assets/Images/mysql.jpg',
      name:'MySQL+Node'
    },
    {
      img:'./src/assets/Images/Ruby.jpg',
      name:'Ruby'
    },
    {
      img:'./src/assets/Images/scala.jpg',
      name:'Scala'
    },
    {
      img:'./src/assets/Images/tpejs.jpg',
      name:'Typescript'
    },
  ]

  const navData = [
    {

      first:"Home",
      second:"Seaech Jobs",
      third:"Applied Jobs",
      forth:"Mock Interview",
    }
  ]

  const companies = [
    {
      img:"./src/assets/Images/affine.png"
    },
    {
      img:"./src/assets/Images/tataiq.png"
    },
    {
      img:"./src/assets/Images/cohesity.png"
    },
    {
      img:"./src/assets/Images/boeing.png"
    },
    {
      img:"./src/assets/Images/bun&bradstreet.png"
    },
    {
      img:"./src/assets/Images/eminds.png"
    },
    {
      img:"./src/assets/Images/freshworks.png"
    },
    {
      img:"./src/assets/Images/geekyants.png"
    },
    {
      img:"./src/assets/Images/greendeck.png"
    },
    {
      img:"./src/assets/Images/informatica.png"
    },
    {
      img:"./src/assets/Images/innova.png"
    },
    {
      img:"./src/assets/Images/kpmg.png"
    },
    {
      img:"./src/assets/Images/learnyst.png"
    },
    {
      img:"./src/assets/Images/leventm.png"
    },
    {
      img:"./src/assets/Images/livspace.png"
    },
    {
      img:"./src/assets/Images/mindtree.png"
    },
    {
      img:"./src/assets/Images/musigma.png"
    },
    {
      img:"./src/assets/Images/odessa.png"
    },
    {
      img:"./src/assets/Images/redbus.png"
    },
    {
      img:"./src/assets/Images/robosoft.png"
    },
    {
      img:"./src/assets/Images/thoughtworks.png"
    },
    {
      img:"./src/assets/Images/wellnesys.png"
    },
    {
      img:"./src/assets/Images/wipro.png"
    },
    {
      img:"./src/assets/Images/wissen.png"
    },
    {
      img:"./src/assets/Images/zensar.png"
    },
  ]

  const jobCat = [
    {
      name:"Data Science"
    },
    {
      name:"Data Analyst"
    },
    {
      name:"Data Engineer"
    },
    {
      name:"Frontend Engineer"
    },
    {
      name:"Business Analyst"
    },
    {
      name:"Block Chain Developer"
    },
    {
      name:"QA Tester"
    },
    {
      name:"Javascript Developer"
    },
    {
      name:"System Engineer"
    },
    {
      name:"Cyber Security Engineer"
    },
    {
      name:"Big data Engineer"
    },
    {
      name:"Cloud Engineer"
    },
    {
      name:"Human Resources"
    },
    {
      name:"Finance Executive"
    },
    {
      name:"Sales"
    },
    
  ]

  const jobData =[
    {
      jobTitle:'Data Analytics',
      companyName:'TATA iQ',
      location:'New Delhi',
      experience:'0-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Digital Marketing Executive',
      companyName:'Agumentik Group of Companies',
      location:'Bangalore / Bengaluru',
      experience:'0-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'FullStack Developer',
      companyName:'Agumentik Group of Companies',
      location:'Bangalore / Bengaluru',
      experience:'0-1 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Java Developer',
      companyName:'Effigo',
      location:'Hyderabad',
      experience:'2-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Java Micro services',
      companyName:'Effigo',
      location:'Hyderabad',
      experience:'2-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Java Micro Services-Lead',
      companyName:'Effigo',
      location:'Hyderabad',
      experience:'6-8 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
   
  ]

  // staircase data

   const staircaseData =[
    {
      img:"./src/assets/Images/user_default_image.png",
      text:"Create your profile",
      steps: "01"

    },
    {
      img:"./src/assets/Images/user_default_image.png",
      text:"Create your profile",
      steps: "02"

    },
    {
      img:"./src/assets/Images/user_default_image.png",
      text:"Create your profile",
      steps: "03"

    },
  ]

  const freqAskQus = [
    {
      firs:'',
      
    }
  ]

  const req = "Are you a recruiter?"


  const img = './src/assets/Images/PWSkills-white.png'

  const [count, setCount] = useState(0)

  const login = "Login"

  const mystyle = {
    color: "white",
    backgroundColor: "#201428",
   
  };
  const btnstyle = {
    color: "white",
    backgroundColor: "#8F4CBF",
   
  };
  const btnstyles = {
    color: "white",
    backgroundColor: "red",
   
  };

  return (
    <div className='overflow-x-hidden'>
    {/* <Cource showCaseData={showCaseData} headerData={headerData} inp = "noe" img="./src/assets/Images/PWSkills-logo.png" btnstyle={btnstyles} mystyle={mystyle} login="Login/Register"  coursesData={coursesData} ecosystemData = {ecosystemData} OurAchivementData={OurAchivementData} /> */}
    {/* <PWSkillsLab headerData={headerData} inp = "none" img={img} btnstyle={btnstyle} mystyle={mystyle} login="Login" dhinchakLabData={dhinchakLabData}/> */}
    {/* <JobPortal navData={navData} staircaseData={staircaseData} req = {req} companies={companies} jobCat={jobCat} jobData={jobData}/> */}
    <BecomeAnAffiliate navData={navData}/>
    </div>
  )
}

export default App
