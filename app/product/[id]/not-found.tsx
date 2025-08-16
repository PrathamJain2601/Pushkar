import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">Product Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sorry, we couldn't find the product you're looking for. It may have been moved or is no longer available.
            </p>
            <div className="space-x-4">
              <Link href="/catalog">
                <Button size="lg">Browse All Products</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
