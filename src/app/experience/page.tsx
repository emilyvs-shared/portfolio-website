import type { NextPage, Metadata } from 'next'
import Image from 'next/image';
import styles from '../../styles/Experience.module.scss'

const ExperienceSchoolEntrys: ExperienceEntry[] = [
  {
    title: "OJBS de lightstraat",
    desc: "Ik herinder me niet veel van deze school,<br /> maar ik weet nog wel dat ik het daar nog al saai vond, <br /> omdat er meestal wel een creative opdracht naast de lessen was.",
    contact: {
      name: "Openbare Jenaplan basisschool De Lichtstraat",
      address: "Brabantlaan 73", 
      city: "5262 JH Vught", 
      telephone: "073 656 3832"
    },
    link: {text: "website van de school", location: "https://www.ojbs-delichtstraat.nl/"},
    img: {img: "/images/de_lightstaat.jpg", caption: "gebouw van de lightstraat"}
  },
  {
    title: "Het Eldecollege(vmbt-t/mavo)",
    desc: "Toen ik in de eerst van vond ik de school wel leuk. <br> voor het derde moesten we een keuze maken tussen dvpr en inft <br> ik koos voor inft omdat ik het toen al wist dat ik in de ict wilden werken.",
    contact: {
      name: "Elde College Gestel",
      address: "Kapelbergstraat 6", 
      city: "5271 VB Sint-Michielsgestel", 
      telephone: "073 820 0600"
    },
    link: {text: "website van de school", location: "https://www.eldecollege.nl/"},
    img: {img: "/images/het_eldecollege.jpg", caption: "gebouw van het eldecollege"}
  },
  {
    title: "Het KW1C(software developer)",
    desc: "Ik heb voor deze school gekozen omdat het leker dicht bij was. <br> ik heb voor de oplijding gekozen om dat ik het onderwerp wel leuk vond. <br> en ik vind het wel een leuke school.",
    contact: {
      name: "het koning willem 1 college",
      address: "Onderwijsboulevard 3", 
      city: "5223 DE 's-Hertogenbosch", 
      telephone: "073 624 9 444"
    },
    link: {text: "website van de school", location: "https://www.kw1c.nl/"},
    img: {img: "/images/het_kw1c.jpg", caption: "gebouw van het kw1c"}
  },

];

const ExperienceWorkEntrys: ExperienceEntry[] = [
  {
    title: "Sleegers Technique",
    desc: "stage van 29-8-2022 tot 3-2-2023",
    contact: {
      name: "Sleegers Technique",
      address: "Klompenmaker 4", 
      city: "5253 RH Nieuwkuijk", 
      telephone: "073 511 8230"
    },
    link: {text: "website van Sleegers Technique", location: "https://www.sleegerstechnique.com/nl"},
    img: {img: "/images/Sleegers_Technique.jpg", caption: "gebouw van Sleegers Technique"}
  },
  {
    title: "DLearning",
    desc: "stage van 5-2-2024 tot 28-6-2024",
    contact: {
      name: "DLearning",
      address: "gebouw A Utopialaan 29", 
      city: "5232 CD 's-Hertogenbosch", 
      telephone: "073 511 8230"
    },
    link: {text: "website van DLearning", location: "https://www.dlearning.nl"},
    //img: {img: "/images/Sleegers_Technique.jpg", caption: "gebouw van Sleegers Technique"}
  }
];

const metadata: Metadata = {
  title: "Ervaringen",
};

const Experience: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>ervaringen(opleidingen)</h1>
			<div className={styles.grid}>
        {ExperienceSchoolEntrys.map((entry,idx) => (
          <section key={idx} className={styles.section}>
            <h2>{entry.title}</h2>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: entry.desc }}>
            </p>
            <p className={styles.contact}>
              Naam: {entry.contact.name}<br/>
              adress: {entry.contact.address}<br/>
              plaats: {entry.contact.city}<br/>
              telefoon: {entry.contact.telephone}<br/>
            </p>
            <a href={entry.link.location} target="_blank" rel="noreferrer">{entry.link.text}</a>
			{ entry.img &&
              <figure className={styles.image}>
				<Image src={entry.img.img} alt={entry.img.caption} fill/>
				<figcaption>{entry.img.caption}</figcaption>
              </figure>
			}
          </section>
        ))}
      </div>
      <h1 className={styles.title}>ervaringen(werk/stage)</h1>
			<div className={[styles.grid, styles.center].join(" ")}>
        {ExperienceWorkEntrys.map((entry,idx) => (
          <section key={idx} className={[styles.section].join(" ")}>
            <h2>{entry.title}</h2>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: entry.desc }}>
            </p>
            <p className={styles.contact}>
              Naam: {entry.contact.name}<br/>
              adress: {entry.contact.address}<br/>
              plaats: {entry.contact.city}<br/>
              telefoon: {entry.contact.telephone}<br/>
            </p>
            <a href={entry.link.location} target="_blank" rel="noreferrer">{entry.link.text}</a>
			{entry.img &&
              <figure className={styles.image}>
				<Image src={entry.img.img} alt={entry.img.caption} fill/>
				<figcaption>{entry.img.caption}</figcaption>
			  </figure>
			}
          </section>
        ))}
      </div>
    </>
  )
}

export {metadata};
export default Experience;
