'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Auth } from '@/lib/auth'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Bell, ChevronDown, Moon, Sun, User, Flame, LogOut } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

interface UserType {
  attributes: {
    email: string;
    [key: string]: any;
  };
}

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)
  const router = useRouter()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    checkAuthState()
  }, [])

  const checkAuthState = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setIsAuthenticated(true)
      setUser(user)
    } catch (error) {
      setIsAuthenticated(false)
      setUser(null)
    }
  }

  const handleSignOut = async () => {
    try {
      await Auth.signOut()
      setIsAuthenticated(false)
      setUser(null)
      router.push('/signin')
    } catch (error) {
      console.error('Error signing out: ', error)
    }
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">IELTS Prep</Link>
        <nav className="hidden md:flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">IELTS Exam Library <ChevronDown className="ml-1 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Reading</DropdownMenuItem>
              <DropdownMenuItem>Writing</DropdownMenuItem>
              <DropdownMenuItem>Listening</DropdownMenuItem>
              <DropdownMenuItem>Speaking</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">IELTS Tips <ChevronDown className="ml-1 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Listening Tips</DropdownMenuItem>
              <DropdownMenuItem>Reading Tips</DropdownMenuItem>
              <DropdownMenuItem>Speaking Tips</DropdownMenuItem>
              <DropdownMenuItem>Writing Tips</DropdownMenuItem>
              <DropdownMenuItem>IELTS Grammar</DropdownMenuItem>
              <DropdownMenuItem>Announcements</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost">IELTS Practice tests</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Live Lessons <ChevronDown className="ml-1 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Listening</DropdownMenuItem>
              <DropdownMenuItem>Reading</DropdownMenuItem>
              <DropdownMenuItem>Speaking</DropdownMenuItem>
              <DropdownMenuItem>Writing</DropdownMenuItem>
              <DropdownMenuItem>Study abroad</DropdownMenuItem>
              <DropdownMenuItem>Vocabulary</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center space-x-2 ml-4">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500">
              <Flame className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">0</span>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <Switch
            checked={isDarkMode}
            onCheckedChange={setIsDarkMode}
            aria-label="Toggle dark mode"
          />
          {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          {isAuthenticated ? (
            <>
              <Bell className="h-5 w-5 cursor-pointer" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center text-primary-foreground">
                      {user?.attributes?.email.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{user?.attributes?.email}</p>
                      <p className="text-xs text-muted-foreground">12:09 (GMT+05:30)</p>
                    </div>
                  </div>
                  <Progress value={90} className="h-2 w-full" />
                  <p className="px-2 py-1 text-xs text-muted-foreground">90% Profile completeness</p>
                  <DropdownMenuItem>
                    <Link href="/complete-profile" className="text-primary">Complete your profile</Link>
                  </DropdownMenuItem>
                  <div className="flex items-center justify-between px-2 py-1.5">
                    <span className="text-sm">0.00 USD</span>
                    <Button size="sm">Top Up Now</Button>
                  </div>
                  <DropdownMenuItem>My Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>My IELTS Prep Services</DropdownMenuItem>
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                  <DropdownMenuItem>Referral</DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button 
                variant="default" 
                onClick={() => router.push('/signup')}
              >
                Sign Up
              </Button>
              <Button 
                variant="outline" 
                onClick={() => router.push('/signin')}
              >
                Log In
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}