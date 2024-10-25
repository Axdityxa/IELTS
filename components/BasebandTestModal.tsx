'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'

export default function BasebandTestModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [timer, setTimer] = useState(5)
  const router = useRouter()

  const handleStartTest = () => {
    router.push(`/baseband-test?timer=${timer}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Baseband Test Instructions</DialogTitle>
          <DialogDescription>
            Please read the following instructions carefully before starting the test:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>1. The test consists of three parts: Reading Passage 1, 2, and 3.</p>
          <p>2. Each part contains multiple questions based on the given passage.</p>
          <p>3. Answer all questions to the best of your ability.</p>
          <p>4. You can navigate between questions using the provided buttons.</p>
          <p>5. The timer will start as soon as you begin the test.</p>
          <div className="flex items-center gap-4">
            <Label htmlFor="timer">Test Duration (minutes):</Label>
            <Input
              id="timer"
              type="number"
              value={timer}
              onChange={(e) => setTimer(Number(e.target.value))}
              className="w-20"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleStartTest}>Start Test</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}