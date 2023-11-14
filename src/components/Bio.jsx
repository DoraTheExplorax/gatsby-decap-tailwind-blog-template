import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            bluesky
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata.author
  const social = data.site.siteMetadata.social

  return (
    <div className="content-wrapper">
      <hr className="mb-4" />
      <div className="bio flex flex-row mb-6 justify-center">
        <div className="me-6 flex flex-col items-center justify-center">
          <StaticImage
            className="rounded-full"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.jpg"
            width={75}
            height={75}
            quality={100}
            alt="Profile picture"
          />
          <div className="text-2xl font-bold font-allura">{author.name}</div>
        </div>
        <div className="self-center" style={{ maxWidth: "50%" }}>
          <p>{author?.summary || null}</p>
          <div className="pt-2">
            You can find him on{" "}
            <a
              className="text-sky-500 hover:text-sky-800"
              href={`https://bsky.app/profile/${social.bluesky}.bsky.social`}
              rel="noreferrer"
              target="_blank"
            >
              Bluesky
            </a>{" "}
            and{" "}
            <a
              className="text-sky-500 hover:text-sky-800"
              href={`https://instagram.com/${social.instagram}`}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
