import Head from 'next/head'

export default function Home() {
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
