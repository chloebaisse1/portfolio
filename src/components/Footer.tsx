import { Box, Facebook, Twitter, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Box className="w-10 h-10" />

        <p className="font-bold">
          CHLOE
          <span className="text-primary">DEV</span>
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - Tous les droits sont réservés
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-primary" />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
