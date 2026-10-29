import Head from 'next/head'
import Image from 'next/image';
import posthog from 'posthog-js'
import { useEffect, useRef, useState } from 'react'

const artworks = [
  'Seated figure with crossed legs',
  'Seated figure resting their head on their arms',
  'Crouching figure in profile',
  'Standing figure with arms overhead',
  'Portrait in profile on white',
  'Seated figure torso study',
  'Portrait in profile on gray',
  'Collection of gesture drawings',
  'Seated figure viewed from behind',
  'Seated figure against a dark background',
  'Jesse',
].map((description, index) => ({
  src: `/art/study-${String(index + 1).padStart(2, '0')}.png`,
  description,
}))

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (selectedArtwork === null) return
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [selectedArtwork])

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
          <li><a href="https://sflasertaxi.com/">sf-laser-taxi</a> - 3D multiplayer autonomous car laser tag</li>
          <li><a href="https://ewurl.cc/">ew-url</a> - tinyurl, but made by me</li>
          <li><a href="https://github.com/soft-boy/zeta">zeta</a> - minimalistic ai-agent harness</li>
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
        <section aria-labelledby="art-heading" className="art-section">
          <h2 id="art-heading" className="category">art</h2>
          <div className="art-grid">
            {artworks.map((artwork, index) => (
              <button
                key={artwork.src}
                type="button"
                className="art-thumbnail"
                aria-label={`Expand artwork ${index + 1}: ${artwork.description}`}
                aria-haspopup="dialog"
                onClick={() => setSelectedArtwork(index)}
              >
                <img src={artwork.src} alt={artwork.description} width={1536} height={index === 9 ? 2173 : 2048} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
        <dialog
          ref={dialogRef}
          className="art-lightbox"
          aria-label="Expanded artwork"
          onClose={() => setSelectedArtwork(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialogRef.current.close()
          }}
        >
          <button type="button" className="art-close" onClick={() => dialogRef.current.close()} aria-label="Close expanded artwork" autoFocus>×</button>
          {selectedArtwork !== null && (
            <img src={artworks[selectedArtwork].src} alt={artworks[selectedArtwork].description} />
          )}
        </dialog>
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

        .art-section {
          margin-top: 2rem;
        }

        h2.category {
          font-size: inherit;
          margin: 0 0 1rem;
        }

        .art-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .art-thumbnail {
          padding: 0;
          border: 0;
          background: transparent;
          cursor: zoom-in;
        }

        .art-thumbnail img {
          display: block;
          width: 100%;
          height: auto;
        }

        .art-thumbnail:focus-visible, .art-close:focus-visible {
          outline: 2px solid #112BAC;
          outline-offset: 4px;
        }

        .art-lightbox {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          box-sizing: border-box;
          margin: 0;
          padding: 3.5rem 1rem 1rem;
          border: 0;
          background: rgba(0, 0, 0, 0.92);
        }

        .art-lightbox[open] {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .art-lightbox::backdrop {
          background: rgba(0, 0, 0, 0.92);
        }

        .art-lightbox img {
          display: block;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .art-close {
          position: absolute;
          top: 0.5rem;
          right: 0.75rem;
          width: 44px;
          height: 44px;
          border: 0;
          background: transparent;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }

        @media (max-width: 480px) {
          .art-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.75rem;
          }
        }

        a {
          color: #112BAC;
        }
      `}</style>
    </div>
  )
}
