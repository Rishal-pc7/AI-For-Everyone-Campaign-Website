import Link from "next/link"
import MobileNavbar from "./MobileNav"
import NavLinks from "./nav-links"
const Links=()=>{
   const navLinks = [
        { label: "About", href: "#about" },
        { label: "Programs", href: "#programs" },
        { label: "Partners", href: "#partners" },
    ]
    return(
      navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="block text-muted-foreground hover:text-secondary">
            {link.label}
        </Link>
    ))
    )
}
export default function Navbar() {
  return (
    <header className="pt-4 px-4 relative z-40">
      <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Slot */}
                    <div className="shrink-0">
                        <Link href="/" className="text-2xl font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
                            AI For Everyone
                        </Link>
                    </div>
                    {/* CTA - Right side */}
                    <div className="hidden md:flex items-center gap-4 ml-auto">
                        <Link href="#partners" className="px-6 py-2 rounded-lg border-2 border-transparent bg-linear-to-r from-secondary to-primary text-background font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all">
                            Join the Movement
                        </Link>
                    </div>
                   <NavLinks>
                        <Links/>
                   </NavLinks> 
                   <MobileNavbar>
                        <Links/>
                    </MobileNavbar> 
                </div>
            </div>
    </header>
  )
}
