import './App.css'

function LinkIcon() {
  return (
    <svg className="projectLinkIcon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="projectGithubIcon" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.523 2 12 2Z"
      />
    </svg>
  )
}

function ProjectCard({ title, projectUrl, githubUrl, bullets, previewImage, previewAlt, brandPreview, tags }) {
  const brandStyle = brandPreview
    ? {
        '--brand-bg': brandPreview.background ?? '#f8f9fb',
        '--brand-text': brandPreview.textColor ?? '#222021',
        '--brand-logo-scale': String(brandPreview.logoScale ?? 1),
      }
    : undefined

  return (
    <article className="projectCard">
      <header className="projectCardHeader">
        <h2 className="projectCardTitle">{title}</h2>
        {projectUrl && (
          <a
            href={projectUrl}
            className="projectCardLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
          >
            <LinkIcon />
          </a>
        )}
      </header>

      <div className="projectCardBody">
        <ul className="projectCardBullets">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div
          className={brandPreview ? 'projectPreview projectPreviewBrand' : 'projectPreview'}
          style={brandStyle}
        >
          {brandPreview ? (
            <div
              className={[
                'projectBrandPreview',
                !brandPreview.tagline && 'projectBrandPreviewNoTagline',
                brandPreview.textOverImage && 'projectBrandPreviewTextOverImage',
              ]
                .filter(Boolean)
                .join(' ')}
              style={brandStyle}
            >
              {brandPreview.textOverImage ? (
                <>
                  <p className="projectBrandName projectBrandNameSpacer" aria-hidden="true">
                    {brandPreview.name}
                  </p>
                  <p className="projectBrandName">{brandPreview.name}</p>
                  <div className="projectBrandLogoWrap">
                    <img
                      src={brandPreview.logo}
                      alt=""
                      className="projectBrandLogo"
                      aria-hidden="true"
                    />
                  </div>
                  {brandPreview.tagline && (
                    <p className="projectBrandTagline">{brandPreview.tagline}</p>
                  )}
                </>
              ) : (
                <>
                  <p className="projectBrandName">{brandPreview.name}</p>
                  <div className="projectBrandLogoWrap">
                    <img
                      src={brandPreview.logo}
                      alt=""
                      className="projectBrandLogo"
                      aria-hidden="true"
                    />
                  </div>
                  {brandPreview.tagline && (
                    <p className="projectBrandTagline">{brandPreview.tagline}</p>
                  )}
                </>
              )}
            </div>
          ) : previewImage ? (
            <img src={previewImage} alt={previewAlt || title} className="projectPreviewImg" />
          ) : (
            <div className="projectPreviewPlaceholder" aria-hidden="true">
              <p className="projectPreviewHeading">Project preview</p>
              <p>Add a screenshot or diagram of your work here.</p>
            </div>
          )}
        </div>
      </div>

      <footer className="projectCardFooter">
        {githubUrl && (
          <a
            href={githubUrl}
            className="projectGithubLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} on GitHub`}
          >
            <GitHubIcon />
          </a>
        )}
        <div className="projectTags">
          {tags.map((tag) => (
            <span key={tag} className="projectTag">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  )
}

export default ProjectCard
