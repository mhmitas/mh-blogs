import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const FeaturedPosts = () => {
    return (
        <section className="my-container mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Posts</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative rounded-lg overflow-hidden shadow-lg bg-background">
                        <Image
                            src={`/placeholder.svg?height=200&width=400`}
                            alt="Blog post thumbnail"
                            width={400}
                            height={200}
                            className="object-cover w-full h-48 transition-transform group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Blog Post Title {i}</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button variant="link" className="mt-4 p-0">
                                Read More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedPosts;