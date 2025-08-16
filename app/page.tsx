"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById("featured-products")
    catalogSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/ayurvedic-herbs.png')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">Healing through Nature</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Discover the ancient wisdom of Ayurveda with our premium collection of natural wellness products
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToCatalog}
            >
              Explore Our Products
            </Button>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="featured-products" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Featured Products</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Handpicked Ayurvedic remedies crafted with the finest natural ingredients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Ashwagandha Capsules",
                  description: "Natural stress relief and energy booster",
                  image: "/ashwagandha-powder.png",
                },
                {
                  name: "Turmeric Golden Milk",
                  description: "Anti-inflammatory wellness blend",
                  image: "/turmeric-milk-spices.png",
                },
                {
                  name: "Triphala Powder",
                  description: "Digestive health and detox support",
                  image: "/triphala-powder-fruits.png",
                },
                {
                  name: "Brahmi Oil",
                  description: "Mental clarity and hair nourishment",
                  image: "/brahmi-oil-bottle.png",
                },
              ].map((product, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">{product.name}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                      <Link href="/catalog">
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/catalog">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold bg-transparent">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Why Choose Ayurveda?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experience the time-tested benefits of natural healing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Natural & Pure",
                  description:
                    "100% natural ingredients sourced from trusted farms with no artificial additives or preservatives.",
                },
                {
                  title: "Ancient Wisdom",
                  description:
                    "Formulations based on 5000-year-old Ayurvedic principles and traditional healing practices.",
                },
                {
                  title: "Holistic Wellness",
                  description: "Addresses root causes rather than symptoms for complete mind-body-spirit balance.",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-heading font-semibold text-2xl mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Start Your Wellness Journey Today</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Connect with us to discover the perfect Ayurvedic solutions for your health goals
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
