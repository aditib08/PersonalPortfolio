import { useEffect, useState } from 'react'
import aditiPortrait from './assets/aditi-portrait.png'
import './App.css'

const HEADING_TEXT = "Hi, I'm Aditi"
const TYPING_SPEED_MS = 180

function Home() {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      index += 1
      setDisplayedText(HEADING_TEXT.slice(0, index))
      if (index >= HEADING_TEXT.length) {
        clearInterval(intervalId)
        setIsComplete(true)
      }
    }, TYPING_SPEED_MS)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="homePage">
      <div className="homeIntro">
        <p className="homeHead" aria-label={HEADING_TEXT}>
          {displayedText}
          {!isComplete && <span className="homeHeadCursor" aria-hidden="true" />}
        </p>
        {isComplete && (
          <p className="homeQuote">
            "It's so easy to laugh, it's so easy to hate, it takes strength to be gentle and kind."
            <br /> <br /> The Smiths | I Know It's Over
          </p>
        )}
      </div>
      {isComplete && (
        <section className="homeAbout homeAbout--visible" aria-labelledby="home-about-heading">
          <div className="homeAboutLayout">
            <div className="homeAboutText">
              <h2 id="home-about-heading" className="homeAboutTitle">
                About Me
              </h2>
              <p className="homeBody">
                I'm a computer science student at the University of Virginia. I'm interested in
                pursuing a career in product development and product strategy. I also enjoy writing
                and finding creative ways to express my ideas.
              </p>
            </div>
            <div className="homeAboutPhoto">
              <img
                src={aditiPortrait}
                className="homeAboutPhotoImg"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home
