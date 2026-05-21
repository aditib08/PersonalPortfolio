import { useEffect, useState } from 'react'
import aditiPortrait from './assets/aditi-portrait.png'
import './App.css'

const HEADING_TEXT = "Hi, I'm Aditi"
const TYPING_SPEED_MS = 180
const REST_DELAY_MS = 550

function Home() {
  const [displayedText, setDisplayedText] = useState('')
  const [isHeadComplete, setIsHeadComplete] = useState(false)
  const [showRest, setShowRest] = useState(false)

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      index += 1
      setDisplayedText(HEADING_TEXT.slice(0, index))
      if (index >= HEADING_TEXT.length) {
        clearInterval(intervalId)
        setIsHeadComplete(true)
      }
    }, TYPING_SPEED_MS)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!isHeadComplete) return
    const timerId = setTimeout(() => setShowRest(true), REST_DELAY_MS)
    return () => clearTimeout(timerId)
  }, [isHeadComplete])

  return (
    <div className="homePage">
      <div className={`homeIntro ${isHeadComplete ? 'homeIntro--card' : ''}`}>
        <p className="homeHead" aria-label={HEADING_TEXT}>
          {displayedText}
          {!isHeadComplete && <span className="homeHeadCursor" aria-hidden="true" />}
        </p>
      </div>

      {showRest && (
        <div className="homeRest">
          <p className="homeQuote">
            "It's so easy to laugh, it's so easy to hate, it takes strength to be gentle and kind."
            <br /> <br /> The Smiths | I Know It's Over
          </p>
          <section className="homeAbout" aria-labelledby="home-about-heading">
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
                  alt="Aditi smiling outdoors in a park"
                  className="homeAboutPhotoImg"
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Home
