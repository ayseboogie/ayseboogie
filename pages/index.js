import React from "react";
import { useRouter } from 'next/router'
import Header from "./components/header.jsx";


export default function Home() {
    const router = useRouter()

  return (
      <React.Fragment>
      <Header />
      <div className="flex flex-col flex-wrap justify-center">
     <header className="text-lg text-center">Ayse . Site</header>
        <div className="" onClick={() => router.push('/contact')}>Click me</div>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
      </div>
      </React.Fragment>
  )
}