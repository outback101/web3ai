'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Star, Shield, Zap, FileText } from 'lucide-react'

export function NftClaimPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const handleConnectWallet = () => {
    // Implement wallet connection logic here
    setIsWalletConnected(true)
  }

  const handleClaimNFT = () => {
    // Implement NFT claiming logic here
    alert('NFT Claimed!')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NFT Claim</h1>
          <Button onClick={handleConnectWallet} variant={isWalletConnected ? "outline" : "default"}>
            <Wallet className="mr-2 h-4 w-4" />
            {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="NFT Preview"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-4">Exclusive NFT Collection</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Be part of this groundbreaking digital art collection. Claim your unique NFT now!
            </p>
            <Button size="lg" onClick={handleClaimNFT}>
              Claim Your NFT
            </Button>
          </div>
        </div>
      </section>

      {/* About the NFT */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="NFT Artwork"
              width={300}
              height={300}
              className="rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">About the NFT</h2>
              <p className="mb-4">This unique NFT is part of a limited edition collection, featuring stunning digital artwork that pushes the boundaries of creativity and technology. Each piece is verifiably unique and stored on the blockchain.</p>
              <Button asChild>
                <Link href="/whitepaper.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Whitepaper
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Creator */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">About the Creator</h2>
              <p>Our artist, Jane Doe, is a renowned digital creator known for her innovative approach to NFT art. With over a decade of experience in digital media, Jane&apos;s work has been featured in major online galleries and digital art exhibitions.</p>
            </div>
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Creator Portrait"
              width={300}
              height={300}
              className="rounded-lg shadow-xl order-1 md:order-2"
            />
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Holder Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Star className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Exclusive Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Gain entry to VIP digital events and exhibitions featuring top artists in the NFT space.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Community Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Join a vibrant community of collectors and artists, with opportunities for collaboration and networking.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Future Drops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get priority access to future NFT drops and special editions from our curated list of artists.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NFT Claim. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}