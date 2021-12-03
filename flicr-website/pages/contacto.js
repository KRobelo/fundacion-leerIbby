import Head from 'next/head' 
import styles from '../styles/Home.module.css'
import SiteContacto from '../components/SiteContacto/SiteContacto'

export default function Home() {
  return (
    <div className={styles.container}>
    
<SiteContacto/>
    </div>
  )
}
