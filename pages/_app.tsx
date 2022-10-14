import '../styles/globals.scss'
import '../styles/Footer.scss';
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'



function MyApp({ Component, pageProps }: AppProps) {
  let navItems: navItem[] =[
    {
      text: "Home",
      location: "/home"
    },
    {
      text: "Portfolio",
      location: "/portfolio"
    },
    // {
    //   text: "Resultaten",
    //   location: "/results"
    // },
    {
      text: "Ervaringen",
      location: "/experience"
    },
    {
      text: "Hobby's",
      location: "/hobbies"
    },
  ]

  return (
    <>
      <Navigation navItems={navItems}></Navigation>
      <main>
        <Component {...pageProps} />
      </main>
      <div className="buffer"></div>
      <Footer></Footer>
    </>
  )
}

export default MyApp
