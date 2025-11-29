"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"

export default function MobileNavbar({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <Button variant="ghost" size="icon" className="md:hidden absolute right-4 z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} suppressHydrationWarning>
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </Button>
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="absolute w-full top-16 left-0 right-0 md:hidden bg-background border-b border-border p-4 space-y-4 rounded-lg mt-2">
                    {children}
                    <div className="md:hidden flex items-center gap-4 ml-auto">
                        <a href="#partners" className="px-6 py-2 rounded-lg border-2 border-transparent bg-linear-to-r from-secondary to-primary text-background font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all">
                            Join the Movement
                        </a>
                    </div>
                </div>
            )}
        </>

    )

}