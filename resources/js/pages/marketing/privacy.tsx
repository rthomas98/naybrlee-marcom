import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'

export default function Privacy() {
    return (
        <MarketingLayout>
            <Head title="Privacy Policy - Naybrlee" />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold text-gray-900 font-['Poppins']">
                    Privacy Policy
                </h1>
            </div>
        </MarketingLayout>
    )
}
