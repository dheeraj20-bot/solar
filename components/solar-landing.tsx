import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MenuIcon, Check, User, Sun } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function SolarLanding() {
  return (
    <div className=" relative">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Background"
        width={1920}
        height={1080}
        className=" hidden md:absolute md:block  inset-0 w-full h-full  object-center object-cover"
        priority
      />
      <Image
        src="/hero2.jpeg"
        alt="Background"
        width={1920}
        height={1080}
        className=" absolute md:hidden  inset-0 w-full h-full  object-top object-contain"
        priority
      />
      
      {/* Desktop Navigation */}
      <header className="hidden md:block fixed top-0 w-full z-30 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <Link href="#" className="flex flex-col">
              <span className="text-[#FF6B00] text-2xl font-bold">TECHNOLOGIC</span>
              <span className="text-sm text-[#FF6B00]">WORLD NEED MORE TECHNOLOGY</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-gray-700 hover:text-gray-900">Zonnepanelen</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Thuisbatterij</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Laadpaal</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Brain</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Over TECHNOLOGIC</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">FAQ</Link>
            </div>
            <Button className="bg-[#FF6B00] hover:bg-[#E05D00] text-white">
              Bereken voordeel
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Icon */}
      <div className="md:hidden absolute top-4 right-4 z-20">
        <Button variant="ghost" size="icon" className="text-white rounded-full bg-black/20">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative pt-64  md:py-32 pb-0 md:pl-20 ">

        <div className=" max-w-5xl">
          <div className="bg-white rounded-t-[2rem] md:rounded-2xl md:max-w-xl">
            {/* Tabs */}
            <div className="flex gap-8 px-6 pt-6 pb-4">
              <button className="flex flex-col items-center gap-2 flex-1">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Zonnepanelen</span>
                <div className="h-0.5 w-full bg-[#FF6B00] rounded-full" />
              </button>
              <button className="flex flex-col items-center gap-2 flex-1">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Thuisbatterij</span>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              <div className="md:hidden mb-6">
                <Link href="#" className="flex flex-col">
                  <span className="text-[#FF6B00] text-2xl font-bold">TECHNOLOGIC</span>
                  <span className="text-sm text-[#FF6B00]">WORLD NEED MORE TECHNOLOGY</span>
                </Link>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Bereken binnen 1 minuut uw voordeel met zonnepanelen.
              </h1>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>
                    Bespaar gemiddeld <strong>€ 1.250</strong> per jaar
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>
                    Terugverdientijd van gem. <strong>7 jaar</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>
                    Binnen <strong>4 weken</strong> geïnstalleerd
                  </span>
                </div>
              </div>

              <Input
                placeholder="Adres"
                className="mb-4 border-2 border-[#FF6B00] rounded-xl h-12"
              />
              
              <Button className="w-full bg-[#FF6B00] hover:bg-[#E05D00] text-white font-medium rounded-xl h-12 mb-4">
                Bereken uw voordeel
              </Button>

              <p className="text-center text-sm text-gray-600 mb-4">
                Meer dan <strong>30.000 klanten</strong> gingen u voor
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                 <Sun className="w-6 h-6"/>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-green-500" />
                  ))}
                </div>
                <span className="font-bold">4.0</span>
              </div>

              {/* Bottom Navigation - Mobile Only */}
              <div className="flex justify-between text-sm text-gray-600 pt-4 border-t md:hidden">
                <Link href="#" className="hover:text-gray-900">Over TECHNOLOGIC</Link>
                <Link href="#" className="hover:text-gray-900">Reviews</Link>
                <Link href="#" className="hover:text-gray-900">FAQ</Link>
                <Link href="#" className="hover:text-gray-900">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}