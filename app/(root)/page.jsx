import SubscribeNow from "@/components/my-ui/SubscribeNow"
import Hero from "@/components/my-ui/Hero"
import FeaturedPosts from "@/components/my-ui/FeaturedPosts"

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <Hero />
                <FeaturedPosts />
                <SubscribeNow />
            </main>
        </div>
    )
}