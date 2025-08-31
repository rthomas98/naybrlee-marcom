import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'

export default function Residents() {
    return (
        <MarketingLayout>
            <Head title="Residents - Naybrlee" />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold text-gray-900 font-['Poppins']">
                    Residents
                </h1>
            </div>
        </MarketingLayout>
    )
}
