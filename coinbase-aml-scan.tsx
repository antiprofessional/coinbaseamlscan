"use client"

import { X, Check, Lock } from "lucide-react"
import Link from "next/link"

export default function CoinbaseAMLScan() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <div className="w-6 h-6 bg-black rounded-full" />
        </div>
        <button className="text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Recommended Badge */}
      <div className="mb-16">
        <div className="px-3 py-1 bg-blue-900/40 rounded-md border border-blue-500">
          <span className="text-blue-500 text-xs font-semibold tracking-wide">RECOMMENDED</span>
        </div>
      </div>

      {/* Shield Graphic */}
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-blue-500 rounded-tl-full rounded-bl-full" />
          <div className="w-1/2 bg-gray-300 rounded-tr-full rounded-br-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
          <div className="absolute inset-0 border-8 border-blue-500 rounded-full" style={{ top: "-100%" }} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-black">
          <Check className="w-8 h-8 text-black" strokeWidth={3} />
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
          <div className="text-blue-500 font-bold text-base">
            <span className="grid grid-cols-2 gap-0.5">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </span>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
          <div className="bg-blue-600 p-1.5 rounded-sm">
            <Lock className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700" />
      </div>

      {/* Title and Description */}
      <h1 className="text-3xl font-bold text-center mb-3">
        Coinbase AML
        <br />
        Scan
      </h1>
      <p className="text-gray-400 text-base text-center mb-10 max-w-md">
        Advanced AML compliance and security for crypto transactions.
      </p>

      {/* Connect Button */}
      <button className="w-full max-w-md py-3 px-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-lg font-semibold mb-4">
        Connect Wallet
      </button>

      {/* Footer Text */}
      <p className="text-gray-400 text-center text-xs mt-2">
        Linking a Coinbase account is subject to Coinbase's{" "}
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
