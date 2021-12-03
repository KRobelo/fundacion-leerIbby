import Head from 'next/head' 
import styles from '../styles/Home.module.css'
import SiteQuienesSomos from '../components/SiteQuienesSomos/SiteQuienesSomos'

export default function Home() {
  return (
    <div className={styles.container}>
    
<SiteQuienesSomos/>
    </div>
  )
}
