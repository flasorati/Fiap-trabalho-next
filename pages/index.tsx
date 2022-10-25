import type { NextPage } from 'next'
import BodyComponent from '../components/BodyComponent'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
    <HeaderComponent/>
      <main className={styles.main}>
    
    <BodyComponent/>    
       
      </main>
    <FooterComponent/>
      
    </div>
  )
}

export default Home
