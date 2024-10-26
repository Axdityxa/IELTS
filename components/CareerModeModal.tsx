import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { Loader2 } from 'lucide-react'
  
  interface CareerModeModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export default function CareerModeModal({ isOpen, onClose }: CareerModeModalProps) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Career Mode Processing</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-center text-muted-foreground">
              
              We are still processing this feature. Please check back later!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }