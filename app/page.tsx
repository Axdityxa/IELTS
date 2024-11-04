'use client'

import Link from "next/link"
import { Rocket, MessageSquare, Settings2, Map, ClipboardCheck, Star, Users, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useRef } from "react"

export default function Home() {
  const testimonialRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const whyUsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rotate-45 border-2 border-primary bg-primary/10"></div>
          <span className="text-lg font-bold">IELTSPATH</span>
        </div>
        <nav className="hidden gap-4 md:flex">
          <button onClick={() => scrollToSection(whyUsRef)} className="text-sm font-medium transition-colors hover:text-primary">
            Why Us?
          </button>
          <button onClick={() => scrollToSection(testimonialRef)} className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </button>
          <button onClick={() => scrollToSection(pricingRef)} className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </button>
          <button onClick={() => scrollToSection(aboutRef)} className="text-sm font-medium transition-colors hover:text-primary">
            About
          </button>
          <button onClick={() => scrollToSection(faqRef)} className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </button>
        </nav>
        <Link href="/main" passHref>
          <Button variant="default" className="bg-[#90C088] hover:bg-[#7ea875] transition-all duration-300">
            Sign In
          </Button>
        </Link>
      </header>
      <main className="container mx-auto px-4 py-6">
        <section className="grid min-h-[calc(100vh-4rem)] gap-4 md:grid-cols-2 md:gap-6">
          <div className="relative flex flex-col justify-center space-y-3">
            <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
            <h1 className="relative text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
              Looking to Boost Your IELTS Band Score?
            </h1>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Experience Guaranteed Improvement!
            </p>
            <p className="text-base text-muted-foreground lg:text-lg">
              Structured, Self-Paced IELTS Preparation Designed for a guaranteed{" "}
              <span className="font-bold text-primary">8 Band</span> Score.
            </p>
            <Link href="/baseband-test" passHref>
              <Button 
                className="group relative mt-2 w-fit overflow-hidden bg-[#90C088] hover:bg-[#7ea875]" 
                size="lg"
              >
                <span className="relative z-10">Start Your Free IELTS Assessment!</span>
                <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform group-hover:translate-x-0"></div>
              </Button>
            </Link>
          </div>
          <div className="grid content-center gap-4">
            <div className="group relative rounded-lg bg-card p-4 shadow-sm transition-all hover:scale-[1.02] hover:bg-accent">
              <div className="absolute -right-2 -top-2 rounded-full bg-[#90C088] p-2 shadow-sm">
                <Rocket className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-semibold text-[#F4A261]">Guaranteed Results</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Achieve your desired band score improvement.
              </p>
            </div>
            
            <div className="group relative rounded-lg bg-card p-4 shadow-sm transition-all hover:scale-[1.02] hover:bg-accent">
              <div className="absolute -right-2 -top-2 rounded-full bg-[#90C088] p-2 shadow-sm">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-semibold text-[#F4A261]">Feedback</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Receive data-driven feedback to track your progress.
              </p>
            </div>
            
            <div className="group relative rounded-lg bg-card p-4 shadow-sm transition-all hover:scale-[1.02] hover:bg-accent">
              <div className="absolute -right-2 -top-2 rounded-full bg-[#90C088] p-2 shadow-sm">
                <Settings2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-semibold text-[#F4A261]">Adaptive Questions</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Engage with questions that adapt to your skill level.
              </p>
            </div>
            
            <div className="group relative rounded-lg bg-card p-4 shadow-sm transition-all hover:scale-[1.02] hover:bg-accent">
              <div className="absolute -right-2 -top-2 rounded-full bg-[#90C088] p-2 shadow-sm">
                <Map className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-semibold text-[#F4A261]">Learning Path</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Follow a structured learning path tailored to your needs.
              </p>
            </div>
            
            <div className="group relative rounded-lg bg-card p-4 shadow-sm transition-all hover:scale-[1.02] hover:bg-accent">
              <div className="absolute -right-2 -top-2 rounded-full bg-[#90C088] p-2 shadow-sm">
                <ClipboardCheck className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-semibold text-[#F4A261]">Sign Up & Assessment</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Take a sample test to determine your current band score.
              </p>
            </div>
          </div>
        </section>

        <section ref={whyUsRef} className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                Our team consists of experienced IELTS trainers who understand the exam inside out.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Proven Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                Our structured approach has helped thousands of students achieve their desired band scores.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                Study at your own pace with our online platform, accessible anytime, anywhere.
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={testimonialRef} className="py-16 bg-muted">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Suresh</CardTitle>
                <CardDescription>Band Score: 8.5</CardDescription>
              </CardHeader>
              <CardContent>
                "IELTSPATH helped me achieve my dream score. The personalized feedback was invaluable!"
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nitesh</CardTitle>
                <CardDescription>Band Score: 8.0</CardDescription>
              </CardHeader>
              <CardContent>
                "The adaptive questions really helped me focus on my weak areas. Highly recommended!"
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Rajesh</CardTitle>
                <CardDescription>Band Score: 7.5</CardDescription>
              </CardHeader>
              <CardContent>
                "I loved the structured learning path. It made my IELTS preparation journey so much easier."
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={pricingRef} className="py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            <Card className="w-full h-full flex flex-col">
              <CardHeader className="flex-none">
                <CardTitle>Basic</CardTitle>
                <CardDescription>For beginners</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <ul className="list-disc list-inside space-y-4 mb-6">
                  <li>Access to basic study materials</li>
                  <li>Weekly practice tests</li>
                  <li>Email support</li>
                </ul>
                <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b]">₹749/month</Button>
              </CardContent>
            </Card>
            <Card className="w-full h-full flex flex-col">
              <CardHeader className="flex-none">
                <CardTitle>Advanced</CardTitle>
                <CardDescription>For serious learners</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <ul className="list-disc list-inside space-y-4 mb-6">
                  <li>All Basic features</li>
                  <li>Personalized study plan</li>
                  <li>1-on-1 tutor sessions (2/month)</li>
                </ul>
                <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b]">₹1,499/month</Button>
              </CardContent>
            </Card>
            <Card className="w-full h-full flex flex-col">
              <CardHeader className="flex-none">
                <CardTitle>Premium</CardTitle>
                <CardDescription>For the best results</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <ul className="list-disc list-inside space-y-4 mb-6">
                  <li>All Advanced features</li>
                  <li>Unlimited tutor sessions</li>
                  <li>Mock speaking tests</li>
                  <li>Writing evaluation</li>
                </ul>
                <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b]">₹2,249/month</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={aboutRef} className="py-16 bg-muted">
          <h2 className="text-3xl font-bold mb-8 text-center">About IELTS Prep</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-[#F4A261]" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                To empower students worldwide to achieve their desired IELTS scores and unlock new opportunities.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-[#F4A261]" />
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                A diverse group of IELTS experts, educators, and technologists committed to your success.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Book className="h-8 w-8 text-[#F4A261]" />
                <CardTitle>Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                Combining cutting-edge technology with proven teaching methods for optimal learning outcomes.
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={faqRef} className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="w-full max-w-3xl mx-auto space-y-4">
            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>How long does it take to see improvement?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Most students see significant improvement within 4-6 weeks of consistent practice. However, individual results may vary based on starting level and study intensity.
              </p>
            </details>
            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Can I switch between plans?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.
              </p>
            </details>
            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Is there a money-back guarantee?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offer a 7-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, you can request a full refund within the first week.
              </p>
            </details>
            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>How do the 1-on-1 tutor sessions work?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Tutor sessions are conducted via video call. You can book your sessions through our platform and choose from available time slots that suit your schedule.
              </p>
            </details>
          </div>
        </section>
      </main>
    </div>
  )
}