import '../styles/globals.scss';
import '../styles/Footer.scss';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React from 'react';



function MyApp({children}: {children: React.ReactNode}) {
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
    <html>
      <body>
        <Navigation navItems={navItems}></Navigation>
        <main>
          {children}
        </main>
        <div className="buffer"></div>
        <Footer></Footer>
      </body>
    </html>
  )
}

export default MyApp
