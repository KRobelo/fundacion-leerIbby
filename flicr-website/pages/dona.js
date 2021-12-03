import Head from 'next/head' 
import styles from '../styles/Home.module.css'
import SiteDonar from '../components/SiteDonar/SiteDonar'

export default function Home() {
  return (
    <div className={styles.container}>
    
<SiteDonar/>
    </div>
  )
}
