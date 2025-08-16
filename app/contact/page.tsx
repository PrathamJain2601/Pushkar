"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LoadingSpinner } from "@/components/loading-spinner"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you within 24 hours.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-responsive-4xl text-foreground mb-4 sm:mb-6">Get In Touch</h1>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about our Ayurvedic products? We're here to help you on your wellness journey.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-responsive-2xl text-foreground mb-6 sm:mb-8">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-responsive-base text-foreground mb-2">
                        Our Location
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        123 Wellness Street
                        <br />
                        Ayurveda District
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-responsive-base text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">+91 98765 43210</p>
                      <p className="text-muted-foreground text-sm sm:text-base">+91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-responsive-base text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">info@ayurvedanaturals.com</p>
                      <p className="text-muted-foreground text-sm sm:text-base">support@ayurvedanaturals.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-responsive-base text-foreground mb-2">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card id="contact-form" className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-responsive-xl text-foreground">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                            className="bg-background border-border"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                            className="bg-background border-border"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your wellness goals or ask any questions about our products..."
                          rows={6}
                          className="bg-background border-border resize-none"
                          disabled={isSubmitting}
                        />
                      </div>

                      {submitStatus.type && (
                        <Alert
                          className={
                            submitStatus.type === "success"
                              ? "border-green-200 bg-green-50"
                              : "border-red-200 bg-red-50"
                          }
                        >
                          <AlertDescription
                            className={submitStatus.type === "success" ? "text-green-800" : "text-red-800"}
                          >
                            {submitStatus.message}
                          </AlertDescription>
                        </Alert>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-3 text-lg font-semibold btn-hover-lift"
                      >
                        {isSubmitting ? (
                          <>
                            <LoadingSpinner size="sm" />
                            <span className="ml-2">Sending...</span>
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-heading font-bold text-responsive-3xl text-foreground mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "Are your products certified organic?",
                  answer:
                    "Yes, all our products are certified organic and sourced from trusted farms that follow sustainable practices.",
                },
                {
                  question: "How long does shipping take?",
                  answer:
                    "We typically ship within 2-3 business days. Delivery usually takes 5-7 business days within India.",
                },
                {
                  question: "Do you offer international shipping?",
                  answer:
                    "Currently, we ship within India only. We're working on expanding to international markets soon.",
                },
                {
                  question: "Can I return products if I'm not satisfied?",
                  answer:
                    "Yes, we offer a 30-day return policy for unopened products. Contact us for return instructions.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-border/50 hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-heading font-semibold text-responsive-base text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
