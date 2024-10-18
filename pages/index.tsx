import { NextPage } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-6xl font-bold mb-4">IELTS Exam Preparation</h1>
          <p className="text-xl text-gray-600 mb-12">Choose your learning mode</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Career Mode</h2>
              <p className="text-gray-600 mb-4">
                Structured learning path with career-focused IELTS preparation
              </p>
              <Link 
                href="/career-mode" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Start Career Mode
              </Link>
            </div>
            
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Normal Mode</h2>
              <p className="text-gray-600 mb-4">
                Flexible learning path for general IELTS preparation
              </p>
              <Link 
                href="/normal-mode" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Start Normal Mode
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/baseband-test" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-purple-700"
            >
              Give The BaseBand Test
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;