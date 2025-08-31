import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'
import { ResidentsHero } from '@/components/marketing/ResidentsHero'
import { ResidentsChallenges } from '@/components/marketing/ResidentsChallenges'
import { ResidentsConvenience } from '@/components/marketing/ResidentsConvenience'
import { ResidentsFeatures } from '@/components/marketing/ResidentsFeatures'
import { ResidentsAmenities } from '@/components/marketing/ResidentsAmenities'
import { ResidentsTransformation } from '@/components/marketing/ResidentsTransformation'
import { ResidentsSecurity } from '@/components/marketing/ResidentsSecurity'
import { ResidentsOnboarding } from '@/components/marketing/ResidentsOnboarding'
import { ResidentsComparison } from '@/components/marketing/ResidentsComparison'
import { ResidentsFAQ } from '@/components/marketing/ResidentsFAQ'
import { ResidentsCTA } from '@/components/marketing/ResidentsCTA'

export default function Residents() {
    return (
        <MarketingLayout>
            <Head title="For Residents - Naybrlee" />
            <ResidentsHero />
            <ResidentsChallenges />
            <ResidentsConvenience />
            <ResidentsFeatures />
            <ResidentsAmenities />
            <ResidentsTransformation />
            <ResidentsSecurity />
            <ResidentsOnboarding />
            <ResidentsComparison />
            <ResidentsFAQ />
            <ResidentsCTA />
        </MarketingLayout>
    )
}
