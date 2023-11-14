import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="flex-1 bg-base-300">
      <div className="flex justify-center mb-5 gap-2">
        <StaticImage
          src="../images/pira-logo.png"
          alt="d20 piratechnics"
          width={75}
        />
        <div className="text-center">
          <div className="pt-3 pb-1">
            © Devin Younge {new Date().getFullYear()}
          </div>
          <a
            style={{ fontSize: ".7em" }}
            href="https://devinyounge.com"
            target="_blank"
            rel="noreferrer"
          >
            Icon by Devin Younge
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
