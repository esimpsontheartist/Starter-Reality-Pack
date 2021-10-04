import React from 'react'
import styles from './Starter.module.scss'

const StarterClientSkin = (props) => {
  console.log('props', props)
  return (
    <>
      {props.canvas}
      <span className={styles.starterSplash}>{"Starter Reality Pack!"}</span>
    </>
  )
}

export default StarterClientSkin
