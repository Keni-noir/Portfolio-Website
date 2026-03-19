import ShoppingCart from "/Project/Shopping-Cart.png"
import MortgageCalculator from "/Project/Mortgage-Calculator.png"
import ResultSummary from "/Project/Result-Summary.png"
import Gracefootwears from "/Project/Gracefootwears.png" 
import ApiCountries from "/Project/Api-Countries.png"
import MuizAmir from "/Project/MuizAmir.png"
import Bookstore from "/Project/bookstore.png"
import DemoBanking from "/Project/DemoBanking.png"

const Projects = [
   {
        id: 1,
     title: "Basic Demo Banking Website ",
     description: "A basic banking web app, where users can receive and send money to other users. It reflects a real transaction system of the bank. ",
     image: DemoBanking,
     tags: ["React", "TailwindCSS", "Nodejs", "Express", "Postgres ", "Supabase"],
     demoURL: "https://demo-banking-six.vercel.app/login",
     GithubRepo:"https://github.com/Keni-noir/demo-banking",
     },
   {
        id: 2,
     title: "Bookstore Website ",
     description: "A bookstore web app. User can create books or add book which would be shown on their dashboard. The discovery page consusmes api from open library to show books and user can add book from discovery page to their dashboard. User can also update or delete book from their dashboard. The backend is built with nodejs, express and postgres, while the frontend is built with react and tailwindcss.",
     image: Bookstore,
     tags: ["React", "TailwindCSS", "Nodejs", "Express", "Postgres ", "Supabase"],
     demoURL: "https://bookstore-frontend-amber.vercel.app/",
     GithubRepo:"https://github.com/Keni-noir/Bookstore-Frontend",
     },
    {
        id: 3,
     title: "MuizAmir E-commerce website ",
     description: "An E-comerce website using Next.js and tailwind for a client, hosted on vercel. Website contains product of client and help buys place order that are sent to companies whatsapp due to client's request.  ",
     image: MuizAmir ,
     tags: ["React", "TailwindCSS"],
     demoURL: "https://muiz-amir.vercel.app/",
     GithubRepo:"https://github.com/Keni-noir/MuizAmir",
     },
     {
        id: 4,
     title: "E-comerce Website for a Footwear store",
     description: "AN  E-comerce website built with Nextjs, tailwindCss, implementing stripe for payment and handling and retrival of product data via API",
     image: Gracefootwears ,
     tags: ["React", "TailwindCSS, Stripe,"],
     demoURL: "https://e-commerce-website-eta-lovat.vercel.app/",
     GithubRepo:"https://github.com/Keni-noir/E-commerce-website-",
     },
    {
        id: 5,
     title: "Shopping-Cart Landing Page ",
     description: "A beautiful Shopping Landing page app using React and Tailwind, aimed at learning state management with useState and props drilling. Radux toolkit was used for global state management.",
     image: ShoppingCart ,
     tags: ["React", "TailwindCSS"],
     demoURL: "https://shopping-cart-knkz.vercel.app/",
     GithubRepo:"https://github.com/Keni-noir/ShoppingCart",
     },

     {
        id: 6,
     title: "Mortgage Calculator Landing Page ",
     description: "Mortgage Calculator Landing page app using React and Tailwind, aim at handling forms in react and basic javascript calculations.",
     image: MortgageCalculator ,
     tags: ["React", "TailwindCSS"],
     demoURL: "https://mortgage-calculator-opal-three.vercel.app/",
     GithubRepo:"https://github.com/Keni-noir/Mortgage-Calculator",
     },

     {
        id: 7,
     title: "Result Summary Landing Page ",
     description: "A Responsive Result page app using React and Tailwind, aim at learning more about flexbox, grid layouts and site responsiveness in TailwindCSS.",
     image: ResultSummary ,
     tags: ["React", "TailwindCSS"],
     demoURL: "https://result-summary-psi-orpin.vercel.app/",
     GithubRepo:"https://github.com/Keni-noir/ResultSummary",
     },

     {
        id: 8,
     title: "API Countries ",
     description: "A Responsive web app using React and Tailwind, learning how to fetch Restful API and make use if it in the project ",
     image: ApiCountries ,
     tags: ["React", "TailwindCSS"],
     demoURL: "https://result-summary-psi-orpin.vercel.app/",
     GithubRepo:"https://github.com/Keni-noir/ApiCountries",
     }
]

export default Projects;



