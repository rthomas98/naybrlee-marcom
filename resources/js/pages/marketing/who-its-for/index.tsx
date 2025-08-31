import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'

export default function WhoItsFor() {
    return (
        <MarketingLayout>
            <Head title="Who It's For - Naybrlee" />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold text-gray-900 font-['Poppins']">
                    Who It's For
                </h1>
            </div>
        </MarketingLayout>
    )
}
