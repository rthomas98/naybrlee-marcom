import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'
import { PropertyManagersHero } from '@/components/marketing/PropertyManagersHero'
import { PropertyManagersChallenges } from '@/components/marketing/PropertyManagersChallenges'
import { PropertyManagersDashboard } from '@/components/marketing/PropertyManagersDashboard'
import { PropertyManagersBenefits } from '@/components/marketing/PropertyManagersBenefits'
import { PropertyManagersGrowth } from '@/components/marketing/PropertyManagersGrowth'
import { PropertyManagersIntegrations } from '@/components/marketing/PropertyManagersIntegrations'
import { PropertyManagersOnboarding } from '@/components/marketing/PropertyManagersOnboarding'
import { PropertyManagersWhyChoose } from '@/components/marketing/PropertyManagersWhyChoose'
import { PropertyManagersPricing } from '@/components/marketing/PropertyManagersPricing'
import { PropertyManagersROI } from '@/components/marketing/PropertyManagersROI'
import { PropertyManagersFinalCTA } from '@/components/marketing/PropertyManagersFinalCTA'

export default function PropertyManagers() {
    return (
        <MarketingLayout>
            <Head title="For Property Managers - Naybrlee" />
            <PropertyManagersHero />
            <PropertyManagersChallenges />
            <PropertyManagersDashboard />
            <PropertyManagersBenefits />
            <PropertyManagersGrowth />
            <PropertyManagersIntegrations />
            <PropertyManagersOnboarding />
            <PropertyManagersWhyChoose />
            <PropertyManagersPricing />
            <PropertyManagersROI />
            <PropertyManagersFinalCTA />
        </MarketingLayout>
    )
}
