'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Users, Trophy, LineChart } from 'lucide-react'
import Link from 'next/link'

function LearningCorridorPage() {
  const metrics = {
    activeStudents: 156,
    completedProjects: 45,
    regions: {
      colombo: 45,
      galle: 35,
      matara: 40,
      hambantota: 36
    },
    sdgInitiatives: {
      education: 23,
      marineLife: 15,
      health: 7
    },
    fundingProgress: {
      current: 125000,
      target: 500000,
      projects: {
        coastal: 45000,
        education: 50000,
        health: 30000
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold">Learning Corridor Dashboard</h1>
          <p className="text-muted-foreground mt-2">Youth Empowerment Through Self-Directed Learning</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
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
              <p className="text-3xl font-bold">{Object.values(metrics.sdgInitiatives).reduce((a, b) => a + b, 0)}</p>
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
              <p className="text-3xl font-bold">${metrics.fundingProgress.current.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href="/impact-dashboard">
              View Detailed Impact Metrics →
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

export default LearningCorridorPage