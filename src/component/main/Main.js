import React,{useEffect,useState} from 'react'
import {motion,useAnimation,useScroll,useElementScroll} from 'framer-motion/dist/framer-motion'
import {useInView} from 'react-intersection-observer'
import ProgressBar from 'react-animated-progress-bar'
import styles from './main.module.css'
import Home from '../home/Home'
import Exp from './exp/Exp'
import Projects from './projects/Projects'
import aos from 'aos'
import 'aos/dist/aos.css'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.webp'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/smartphone.png'
import name from '../../assets/name.png'

import facer1 from '../../assets/face_recog/face_r.jpeg'
import facer2 from '../../assets/face_recog/facer2.png'
import facer3 from '../../assets/face_recog/facer3.png'
import facer4 from '../../assets/face_recog/facer4.png'
import facer5 from '../../assets/face_recog/facer5.png'

import portf1 from '../../assets/portfolio_proj/portf1.png'
import portf2 from '../../assets/portfolio_proj/p1.png'
import portf3 from '../../assets/portfolio_proj/p2.png'
import portf4 from '../../assets/portfolio_proj/p3.png'
import portf5 from '../../assets/portfolio_proj/p4.png'

import biz1 from '../../assets/proj_biz/biz.png'
import biz2 from '../../assets/proj_biz/Screenshot11.png'
import biz3 from '../../assets/proj_biz/Screenshot12.png'
import biz4 from '../../assets/proj_biz/Screenshot18.png'
import biz5 from '../../assets/proj_biz/Screenshot17.png'

import drdo1 from '../../assets/drdo_proj/Screenshot5.png'
import drdo2 from '../../assets/drdo_proj/Screenshot7.png'
import drdo3 from '../../assets/drdo_proj/Screenshot6.png'
import drdo4 from '../../assets/drdo_proj/Screenshot8.png'
import drdo5 from '../../assets/drdo_proj/Screenshot6.png'

