import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    name: "Ashwagandha Capsules",
    description: "Natural stress relief and energy booster made from premium ashwagandha root extract",
    fullDescription:
      "Our premium Ashwagandha capsules are crafted from the finest quality Withania somnifera root extract, sourced directly from organic farms in India. This adaptogenic herb has been used for over 3,000 years in Ayurvedic medicine to help the body manage stress, boost energy levels, and promote overall vitality. Each capsule contains 500mg of standardized ashwagandha extract with 5% withanolides, the active compounds responsible for its therapeutic benefits.",
    price: "$29.99",
    image: "/ashwagandha-powder.png",
    category: "Stress Relief",
    benefits: [
      "Reduces cortisol levels and stress",
      "Boosts energy and stamina",
      "Improves sleep quality",
      "Supports immune function",
      "Enhances mental clarity",
      "Balances mood naturally",
    ],
    ingredients: [
      "Organic Ashwagandha Root Extract (500mg)",
      "Vegetarian Capsule (Cellulose)",
      "Rice Flour (Natural Filler)",
      "Magnesium Stearate (Flow Agent)",
    ],
    usage:
      "Take 1-2 capsules daily with warm water or milk, preferably after meals. For best results, use consistently for 2-3 months.",
    certifications: ["Organic", "Non-GMO", "Gluten-Free", "Vegan"],
  },
  {
    id: 2,
    name: "Turmeric Golden Milk",
    description: "Anti-inflammatory wellness blend with organic turmeric and warming spices",
    fullDescription:
      "Our Golden Milk blend combines the ancient wisdom of Ayurveda with modern nutritional science. This carefully crafted mixture features organic turmeric with enhanced bioavailability, complemented by traditional warming spices that have been used for centuries to promote wellness. The addition of black pepper increases curcumin absorption by up to 2000%, ensuring maximum therapeutic benefit from every serving.",
    price: "$24.99",
    image: "/turmeric-milk-spices.png",
    category: "Immunity",
    benefits: [
      "Powerful anti-inflammatory properties",
      "Supports immune system function",
      "Promotes digestive health",
      "Natural antioxidant protection",
      "Supports joint health",
      "Calming bedtime ritual",
    ],
    ingredients: [
      "Organic Turmeric Powder (Curcuma longa)",
      "Organic Ginger Powder",
      "Organic Cinnamon Powder",
      "Organic Black Pepper",
      "Organic Cardamom",
      "Organic Nutmeg",
    ],
    usage:
      "Mix 1 teaspoon with warm milk or plant-based milk. Add honey to taste. Best consumed in the evening for relaxation.",
    certifications: ["Organic", "Non-GMO", "Gluten-Free", "Vegan"],
  },
  {
    id: 3,
    name: "Triphala Powder",
    description: "Traditional digestive health and detox support from three sacred fruits",
    fullDescription:
      "Triphala, meaning 'three fruits' in Sanskrit, is one of the most revered formulations in Ayurvedic medicine. Our premium blend combines equal parts of Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula) - three fruits that work synergistically to support digestive health, natural detoxification, and overall wellness. This time-tested formula has been used for over 1,000 years to promote longevity and vitality.",
    price: "$19.99",
    image: "/triphala-powder-fruits.png",
    category: "Digestive Health",
    benefits: [
      "Supports healthy digestion",
      "Natural detoxification",
      "Rich in antioxidants",
      "Promotes regular elimination",
      "Supports eye health",
      "Balances all three doshas",
    ],
    ingredients: ["Organic Amalaki Fruit Powder", "Organic Bibhitaki Fruit Powder", "Organic Haritaki Fruit Powder"],
    usage:
      "Mix 1/2 to 1 teaspoon with warm water before bedtime. Start with smaller amounts and gradually increase as tolerated.",
    certifications: ["Organic", "Non-GMO", "Gluten-Free", "Vegan"],
  },
  {
    id: 4,
    name: "Brahmi Oil",
    description: "Mental clarity and hair nourishment oil infused with pure brahmi extract",
    fullDescription:
      "Our traditional Brahmi oil is prepared using the ancient Ayurvedic method of oil infusion, where fresh Brahmi leaves are slowly cooked in pure sesame oil to extract the herb's therapeutic properties. Brahmi (Bacopa monnieri) is renowned in Ayurveda as a powerful brain tonic that enhances memory, concentration, and mental clarity while also providing deep nourishment to hair and scalp.",
    price: "$34.99",
    image: "/brahmi-oil-bottle.png",
    category: "Mental Wellness",
    benefits: [
      "Enhances memory and concentration",
      "Reduces mental fatigue",
      "Promotes hair growth",
      "Nourishes scalp and prevents dandruff",
      "Calms the nervous system",
      "Supports restful sleep",
    ],
    ingredients: [
      "Organic Sesame Oil (Sesamum indicum)",
      "Fresh Brahmi Leaves Extract (Bacopa monnieri)",
      "Natural Vitamin E (Antioxidant)",
    ],
    usage:
      "For hair: Massage into scalp and hair, leave for 30 minutes, then wash. For mental wellness: Apply a few drops to temples and forehead before meditation or sleep.",
    certifications: ["Organic", "Non-GMO", "Chemical-Free", "Traditional Method"],
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-6 bg-muted/20 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/catalog" className="hover:text-primary transition-colors">
                Catalog
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted/20">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {product.category}
                  </Badge>
                  <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">{product.name}</h1>
                  <p className="text-2xl font-heading font-bold text-primary mb-6">{product.price}</p>
                </div>

                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {cert}
                    </Badge>
                  ))}
                </div>

                {/* Buy Now Button */}
                <div className="space-y-4">
                  <Link href="/contact#contact-form">
                    <Button size="lg" className="w-full md:w-auto px-12 py-4 text-lg font-semibold">
                      Buy Now - Contact Us
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Click to contact us for purchasing and delivery information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Full Description */}
              <Card className="lg:col-span-2">
                <CardContent className="p-8">
                  <h2 className="font-heading font-bold text-2xl mb-6 text-foreground">About This Product</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{product.fullDescription}</p>

                  <Separator className="my-8" />

                  <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">How to Use</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.usage}</p>
                </CardContent>
              </Card>

              {/* Benefits & Ingredients */}
              <div className="space-y-6">
                {/* Benefits */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Key Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Ingredients */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Ingredients</h3>
                    <ul className="space-y-2">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-muted-foreground text-sm">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
              You Might Also Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products
                .filter((p) => p.id !== product.id && p.category === product.category)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm">{relatedProduct.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-lg text-primary">{relatedProduct.price}</span>
                          <Link href={`/product/${relatedProduct.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {products.filter((p) => p.id !== product.id && p.category === product.category).length === 0 && (
              <div className="text-center">
                <p className="text-muted-foreground mb-6">Explore our full catalog for more amazing products</p>
                <Link href="/catalog">
                  <Button variant="outline" size="lg">
                    View All Products
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
