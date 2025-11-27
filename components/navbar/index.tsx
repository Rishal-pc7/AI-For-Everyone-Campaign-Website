import ClientNavbar from "./client-navbar"
import NavLinks from "./nav-links"

export default function Navbar() {
  return (
    <header className="pt-4 px-4 relative z-40">
      <ClientNavbar>
        <div className="text-2xl font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
          AI For Everyone
        </div>
      </ClientNavbar>
      <NavLinks />
    </header>
  )
}
