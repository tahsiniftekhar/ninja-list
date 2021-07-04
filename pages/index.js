import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <> 
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="Ninja List"></meta>
      </Head>
      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse nobis nihil tempore a repellendus iure sapiente quia voluptatem officiis, beatae veniam rem inventore hic perspiciatis totam, facilis laborum quaerat!</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      
      </div>
    </>
  )
}
