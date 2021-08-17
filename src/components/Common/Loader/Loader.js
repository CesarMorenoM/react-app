import React from 'react'
import { motion } from 'framer-motion'

const style = {
  width: 20,
  height: 20,
  opacity: 1,
  margin: 8,
  borderRadius: 0,
  display: "inline-block",
  background: "#ff3229",
}

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 360,
  },
}

const Loader = (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        style={style}
        variants={variants}
        initial={"start"}
        animate={"end"}
        transition={{
          repeat: "Infinity",
          repeatType: "reverse",
          ease: "backInOut",
          duration: 1,
          delay: 0
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={"start"}
        animate={"end"}
        transition={{
          repeat: "Infinity",
          repeatType: "reverse",
          ease: "backInOut",
          duration: 1,
          delay: 0.2
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={"start"}
        animate={"end"}
        transition={{
          repeat: "Infinity",
          repeatType: "reverse",
          ease: "backInOut",
          duration: 1,
          delay: 0.4
        }}
      />
    </div>
  )
}

export default Loader