import { useEffect, useState } from 'react'
import './App.css'
import cavalierDailyImg from './assets/writing-cavalier-daily.png'
import blogImg from './assets/writing-opinion-columns.png'

const PAGE_REST_DELAY_MS = 550

const WRITING_LINKS = [
  {
    title: 'Cavalier Daily',
    href: 'https://www.cavalierdaily.com/staff/aditi-burra',
    image: cavalierDailyImg,
    alt: 'Cavalier Daily articles by Aditi Burra',
    imageClass: 'writingBoxImg--cavalier',
  },
  {
    title: 'Blog',
    href: 'https://didisarchive.substack.com/',
    image: blogImg,
    alt: "didi's archive on Substack",
  },
]

function Writing() {
  const [showRest, setShowRest] = useState(false)

  useEffect(() => {
    const timerId = setTimeout(() => setShowRest(true), PAGE_REST_DELAY_MS)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="writingPage">
      <h1 className="pageOmbreTitle">Writing</h1>
      {showRest && (
        <div className="pageRest">
          <p className="writingHead">
            "When we pass over into how a knight thinks, how a slave feels, how a heroine behaves, and how an evildoer can regret or deny wrongdoing, we never come back quite the same; sometimes we're inspired, sometimes saddened, but we are always enriched."
            <br /> <br /> Maryanne Wolf | Reader, Come Home
          </p>

          <div className="writingBoxes">
            {WRITING_LINKS.map(({ title, href, image, alt, imageClass }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="writingBoxLink"
              >
                <article className="writingBox">
                  <img
                    src={image}
                    alt={alt}
                    className={imageClass ? `writingBoxImg ${imageClass}` : 'writingBoxImg'}
                  />
                  <p className="writingBoxTitle">{title}</p>
                </article>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Writing
