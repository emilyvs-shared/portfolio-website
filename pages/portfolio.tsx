import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Portfolio.module.scss'

let PortfolioEntrys: PortfolioEntry[] = [
  // {
  //   title: "opdracht 1.3",
  //   desc: "ik heb deze opdracht gekozen omdat ik er wel even over deed om het goed te krijgen",
  //   link: { location: "https://bitbucket.org/troyvs/opdrachten/src/opdracht-1.3/", text: "link to project"},
  //   img: "/images/opdracht_1.3.png"
  // },
  // {
  //   title: "opdracht 2.3",
  //   desc: "ik heb deze opdracht gekozen omdat het moelijk was om het telaten doen wat het moet doen met de layout",
  //   link: { location: "https://bitbucket.org/troyvs/opdrachten/src/opdracht-1.3/", text: "link to project"},
  //   img: "/images/opdracht_2.3.png"
  // },
  // {
  //   title: "opdracht 3.1",
  //   desc: "ik heb deze opdracht gekozen omdat het wel leuk was om te doen",
  //   link: { location: "https://bitbucket.org/troyvs/opdrachten/src/opdracht-1.3/", text: "link to project"},
  //   img: "/images/opdracht_3.1.png"
  // },
  // {
  //   title: "opdracht 3.2",
  //   desc: "ik heb deze opdracht gekozen omdat eht even spelen was met de waards",
  //   link: { location: "https://bitbucket.org/troyvs/opdrachten/src/opdracht-1.3/", text: "link to project"},
  //   img: "/images/opdracht_3.2.png"
  // },
  {
    title: "lasalclass2support",
    desc: "een plugin voor bamboo voor het bouwen van een lasalclass2 project",
    link: { location: "https://bitbucket.org/troyvs/lasalclass2support/src/main/", text: "link to project"}
  }
]

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className={styles.grid}>
        {PortfolioEntrys.map((entry, idx) => (
          <section key={idx} className={styles.card}>
            <h2>{entry.title}</h2>
            <p>{entry.desc}</p>
            {entry.link &&
              <a href={entry.link.location} target="_blank" rel="noreferrer">{entry.link.text}</a>
            }
            <div className={styles.image}>
              {entry.img &&
                <Image src={entry.img} layout="fill" alt="uitwerking" />
              }
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Portfolio;