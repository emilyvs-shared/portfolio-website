interface navItem{
    text: string,
    location: string
}
interface PortfolioEntry{
    title: string,
    desc: string,
    link?: {text:string, location: string},
    img?: string
}

interface ExperienceEntry{
    title: string,
    desc: string,
    contact: {name: string, address: string, city: string, telephone: string},
    link: {text: string, location: string},
    img?: {img: string, caption: string}
}
