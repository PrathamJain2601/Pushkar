import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-primary mb-4">AyurVeda Naturals</h3>
            <p className="text-muted-foreground leading-relaxed">
              Healing through nature with premium Ayurvedic products crafted for your wellness journey.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/catalog" className="block text-muted-foreground hover:text-primary transition-colors">
                Catalog
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Follow us for wellness tips</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AyurVeda Naturals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