export default function Main() {

    const [education, seteducation] = useState([{topic1:'high school',topic2:'12th',date:'2018-2019'},{topic1:'b.tech CSE',topic2:'National Institute Of Technology Delhi',date:'2020-2024'}])
    const [exp, setexp] = useState([{topic1:'free lancing',topic2:'2nd sem ',date:'2021-2022',heading:'car rental',content:'designed a carrental portal with the use of php and sql database for a locally owned business'},{topic1:'Research Trainee at DRDO',topic2:'4th sem ',date:'Jan 2022-July 2022',heading:'articles and journals portal',content:'did made a portal using react and node js using sql database also used webscrapping'}])
    // const [scrollPosition, setScrollPosition] = useState(0);
    let arr=[{topic:"Biz Manager",intro:"React based WebApp",path1:biz1,path2:biz2,path3:biz3,path4:biz4,path5:biz5,content:[' Biz-Manager| React based WebApp','A online web application which can be used by shop owners to-','Manage list of there products','Handle various sales data','Get statistical report of sales by various graphical plots','Generate invoice for customers','Maintain independent data for product details','Get daily and monthly profit, profit growth data']},{topic:"Drdo Portal",intro:"React based WebApp with Python Web scrapping",path1:drdo1,path2:drdo2,path3:drdo3,path4:drdo4,path5:drdo5,content:['DRDO-Portal | React based WebApp with Python Web scrapping','A website for accessing scrapped data about various research paper and materials from google scholar and also providing sorting and searching methods','Various data regarding journals and research paper is scrapped','Data is filtered and stored in my SQL Database','React portal enables a way to search and go through this data','Some sorting methods are also provided']},{topic:"Portfolio",intro:"Portfolio website",path1:portf1,path2:portf2,path3:portf3,path4:portf4,path5:portf5,content:['Potfolio | React based Website','Describing Me and My Work']},{topic:"Face Recognition",intro:"recognises individual faces and generte a attendence csv file",path1:facer1,path2:facer2,path3:facer3,path4:facer4,path5:facer5,content:['Face-Recognition | Python based','Detects face and tries to recognise accurately','MTCNN based face detection','FACENET based face embedding','SVM based multiclass classification']}]


    useEffect(() => {
        aos.init({
            offset: 200,
            duration: 900,
            easing: 'ease',
            delay: 0,
          }); 
    }, [])

    
    const {ref,inView}=useInView()
    const animation=useAnimation()

    useEffect(() => {
        if(inView)
        {
            animation.start({
                x:0,
                transition:{type:'spring',bounce:.3,duration:2.5}
            })
        }

        if(!inView)
        {
            animation.start({
                x:400,
                // transition:{bounce:0.3,duration:.7}
            })
        }
      console.log("view =",inView)
    },[inView]) 
     

    return (
        <motion.div className={styles.body1} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
        {/* <ProgressBar style={{Position:'fixed'}} width="100vw" rect rectPadding="1px" rectBorderRadius="20px" trackPathColor="transparent" bgColor="#333333" trackBorderColor="grey" percentage="60" /> */}

            {/* <motion.div className={styles.progress} style={{ scaleX: scrollYProgress }} /> */}

            <motion.div className={styles.header} inital={{y:-200,opacity:0}}  transition={{duration:.7}}>
                
                <div className={styles.icon}>
                <div className={styles.tag1}>A.</div>
                </div>

                <div className={styles.pagelist} >
                    <motion.a inital={{opacity:1}} animate={{opacity:1}} transition={{duration:2}} className={styles.page} href='#home'>Home</motion.a>
                    <a className={styles.page} href='#intro'>My Intro</a>
                    <a className={styles.page} href='#area'>Services</a>
                    <a className={styles.page} href='#journey'>My Journey</a>
                    <a className={styles.page} href='#project'>Projects</a>
                    {/* <div className={styles.page}>Blog</div> */}
                </div>
            </motion.div>

            <div className={styles.socialbox}>
                    <a href='https://github.com/Adityasingh9871/'><img src={github} alt=' here'  className={styles.img1} /></a>
                    <a href='https://mail.google.com/mail/?view=cm&to=aditya9871singh@gmail.com&su=SUBJECT&body=BODY'><img src={gmail} alt=' here' className={styles.img1} /></a>
                    <a href='https://www.linkedin.com/in/aditya-singh-664812202/'><img src={linkedin} alt=' here' className={styles.img1} /></a>
                    {/* <img src={twitter} alt=' here' className={styles.img1} /> */}
            </div>
        
            <div className={styles.box1} id='home'>
                <Home />
            </div>

            <div className={styles.box2} id='intro'>
                <div className={styles.box2grid}>
                    <div className={styles.photo} ></div>
                    <motion.div ref={ref} className={styles.intro} animate={animation}>
                        <div className={styles.tag2}>my intro</div>
                        <div className={styles.tag3}>about me</div>
                        <div className={styles.tag4}>Innovative software engineer, with a graduate degree and a passion for upcomming AI world.</div>

                        <div className={styles.box3}>
                            <div className={styles.data}><img src={name}  className={styles.img2} alt='here' />name : Aditya singh</div>
                            <div className={styles.data}><img src={phone} className={styles.img2} alt='here' />phone : 8287228654</div>
                            <div className={styles.dataex}><img src={mail} className={styles.img2} alt='here'  />email : aditya9871singh@gmail.com</div>
                        </div>        
                    </motion.div>
                </div>
            </div>

            <div className={styles.box2} id='area'>
                <div  className={styles.sbox1}>
                    <div className={styles.sbox2}>my expertise area</div>
                    <div className={styles.sbox3}>
                        <div className={styles.r1}>
                            <div className={styles.c1}>Web Design</div>
                            <div className={styles.c2}>60%</div>
                            <div className={styles.c3}>
                                <div data-aos='slide-right' className={styles.cc3} style={{width:'60%'}}></div>
                            </div>
                            {/* <ProgressBar width="200vw" trackWidth="25" percentage="60" /> */}
                        </div>
                        <div className={styles.r1}>
                            <div className={styles.c1}>React JS</div>
                            <div className={styles.c2}>40%</div>
                            <div className={styles.c3}>
                                <div data-aos='slide-right' className={styles.cc3} style={{width:'40%'}}></div>
                            </div>
                        </div>
                        <div className={styles.r1}>
                            <div className={styles.c1}>DSA</div>
                            <div className={styles.c2}>35%</div>
                            <div className={styles.c3}>
                                <div data-aos='slide-right' className={styles.cc3} style={{width:'35%'}}></div>
                            </div>
                        </div>
                        <div className={styles.r1}>
                            <div className={styles.c1}>Machine Learning</div>
                            <div className={styles.c2}>10%</div>
                            <div className={styles.c3}>
                                <div data-aos='slide-right' className={styles.cc3} style={{width:'10%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.box3} id='journey'>
                <div className={styles.sbox1}>
                <div className={styles.sbox2}>my journey</div>
                <div className={styles.ebox1}>
                    <div className={styles.education}>
                        <div className={styles.tag5}>education</div>

                         {
                            education.map((data)=>(
                            <div className={styles.egrid}>
                                <div className={styles.ebox2a}><div className={styles.bubble}></div></div>
                                <div className={styles.ebox2b}>{data.topic1}</div>
                                <div className={styles.ebox2c}>{data.topic2}</div>
                                <div className={styles.ebox2d}>{data.date}</div>
                            </div>
                            ))
                        } 

                        
                    </div>
                    <div className={styles.experiance}>
                    <div className={styles.tag5}>experiance</div>

                        {
                        exp.map((data)=>(
                            <Exp data={data} />
                        ))
                        } 

                    </div>
                </div>
                </div>
                
            </div>

            <div className={styles.box5} id="project">
                <div className={styles.sbox1}>
                <div className={styles.sbox2}>Projects</div>
                    <div className={styles.sbox3}>
                        <div className={styles.pbox1} id="pbox1">
                        {
                        arr.map((data)=>(
                            <Projects data={data} />
                        ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
