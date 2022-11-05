import React,{useState,useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion/dist/framer-motion'
import styles from './exp.module.css'

export default function Exp(props) {

    // console.log(props)
    const [onhover, setonhover] = useState('')
    const [hoverstate, sethoverstate] = useState(false)
    const renderbox=()=>{
        return <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className={styles.popupbox}><div className={styles.heading}>{props.data.heading}</div><div className={styles.content}>{props.data.content}</div></motion.div>
    }
    const handle_hover=()=>{
        sethoverstate(true)
        return setonhover(renderbox())
    }

    const handle_leave=()=>{
        sethoverstate(false)
        return setonhover('')
    }

    const animation=useAnimation()
    useEffect(() => {
      
        if(hoverstate)
        {
            animation.start({
                y:85,
                x:-12,
                transition:{type:'spring',bounce:.3,duration:1.5}
            })
        }
        if(!hoverstate)
        {
            animation.start({
                y:0,
                x:-12
                // transition:{type:'spring',bounce:.3,duration:1.5}
            })
        }

    }, [hoverstate])
    
    return (
        <div>
            <div className={styles.egrid} onMouseOver={handle_hover} onMouseLeave={handle_leave}>
                            <div className={styles.ebox2a}><motion.div className={styles.bubble} animate={animation}></motion.div>{onhover}</div>
                            <div className={styles.ebox2b}>{props.data.topic1}</div>
                            <div className={styles.ebox2c}>{props.data.topic2}</div>
                            <div className={styles.ebox2d}>{props.data.date}</div>
            </div>
        </div>
    )
}
