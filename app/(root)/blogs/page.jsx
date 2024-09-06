import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

// This would typically come from your API or CMS

export default function AllBlogs() {
    return (
        <div className="my-container max-w-screen-xl mx-auto mt-10 mb-16">
            <h1 className="text-3xl font-bold mb-8">My Blog Posts</h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(12).keys()].map((i) => (
                    <div key={i} className="group relative rounded-lg overflow-hidden shadow-lg dark:border bg-background max-w-md mx-auto">
                        <figure className='aspect-video bg-muted overflow-hidden'>
                            <Image
                                src={`https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062004.jpg?t=st=1725594170~exp=1725597770~hmac=c841441e071792f2dded23d4a3737172b85aed66b6d4cbe8d316be0c458acc5c&w=900`}
                                alt="Blog post thumbnail"
                                width={500}
                                height={400}
                                className="object-cover w-full transition-transform group-hover:scale-105 duration-300"
                            />
                        </figure>
                        <div className="p-4">
                            <p className='text-sm tracking-tight text-muted-foreground mb-1'>6 September, 2024</p>
                            <h3 className="text-lg font-bold">Blog Post Title {i}</h3>
                            <p className="text-sm text-foreground/80 mt-2 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button variant="link" className="mt-2 p-0" asChild>
                                <Link href="#">Read More</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}