import Link from "next/link"
import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export default function Navbar() {

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md shadow-sm z-50 dark:border-b">
            <div className="my-container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            MH BLOGS
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navItems.map(item => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button variant="ghost" size="icon" className="ml-4">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Profile</span>
                        </Button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <Button variant="ghost" size="icon" className="mr-2">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Profile</span>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                {navItems.map(item => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link href={item.href} className="w-full">
                                            {item.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}
