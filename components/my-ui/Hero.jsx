import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background mb-12">
            <div className="my-container">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Welcome to My Personal Blog
                        </h1>
                        <p className="mx-auto max-w-[700px] md:text-xl">
                            Exploring ideas, sharing experiences, and learning together. Join me on this journey of discovery and growth.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button className="bg-info">Latest Posts</Button>
                        <Button variant="outline">About Me</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;