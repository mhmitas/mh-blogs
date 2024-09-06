import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const FeaturedPosts = () => {
    return (
        <section className="my-container mb-16">
            <h2 className="title-1 mb-8">Featured Posts</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative rounded-lg overflow-hidden shadow-lg dark:border bg-background">
                        <figure className='aspect-video bg-muted overflow-hidden'>
                            <Image
                                src={`/assets/1.jpg`}
                                alt="Blog post thumbnail"
                                width={500}
                                height={400}
                                className="object-cover w-full transition-transform group-hover:scale-105 duration-300"
                            />
                        </figure>
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