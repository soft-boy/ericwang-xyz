import Head from 'next/head'
import Image from 'next/image';
import posthog from 'posthog-js'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    posthog.init('phc_4Hlle7lsQt1PNd4NWtZO3nGp8Pf8gGdmws7mh4bCAXK', {
      api_host: 'https://us.i.posthog.com',
      loaded: (client) => {
        if (process.env.NODE_ENV === 'development') client.opt_out_capturing()
      },
    })
  }, [])

  return (
    <div className="container">
      <Head>
        <title>eric wang</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className="title">eric wang</div>
        <div className="bio">
          <Image
            className="profile"
            src="/prof.png"
            height={50}
            width={50}
            alt="profile"
          />
          <div className="description">
            <div>spiritual seeker, traveler and artist</div>
            <div>engineering @ <a href="https://meta.com/">meta</a></div>
          </div>
        </div>
        <div className="category">coding</div>
        <ul>
          <li><a href="https://waymoworld.onrender.com/">waymoworld</a> - 3D multiplayer waymo laser tag</li>
          <li><a href="https://github.com/soft-boy/zeta">zeta</a> - minimalistic ai-agent harness</li>
          <li><a href="https://ewurl.cc/">ew-url</a> - tinyurl, but made by me</li>
          <li><a href="https://www.datamonster.me/">datamonster.me</a> - generate datamonsters</li>
          <li><a href="https://github.com/soft-boy/breakout-dqn">breakout-dqn</a> - deep q-learning for breakout</li>
          <li><a href="https://github.com/soft-boy/split_decisions">split_decisions</a> - solve time magazine puzzles</li>
        </ul>
        <div className="category">spirituality</div>
        <ul>
          <li><a href="https://app.notion.com/p/3-17-26-spirituality-notes-406798776e91809496a9f67afc286da6?source=copy_link">3.17.26</a> - spirituality</li>
          <li><a href="https://app.notion.com/p/6-21-25-Brain-Damage-219798776e9180ada539e943a109a169?source=copy_link">6.21.25</a> - brain damage</li>
          <li><a href="https://app.notion.com/p/11-13-22-synchronicity-3d06e06d341b40a6bd50de0f46f4cb69?source=copy_link">11.13.22</a> - synchronicity</li>
          <li><a href="https://app.notion.com/p/9-7-22-life-8e409d99bf2f4bee8de03da6bd10fdab?source=copy_link">9.7.22</a> - life</li>
        </ul>
      </main>

      <style jsx global>{`
        body {
          padding: 2.8rem 1.2rem;
          margin: auto;
          max-width: 37.5rem;
          font-family: 'Source Serif Pro', serif;
          line-height: 28px;
        }

        @media only screen and (min-device-width: 600px) {
          body {
            font-size: 1.2rem;
          }
        }

        .title {
          font-size: 2.3rem;
          font-weight: bold;
        }

        .bio {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 2.4rem 0;
        }

        .profile {
          border-radius: 50%;
        }

        .description {
          margin-left: 1.2rem;
        }

        .category {
          font-weight: bold;
        }

        li {
          line-height: 2rem;
        }

        a {
          color: #112BAC;
        }
      `}</style>
    </div>
  )
}
