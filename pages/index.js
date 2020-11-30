import React from "react";

import { useRouter } from 'next/router'


export default function Home() {
    const router = useRouter()
    const Fall = "/Fall.png";

  return (
      <div className="image">
{/*<img src={Fall} />*/}
     <div>My site</div>
        <span onClick={() => router.push('/contact')}>Click me</span>
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
        <style jsx>
            {`
          .image {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-image: url(${Fall});
          }
        `}
        </style>
    </div>
  )
}