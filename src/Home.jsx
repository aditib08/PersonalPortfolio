import { useEffect, useState } from 'react'
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
    <div>
      <p className="homeHead" aria-label={HEADING_TEXT}>
        {displayedText}
        {!isComplete && <span className="homeHeadCursor" aria-hidden="true" />}
      </p>
      <p className="homeBody">
        I'm a computer science student at the University of Virginia. I also enjoy writing and
        finding creative ways to express my ideas.
      </p>
    </div>
  )
}

export default Home
