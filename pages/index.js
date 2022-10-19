import Head from 'next/head'
import { usePostHog } from 'next-use-posthog'
import Image from 'next/image';

export default function Home() {
  usePostHog('phc_4Hlle7lsQt1PNd4NWtZO3nGp8Pf8gGdmws7mh4bCAXK', {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
    },
  })  

  return (
    <div className="container">
      <Head>
        <title>eric wang</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className="title">eric wang</div>
        <div className="bio">
          <Image
            className="profile"
            src="/prof.jpg"
            height={50}
            width={50}
            alt="profile"
          />
          <div className="description">
            <div>spiritual seeker, traveller and artist</div>
            <div>former software eng <a href="https://twitter.com/amplitude_HQ">@amplitude</a></div>
          </div>
        </div>
        <div className="category">projects</div>
        <ul>
          <li><a href="https://soft-boy.gitbook.io/graphicsjs">sql-helper</a> - natural language to SQL with GPT-3 Codex</li>
          <li><a href="https://soft-boy.gitbook.io/graphicsjs">grammar-helper</a> - grammarly in a desktop notepad</li>
          <li><a href="https://soft-boy.gitbook.io/graphicsjs">graphics.js</a> - js rewrite of Andrew Merrill’s graphics.py</li>
        </ul>
      </main>

      <style jsx global>{`
        body {
          padding: 2.8rem 1.2rem;
          margin: auto;
          max-width: 37.5rem;
          font-family: 'Source Serif Pro', serif;
          line-height: 28px;
          font-size: 1.2rem;
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
          color: #40826d
        }
      `}</style>
    </div>
  )
}
