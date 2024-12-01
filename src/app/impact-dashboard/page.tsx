'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Target, Globe, Heart, Droplet } from 'lucide-react'
import Link from 'next/link'

const ImpactDashboard: React.FC = () => {
  // Example impact data - would come from your backend
  const impactData = {
    sdg4_education: {
      studentsReached: 156,
      coursesCompleted: 423,
      skillsCertified: 89,
      projectsDelivered: 34
    },
    sdg3_health: {
      programsLaunched: 12,
      beneficiaries: 245,
      wellnessScore: 87,
      communityEngagement: 67
    },
    sdg14_marine: {
      projectsInitiated: 8,
      wasteReduced: 1250, // in kg
      awarenessReached: 890,
      coastlineProtected: 12 // in km
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/learning-corridor">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Learning Corridor
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">SDG Impact Dashboard</h1>
          </div>
        </div>
      </header>

      {/* SDG 4 - Education Impact */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <Target className="h-6 w-6 text-blue-600" />
            SDG 4: Quality Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Students Engaged</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{impactData.sdg4_education.studentsReached}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Courses Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{impactData.sdg4_education.coursesCompleted}</p>
              </CardContent>
            </Card>
            {/* Add more education metrics cards */}
          </div>
        </div>

        {/* SDG 3 - Health Impact */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-red-600" />
            SDG 3: Health & Well-being
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Programs Launched</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{impactData.sdg3_health.programsLaunched}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Beneficiaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{impactData.sdg3_health.beneficiaries}</p>
              </CardContent>
            </Card>
            {/* Add more health metrics cards */}
          </div>
        </div>

        {/* SDG 14 - Marine Life Impact */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <Droplet className="h-6 w-6 text-blue-400" />
            SDG 14: Life Below Water
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Marine Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{impactData.sdg14_marine.projectsInitiated}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Waste Reduced (kg)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{impactData.sdg14_marine.wasteReduced}</p>
              </CardContent>
            </Card>
            {/* Add more marine metrics cards */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImpactDashboard