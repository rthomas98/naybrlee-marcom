import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'

export default function Contact() {
    return (
        <MarketingLayout>
            <Head title="Contact Us - Naybrlee" />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold text-gray-900 font-['Poppins']">
                    Contact Us
                </h1>
            </div>
        </MarketingLayout>
    )
}
