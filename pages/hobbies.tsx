import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../styles/Hobbies.module.scss'

const hobbies: NextPage = () => {
    return (
        <>
			<Head>
        		<title>Hobby&apos;s</title>
      		</Head>
            <h1 id={styles.title}>Hobby&apos;s</h1>
			<ul id={styles.hobbies}>
				<li>
					<a href="#gaming">Gaming</a>
				</li>
				<li>
					<a href="#programing">Programing</a>
				</li>
				<li>
					<a href="#homelabbing">Homelabbing</a>
				</li>
			</ul>
			<section id="gaming" className={styles.hobby_section}>
				<h2>Gaming</h2>
				<p>
					Ik vind het leuk om games op mijn computer te spelen, bijvoorbeeld minecraft, ghost hunters corp en phasmophobia <br />
				</p>
			</section>
			<section id="programing" className={styles.hobby_section}>
				<h2>Programing</h2>
				<p>
					Ik vind het leuk om dingen met programeeren uit te probeeren.
				</p>
			</section>
			<section id="homelabbing" className={styles.hobby_section}>
				<h2>Homelabbing</h2>
				<p>
					Ik vind het leuk om linux, hosting software bezig te zijn, bijvoorbeeld locaal website hosting, vpn hosting, vms en game server <br />
				</p>
			</section>
			<br /><br /><br />
        </>
    );
}

export default hobbies;