import type { NextPage, Metadata } from 'next'
import Image from 'next/image';
import styles from '../../styles/Portfolio.module.scss'

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
    title: "musicplayer (server/client)",
    desc: "een simple cli(in de commandline) leerproject gebaseerd op mpd.",
    link: { location: "https://bitbucket.org/emilyvs/musicplayer-server-client/src/main/", text: "link to project"}
  },
  {
	title: "xerte",
	desc: "xerte is een open-source project waar ik tijdens mijn stage bij DLearning aan heb gewerkt:<br><ul>" +
	  "<li>de management pagina login en permissions</li>" + 
	  "<li>de optie voor geen wardering maar wel een antwoord bij een leer object met tracking</li>" + 
	  "<li>een xerte online toolkit pagina toe gevoegt met de naam \"image compare\"</li>" +
	  "<li>ik heb gewerkt aan de interactive blocks feature</li>" + 
	  "<li>bug fixes</li>" + 
	  "</ul>",
	link: { location: "https://xerte.org.uk/", text: "link to project" }
  }
];

const metadata: Metadata = {
  title: "Portfolio"
};

const Portfolio: NextPage = () => {
  return (
    <>
      <div className={styles.grid}>
        {PortfolioEntrys.map((entry, idx) => (
          <section key={idx} className={styles.card}>
            <h2>{entry.title}</h2>
            <div dangerouslySetInnerHTML={{__html: entry.desc}}></div>
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

export {metadata};
export default Portfolio;
