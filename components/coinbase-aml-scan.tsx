"use client"

import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoinbaseAMLScan() {
  return (
    <div className="overflow-hidden flex flex-col items-center min-h-screen bg-black text-white px-4 py-2">
      {/* Header with bottom border */}
      <div className="overflow-hidden w-screen flex justify-between items-center mb-3 pl-5 pr-5 pt-1 pb-1 border-b border-gray-900">
        <div className="w-10 h-10">
          <Image
            src="/logo.jpg"
            alt="Logo"
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
      <div className="mb-10 pt-5 overflow-hidden">
        <div className="px-3 py-0.5 bg-transparent pt-5 pb-1 rounded text-blue-500 font-bold tracking-wider text-xs">
          RECOMMENDED
        </div>
      </div>

      {/* Shield Graphic - Simplified */}
      <div className="mb-6 pt-5">
        <Image
          src="/main-img.png"
          alt="Security Shield Graphic"
          width={250}
          height={250}
          className="w-250 h-auto"
        />
      </div>

      {/* Title and Description */}
      <h1 className="text-xl font-bold pt-4 text-center mb-4">
Anti-Money Laundering (AML) Scan
      </h1>

      <p className="text-gray-500 text-sm text-center mb-8 max-w-xs">
        Ensure regulatory compliance by scanning wallets for suspicious crypto activity
      </p>

      {/* Connect Button */}
      <button className="w-full max-w-xs py-2 px-3 rounded-full bg-blue-700 text-white text-lg font-semibold mb-3">
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
