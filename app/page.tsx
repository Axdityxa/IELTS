import Link from "next/link"
import { Rocket, MessageSquare, Settings2, Map, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "IELTS Prep - Boost Your Band Score",
  description: "Structured, Self-Paced IELTS Preparation Designed for a guaranteed 8 Band Score. Start your journey today!",
  keywords: ["IELTS", "exam preparation", "band score", "English test", "study abroad"],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rotate-45 border-2 border-primary bg-primary/10"></div>
          <span className="text-lg font-bold">IELTS Prep</span>
        </div>
        <nav className="hidden gap-4 md:flex">
          <Link className="text-sm font-medium transition-colors hover:text-primary" href="#">
            Why Us?
          </Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary" href="#">
            Solutions
          </Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary" href="#">
            About
          </Link>
        </nav>
        {/* Wrap the Sign In Button with Link */}
        <Link href="/main" passHref>
          <Button variant="default" className="bg-[#90C088] hover:bg-[#7ea875] transition-all duration-300">
            Sign In
          </Button>
        </Link>
      </header>
      <main className="container mx-auto grid min-h-[calc(100vh-4rem)] gap-4 px-4 py-6 md:grid-cols-2 md:gap-6">
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
          {/* Wrap the Assessment Button with Link */}
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
      </main>
    </div>
  )
}
