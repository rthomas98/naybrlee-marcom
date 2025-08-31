import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'
import { Hero } from '@/components/marketing/Hero'
import { Features } from '@/components/marketing/Features'
import { UseCases } from '@/components/marketing/UseCases'
import { RoleNavigation } from '@/components/marketing/RoleNavigation'
import { KeyBenefits } from '@/components/marketing/KeyBenefits'
import { ValueProposition } from '@/components/marketing/ValueProposition'
import { CallToAction } from '@/components/marketing/CallToAction'

export default function Home() {
    return (
        <MarketingLayout>
            <Head title="Naybrlee - Smarter Neighborhoods. Simplified HOA." />
            <Hero />
            <Features />
            <UseCases />
            <RoleNavigation />
            <KeyBenefits />
            <ValueProposition />
            <CallToAction />
        </MarketingLayout>
    )
}