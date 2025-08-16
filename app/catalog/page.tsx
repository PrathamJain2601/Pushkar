import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Ashwagandha Capsules",
    description: "Natural stress relief and energy booster made from premium ashwagandha root extract",
    price: "$29.99",
    image: "/ashwagandha-powder.png",
    category: "Stress Relief",
    benefits: ["Reduces stress", "Boosts energy", "Improves sleep quality"],
  },
  {
    id: 2,
    name: "Turmeric Golden Milk",
    description: "Anti-inflammatory wellness blend with organic turmeric and warming spices",
    price: "$24.99",
    image: "/turmeric-milk-spices.png",
    category: "Immunity",
    benefits: ["Anti-inflammatory", "Immune support", "Digestive health"],
  },
  {
    id: 3,
    name: "Triphala Powder",
    description: "Traditional digestive health and detox support from three sacred fruits",
    price: "$19.99",
    image: "/triphala-powder-fruits.png",
    category: "Digestive Health",
    benefits: ["Digestive support", "Natural detox", "Antioxidant rich"],
  },
  {
    id: 4,
    name: "Brahmi Oil",
    description: "Mental clarity and hair nourishment oil infused with pure brahmi extract",
    price: "$34.99",
    image: "/brahmi-oil-bottle.png",
    category: "Mental Wellness",
    benefits: ["Mental clarity", "Hair nourishment", "Stress relief"],
  },
  {
    id: 5,
    name: "Neem Capsules",
    description: "Natural blood purifier and skin health support with organic neem leaf extract",
    price: "$22.99",
    image: "/placeholder-qnj6f.png",
    category: "Skin Health",
    benefits: ["Blood purification", "Skin health", "Natural detox"],
  },
  {
    id: 6,
    name: "Amla Powder",
    description: "Vitamin C rich superfood powder for immunity and hair health",
    price: "$18.99",
    image: "/amla-fruit-powder.png",
    category: "Immunity",
    benefits: ["High in Vitamin C", "Hair health", "Antioxidant power"],
  },
  {
    id: 7,
    name: "Guduchi Tablets",
    description: "Immune system booster and fever reducer from the divine nectar plant",
    price: "$26.99",
    image: "/guduchi-tablets-ayurvedic.png",
    category: "Immunity",
    benefits: ["Immune boost", "Fever reduction", "Liver support"],
  },
  {
    id: 8,
    name: "Moringa Powder",
    description: "Nutrient-dense superfood powder packed with vitamins and minerals",
    price: "$21.99",
    image: "/moringa-powder.png",
    category: "Nutrition",
    benefits: ["Nutrient dense", "Energy boost", "Antioxidant rich"],
  },
]

const categories = [
  "All",
  "Stress Relief",
  "Immunity",
  "Digestive Health",
  "Mental Wellness",
  "Skin Health",
  "Nutrition",
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">Our Product Catalog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our complete collection of premium Ayurvedic products, each carefully crafted for your wellness
              journey
            </p>
          </div>
        </section>

        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="aspect-square overflow-hidden bg-muted/20">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <span className="font-heading font-bold text-lg text-primary">{product.price}</span>
                      </div>

                      <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{product.description}</p>

                      {/* Benefits */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.benefits.slice(0, 2).map((benefit, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                          {product.benefits.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{product.benefits.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={`/product/${product.id}`}>
                        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our Ayurvedic experts are here to help you find the perfect products for your unique wellness needs
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Get Expert Guidance
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
