import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DashboardContent from '@/components/DashboardContent'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header />
      <DashboardContent />
      <Footer />
    </div>
  )
}