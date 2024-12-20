'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Users, Trophy, LineChart } from 'lucide-react'
import Link from 'next/link'

export default function LearningCorridorDashboard() {
  // Example metrics - these would later come from your backend
  const metrics = {
    activeStudents: 156,
    completedProjects: 23,
    sdgImpacts: {
      education: 78,
      health: 45,
      marine: 34
    },
    fundingProgress: 125000
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold">Learning Corridor Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Empowering Youth Through Self-Directed Learning
          </p>
        </div>
      </header>

      {/* Key Metrics */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Active Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{metrics.activeStudents}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Completed Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{metrics.completedProjects}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                SDG Initiatives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {Object.values(metrics.sdgImpacts).reduce((a, b) => a + b, 0)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Funding Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">${metrics.fundingProgress.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Link to Impact Dashboard */}
      <section className="container mx-auto px-4 py-8">
        <Button asChild>
          <Link href="/impact-dashboard">
            View Detailed Impact Metrics →
          </Link>
        </Button>
      </section>
    </div>
  )
}
