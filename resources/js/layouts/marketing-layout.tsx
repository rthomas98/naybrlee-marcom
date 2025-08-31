import { PropsWithChildren } from 'react'
import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'

export default function MarketingLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navigation */}
            <Navbar />
            
            {/* Main Content - Add padding-top to account for fixed navbar */}
            <main className="flex-grow pt-16 md:pt-18">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}