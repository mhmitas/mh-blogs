import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SubscribeNow = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="my-container">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                        <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Subscribe to my newsletter to receive the latest blog posts and updates.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Input
                                className="max-w-lg flex-1"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeNow;