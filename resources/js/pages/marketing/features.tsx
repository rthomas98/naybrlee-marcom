import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'
import { FeaturesHero } from '@/components/marketing/FeaturesHero'
import { FeaturesChallenges } from '@/components/marketing/FeaturesChallenges'
import { FeaturesCommandCenter } from '@/components/marketing/FeaturesCommandCenter'
import { FeaturesKeyBenefits } from '@/components/marketing/FeaturesKeyBenefits'
import { FeaturesTransformation } from '@/components/marketing/FeaturesTransformation'
import { FeaturesBenefits } from '@/components/marketing/FeaturesBenefits'
import { FeaturesOnboarding } from '@/components/marketing/FeaturesOnboarding'
import { FeaturesPricing } from '@/components/marketing/FeaturesPricing'
import { FeaturesFAQ } from '@/components/marketing/FeaturesFAQ'
import { FeaturesCTA } from '@/components/marketing/FeaturesCTA'
import { FeaturesBottomCTA } from '@/components/marketing/FeaturesBottomCTA'

export default function Features() {
    return (
        <MarketingLayout>
            <Head title="Features - Naybrlee" />
            <FeaturesHero />
            <FeaturesChallenges />
            <FeaturesCommandCenter />
            <FeaturesKeyBenefits />
            <FeaturesTransformation />
            <FeaturesBenefits />
            <FeaturesOnboarding />
            <FeaturesPricing />
            <FeaturesFAQ />
            <FeaturesCTA />
            <FeaturesBottomCTA />
        </MarketingLayout>
    )
}
