import './App.css'
import burnoutImg from './assets/burnoutimage.png'

function Writing() {
  return (
    <div>
      <p className="writingHead">"When we pass over into how a knight thinks, how a slave feels, how a heroine behaves, and how an evildoer can regret or deny wrongdoing, we never come back quite the same; sometimes we're inspired, sometimes saddened, but we are always enriched." <br /> - Maryanne Wolf</p>
      <div className="burnoutarticle-container">
        <a href="https://www.cavalierdaily.com/article/2026/03/from-break-to-burnout-why-coming-back-to-school-can-be-more-difficult-than-anticipated" target="_blank" rel="noopener noreferrer">
          <div className="burnoutarticle">
            <img src={burnoutImg} alt="article" />
            <p>From Break to Burnout</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Writing