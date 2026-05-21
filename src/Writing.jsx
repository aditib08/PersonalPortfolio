import './App.css'
import cavalierDailyImg from './assets/writing-cavalier-daily.png'
import opinionColumnsImg from './assets/writing-opinion-columns.png'
import filmReviewsImg from './assets/writing-film-reviews.png'

const WRITING_LINKS = [
  {
    title: 'Cavalier Daily',
    href: 'https://www.cavalierdaily.com/staff/aditi-burra',
    image: cavalierDailyImg,
    alt: 'Cavalier Daily articles by Aditi Burra',
    imageClass: 'writingBoxImg--cavalier',
  },
  {
    title: 'Opinion',
    href: 'https://didisarchive.substack.com/t/column',
    image: opinionColumnsImg,
    alt: "Opinion columns on didi's archive",
  },
  {
    title: 'Film Reviews',
    href: 'https://didisarchive.substack.com/t/film',
    image: filmReviewsImg,
    alt: "Film reviews on didi's archive",
  },
]

function Writing() {
  return (
    <div className="writingPage">
      <h1 className="pageOmbreTitle">Writing</h1>
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
  )
}

export default Writing
