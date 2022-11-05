import React from 'react'
import styles from './home.module.css'
import {AnimatePresence, motion,useAnimation} from 'framer-motion/dist/framer-motion'
import {useInView,InView} from 'react-intersection-observer'
import { useEffect } from 'react'
import badge1 from '../../assets/medal.png'
import badge2 from '../../assets/project.png'
import badge3 from '../../assets/ml.png'
import photo from '../../assets/finalimg.jpg'
import file from '../../assets/201210004_Aditya_Singh.pdf'

export default function Home() {
    
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    const {ref,inView}=useInView()
    const animation=useAnimation()

    useEffect(() => {
        if(inView)
        {
            animation.start({
                x:-625,
                transition:{type:'spring',bounce:.3,duration:1.5}
            })
        }

        if(!inView)
        {
            animation.start({
                x:-900,
                // transition:{bounce:0.3,duration:.7}
            })
        }
    //   console.log("view =",inView)
    },[inView]) 
    
    var text=['w','e','e']

    return (
        <AnimatePresence>
        <div className={styles.body}>
        <motion.div  className={styles.photo1} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}} >
            <img src={photo}></img>
            <article>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            <motion.div whileHover={{scale:2.5}} className={styles.photogrid}></motion.div>
            
            
            </article>
        </motion.div>
            <div className={styles.box1}>
                <motion.div initial={{x:-400,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:2}}>
                <div className={styles.tag1}>Hi, I am</div>
                <div className={styles.tag2}>ADITYA SINGH</div>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:2}} exit={{opacity:0}} >
                    <div className={styles.tag3}>Web Developer</div>
                <div className={styles.tag4}>KNOWLEDGE isn't free , you have to pay ATTENTION</div>
                <div>
                <motion.button whileHover={{scale:1.5,boxShadow:"0px 0px 10px white"}} className={styles.cvbtn}><a href={file} download>Download CV</a></motion.button>
                <motion.button whileHover={{scale:1.5,boxShadow:"0px 0px 10px white"}} className={styles.contact} onClick={() => openInNewTab('https://mail.google.com/mail/?view=cm&to=aditya9871singh@gmail.com&su=SUBJECT&body=BODY') }>Contact me</motion.button>
                </div>
                </motion.div>
            </div>
            
            <motion.div ref={ref} className={styles.join} animate={animation} >
                <div className={styles.minibox1}>
                    <div className={styles.minibox2}>
                        <div className={styles.badge}><motion.img className={styles.badge_icon} src={badge1} whileHover={{ scale: 2.5 }} /></div>
                        <div className={styles.topic1}>6 months intern exp</div>
                        <div className={styles.topic2}>experience</div>
                    </div>
                    <div className={styles.minibox2}>
                        <div className={styles.badge}><motion.img className={styles.badge_icon} src={badge2} whileHover={{ scale: 2.5 }} /></div>
                        <div className={styles.topic1}>4 projects</div>
                        <div className={styles.topic2}>completed</div>
                    </div>
                    <div className={styles.minibox2}>
                        <div className={styles.badge}><motion.img className={styles.badge_icon} src={badge3} whileHover={{ scale: 2.5 }} /></div>
                        <div className={styles.topic1}>learning ML</div>
                        <div className={styles.topic2}>currently</div>
                    </div>

                </div>
            </motion.div>
            
                
        </div>
        </AnimatePresence>
    )
}
