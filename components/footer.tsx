import { Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: The Mission */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter text-white">
              AI FOR EVERYONE
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A statewide initiative enabled by TinkerHub.
            </p>
            <p className="text-sm font-medium text-gradient">
              Kerala: Consumer or Creator?
            </p>
          </div>

          {/* Column 2: The Narrative */}
          <div className="space-y-4">
            <nav className="space-y-2">
              <Link
                href="#home"
                className="block text-sm text-muted-foreground hover:text-foreground transition-console"
              >
                Home
              </Link>
              <Link
                href="#ourApproach"
                className="block text-sm text-muted-foreground hover:text-foreground transition-console"
              >
                Our Philosophy
              </Link>
              <Link
                href="#yourRole"
                className="block text-sm text-muted-foreground hover:text-foreground transition-console"
              >
                Your Role
              </Link>
            </nav>
          </div>

          {/* Column 3: The Action */}
          <div className="space-y-4">
            <div className="font-mono-label text-xs text-console-gray opacity-60 mb-3">
              NETWORK
            </div>
            <nav className="space-y-2">
              <Link
                href="#partners"
                className="block text-sm text-muted-foreground hover:text-foreground transition-console"
              >
                Partner Ecosystem
              </Link>
              <Link
                href="mailto:partnerships@aiforeveryone.kerala.gov.in"
                className="block text-sm text-muted-foreground hover:text-foreground transition-console"
              >
                Sponsorship
              </Link>
              
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4">
            <div className="font-mono-label text-xs text-console-gray opacity-60 mb-3">
              SOCIAL LINKS
            </div>
            <div className="flex gap-3">
              <Link
                href="https://twitter.com/aiforeveryone"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded transition-console"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/aiforeveryone"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded transition-console"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/aiforeveryone"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded transition-console"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 TinkerHub Foundation.
          </p>
          <a
            href="https://github.com/aiforeveryone/license"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-console"
          >
            Open Source License.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
