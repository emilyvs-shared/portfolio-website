import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  let birthdate = new Date("2004-10-14");
  let now = new Date();
  let age = ((now.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={ styles.title }>Welkom op mijn website</h1>
      <div className={ styles.welcome }>
        <p>
          Welkom op mijn website, op deze website kun je mijn erveringen, mijn hobby&apos;s, een wat ik allemaal heb gemaakt<br />
        </p>
        <p>
          Mijn naam is troy van sleeuwen ik ben {age} jaar oud.Ik doe de opleiding software developer, omdat ik het een het interessant en leuk vind.<br />
          In mijn vrije tijd doe ik gamen, leren hoe dingen (operating systems, compilers, etc.) in elkaar zitten en werken.
        </p>
        <p>
          ik maak deze website voor een opdracht voor school, en om te laten zien wat ik allemaal kan en mogelijk is binnen deze opdracht om dit te maken.
        </p>
      </div>
    </>
  )
}

export default Home
