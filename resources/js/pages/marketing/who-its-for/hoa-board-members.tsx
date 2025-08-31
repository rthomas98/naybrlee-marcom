import { Head } from '@inertiajs/react'
import MarketingLayout from '@/layouts/marketing-layout'
import { HOABoardMembersHero } from '@/components/marketing/HOABoardMembersHero'
import { BoardMembersFeatures } from '@/components/marketing/BoardMembersFeatures'
import { BoardMembersSuccess } from '@/components/marketing/BoardMembersSuccess'
import { BoardMembersFeatureGrid } from '@/components/marketing/BoardMembersFeatureGrid'
import { BoardMembersDeepDive } from '@/components/marketing/BoardMembersDeepDive'
import { BoardMembersRoleBenefits } from '@/components/marketing/BoardMembersRoleBenefits'
import { BoardMembersDemoCTA } from '@/components/marketing/BoardMembersDemoCTA'

export default function HOABoardMembers() {
    return (
        <MarketingLayout>
            <Head title="For HOA Board Members - Naybrlee" />
            <HOABoardMembersHero />
            <BoardMembersFeatures />
            <BoardMembersSuccess />
            <BoardMembersFeatureGrid />
            <BoardMembersDeepDive />
            <BoardMembersRoleBenefits />
            <BoardMembersDemoCTA />
        </MarketingLayout>
    )
}
