import Link from 'next/link'
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2024 - All rights reserved by IELTSprep.com
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}