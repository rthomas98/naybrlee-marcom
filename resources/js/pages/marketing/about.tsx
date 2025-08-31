import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'
import { AboutHero } from '@/components/marketing/AboutHero'
import { FounderStory } from '@/components/marketing/FounderStory'
import { MissionVision } from '@/components/marketing/MissionVision'
import { ImpactStats } from '@/components/marketing/ImpactStats'
import { CoreValues } from '@/components/marketing/CoreValues'
import { TeamSection } from '@/components/marketing/TeamSection'
import { SocialResponsibility } from '@/components/marketing/SocialResponsibility'
import { AboutCTA } from '@/components/marketing/AboutCTA'

export default function About() {
    return (
        <MarketingLayout>
            <Head title="About Us - Naybrlee" />
            <AboutHero />
            <FounderStory />
            <MissionVision />
            <ImpactStats />
            <CoreValues />
            <TeamSection />
            <SocialResponsibility />
            <AboutCTA />
        </MarketingLayout>
    )
}
