import './App.css'
import burnoutImg from './assets/burnoutimage.png'
import indiadayImg from './assets/indiaday.png'

function Writing() {
  return (
    <div className="writingPage">
      <h1 className="pageOmbreTitle">Writing</h1>
      <p className="writingHead">
        "When we pass over into how a knight thinks, how a slave feels, how a heroine behaves, and how an evildoer can regret or deny wrongdoing, we never come back quite the same; sometimes we're inspired, sometimes saddened, but we are always enriched."
        <br /> - Maryanne Wolf
      </p>

      <div className="articles-container">
        <a href="https://www.cavalierdaily.com/article/2026/03/from-break-to-burnout-why-coming-back-to-school-can-be-more-difficult-than-anticipated" target="_blank" rel="noopener noreferrer">
          <div className="article-card">
            <img src={burnoutImg} alt="From Break to Burnout" />
            <p>From Break to Burnout</p>
          </div>
        </a>

        <a href="https://www.cavalierdaily.com/article/2026/04/india-day-celebrates-strong-arts-and-a-stronger-community" target="_blank" rel="noopener noreferrer">
          <div className="article-card">
            <img src={indiadayImg} alt="India Day" />
            <p>India Day</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Writing