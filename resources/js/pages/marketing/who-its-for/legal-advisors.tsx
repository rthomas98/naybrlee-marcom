import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'
import { LegalAdvisorsHero } from '@/components/marketing/LegalAdvisorsHero'
import { LegalAdvisorsChallenges } from '@/components/marketing/LegalAdvisorsChallenges'
import { LegalAdvisorsAI } from '@/components/marketing/LegalAdvisorsAI'
import { LegalAdvisorsTools } from '@/components/marketing/LegalAdvisorsTools'
import { LegalAdvisorsDashboard } from '@/components/marketing/LegalAdvisorsDashboard'
import { LegalAdvisorsROI } from '@/components/marketing/LegalAdvisorsROI'
import { LegalAdvisorsTrust } from '@/components/marketing/LegalAdvisorsTrust'
import { LegalAdvisorsSecurity } from '@/components/marketing/LegalAdvisorsSecurity'
import { LegalAdvisorsIntegration } from '@/components/marketing/LegalAdvisorsIntegration'
import { LegalAdvisorsPricing } from '@/components/marketing/LegalAdvisorsPricing'
import { LegalAdvisorsCTA } from '@/components/marketing/LegalAdvisorsCTA'

export default function LegalAdvisors() {
    return (
        <MarketingLayout>
            <Head title="For Legal Advisors - Naybrlee" />
            <LegalAdvisorsHero />
            <LegalAdvisorsChallenges />
            <LegalAdvisorsAI />
            <LegalAdvisorsTools />
            <LegalAdvisorsDashboard />
            <LegalAdvisorsROI />
            <LegalAdvisorsTrust />
            <LegalAdvisorsSecurity />
            <LegalAdvisorsIntegration />
            <LegalAdvisorsPricing />
            <LegalAdvisorsCTA />
        </MarketingLayout>
    )
}
