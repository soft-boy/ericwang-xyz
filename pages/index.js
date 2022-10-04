import Head from 'next/head'
import { usePostHog } from 'next-use-posthog'

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
      </Head>
      <main>
        <h1 className="title">
          eric wang
        </h1>

        <p className="description">
          Consciousness exploring itself in endless ways ⚗️
        </p>

        <p className="description">
          prev Software Eng @ Amplitude
        </p>
      </main>

      <style jsx>{`
        .title a {
          color: #14248A;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 2.5rem;
          margin: auto;
          max-width: 37.5rem;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
