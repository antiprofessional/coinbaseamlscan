"use client"

import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoinbaseAMLScan() {
  return (
    <div className="overflow-hidden flex flex-col items-center min-h-screen bg-black text-white px-4 py-2">
      {/* Header with bottom border */}
      <div className="w-screen flex justify-between items-center mb-3 pl-5 pr-5 pt-1 pb-1 border-b border-gray-900">
        <div className="w-10 h-10">
          <Image
            src="/logo.jpg"
            alt="Coinbase Logo"
            width={30}
            height={30}
            className="rounded-full bg-white"
          />
        </div>
        <button className="text-white">
          <X className="w-8 h-8" />
        </button>
      </div>

      {/* Recommended Badge */}
      <div className="mb-10 pt-5">
        <div className="px-3 py-0.5 bg-transparent rounded text-blue-500 font-bold tracking-wider text-xs">
          RECOMMENDED
        </div>
      </div>

      {/* Shield Graphic - Simplified */}
      <div className="mb-6 pt-5">
        <Image
          src="/main.svg"
          alt="Security Shield Graphic"
          width={150}
          height={100}
          className="w-100 h-auto"
        />
      </div>

      {/* Title and Description */}
      <h1 className="text-2xl font-bold pt-4 text-center mb-4">
       Transaction Monitoring
      </h1>

      <p className="text-gray-500 text-sm text-center mb-8 max-w-xs">
        Ensure regulatory compliance by scanning wallets for suspicious crypto activity
      </p>

      {/* Connect Button */}
      <button className="w-full max-w-xs py-2 px-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-lg font-semibold mb-3">
        Connect Wallet
      </button>

      {/* Footer Text */}
      <p className="text-gray-400 text-center text-xs mt-1">
        Scanning crypto assets is subject to Coinbase's{" "}
        <Link href="#" className="text-blue-500">
          User Agreement
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-blue-500">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}
