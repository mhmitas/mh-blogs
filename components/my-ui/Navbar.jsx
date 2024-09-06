import Link from "next/link"
import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "../ModeToggle"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Navbar() {

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Blogs", href: "/blogs" },
        { name: "About Me", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm dark:border-b">
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
                                    className="hover:text-info px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <ModeToggle />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://i.ibb.co/tJ8827Y/unnamed.png" alt="@mitas" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="md:hidden flex items-center gap-1">
                        <Avatar>
                            <AvatarImage src="https://i.ibb.co/tJ8827Y/unnamed.png" alt="@mitas" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
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
                                <ModeToggle />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}
