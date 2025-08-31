import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'

export default function Pricing() {
    return (
        <MarketingLayout>
            <Head title="Pricing - Naybrlee" />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold text-gray-900 font-['Poppins']">
                    Pricing
                </h1>
            </div>
        </MarketingLayout>
    )
}
