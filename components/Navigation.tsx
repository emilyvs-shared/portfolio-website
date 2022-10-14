import { NextPage } from "next";
import { AppProps } from "next/app";
import Link from "next/link";

interface props{
    navItems: navItem[]
}

const Navigation: NextPage<props> = (pageProps: props) => {

    let navItems = pageProps.navItems;

    return (
        <nav>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    {navItems.map((navItem, idx) => (
                        <li key={idx}>
                            <a href={navItem.location}>
                                {navItem.text}
                            </a>
                        </li>
                    ))}
                </div>
            </ul>
        </nav>
    );
}

export default Navigation;