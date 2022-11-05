import React from 'react'
import styles from './proj.module.css'
import {motion} from 'framer-motion/dist/framer-motion'
// import a from '../../../assets//proj_biz/biz.png'
import Popup from 'reactjs-popup';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'reactjs-popup/dist/index.css';


export default function Projects(props) {
  // console.log(props.data.path1)

  return (
    <div>
      <div className={styles.box1}>
        <div className={styles.box2}>
          
          <Popup contentStyle={{width: '70vw',height:"80vh"}} trigger={<motion.img src={props.data.path1} className={styles.img1} whileHover={{scale: 1.2}}/>} modal>
                {close => (
              <div className={styles.modal}>

                <button className={styles.close} onClick={close}>&times;</button>
                {/* <img className={styles.imgcollage} src={props.data.path1} /> */}
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} whileHover={{width:1025}} className={styles.imgbox}>
                <LazyLoadComponent> 
                  <div className={styles.gridbox} style={{backgroundImage: `url(${props.data.path5})`,backgroundSize:"cover"}} ></div>
                  <motion.div className={styles.gridbox} whileTap={{scale:1.3,y:44,x:-160,zIndex:3}} style={{backgroundImage: `url(${props.data.path2})`,backgroundSize:"cover"}}></motion.div>
                  <motion.div className={styles.gridbox} whileTap={{scale:2.7,y:-122,zIndex:3}} style={{backgroundImage: `url(${props.data.path3})`,backgroundSize:"cover"}}></motion.div>
                  <motion.div className={styles.gridbox} whileTap={{scale:2.7,y:-122,x:-330,zIndex:3}} style={{backgroundImage: `url(${props.data.path4})`,backgroundSize:"cover"}}></motion.div>
                  {/* <div className={styles.gridbox}></div> */}
                  {/* <div className={styles.gridbox}></div> */}
                </LazyLoadComponent>
                </motion.div>
                <div className={styles.text}>press to enlarge</div>

                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} className={styles.title} >{props.data.topic}</motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} className={styles.descp}>
                  <div style={{margin:'1rem',fontSize:'1.3rem'}}>{props.data.content[0]}</div>
                  <div style={{margin:'1rem',fontSize:'1rem'}}>{props.data.content[1]}</div>
                  <ul style={{margin:'1rem',fontSize:'.9rem',type:'disc'}}>  
                    {props.data.content.map(function(object, i)
                    {
                      if(i>1)
                      return <li>{props.data.content[i]}</li>;
                    })
                    }
                  </ul>
                </motion.div>
              
              </div>
          )}
          </Popup>

          <div className={styles.projheading}>{props.data.topic}</div>
          <div className={styles.intro}>{props.data.intro}</div>
          
        </div> 
      </div>
         
    </div>
  )
}
