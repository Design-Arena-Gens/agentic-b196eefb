'use client'

import { useState } from 'react'

export default function Home() {
  const [dragActive, setDragActive] = useState(false)

  const pdfTools = [
    {
      title: 'Merge PDF',
      description: 'Combine multiple PDFs into one document',
      icon: '🔗',
      color: 'from-blue-500 to-cyan-500',
      illustration: (
        <div className="relative w-full h-48">
          <div className="absolute top-8 left-8 w-32 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform -rotate-12 animate-float"></div>
          <div className="absolute top-4 right-8 w-32 h-40 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-2xl transform rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      )
    },
    {
      title: 'Split PDF',
      description: 'Extract pages or split PDF into multiple files',
      icon: '✂️',
      color: 'from-purple-500 to-pink-500',
      illustration: (
        <div className="relative w-full h-48">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-2xl animate-pulse-slow">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/50"></div>
          </div>
          <div className="absolute top-12 left-4 w-16 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-xl transform -rotate-6 animate-float"></div>
          <div className="absolute top-12 right-4 w-16 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-xl transform rotate-6 animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
      )
    },
    {
      title: 'Compress PDF',
      description: 'Reduce file size without losing quality',
      icon: '🗜️',
      color: 'from-green-500 to-emerald-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-48 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-2xl animate-bounce-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-white/30 font-bold">↓</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'PDF to Word',
      description: 'Convert PDF to editable Word documents',
      icon: '📝',
      color: 'from-orange-500 to-red-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute left-8 w-32 h-40 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl transform -rotate-6 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">PDF</div>
          </div>
          <div className="absolute right-8 w-32 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-6 animate-float" style={{animationDelay: '1s'}}>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">DOC</div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl animate-pulse">→</div>
          </div>
        </div>
      )
    },
    {
      title: 'Word to PDF',
      description: 'Convert Word documents to PDF format',
      icon: '📄',
      color: 'from-indigo-500 to-purple-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute left-8 w-32 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform -rotate-6 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">DOC</div>
          </div>
          <div className="absolute right-8 w-32 h-40 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl transform rotate-6 animate-float" style={{animationDelay: '1s'}}>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">PDF</div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl animate-pulse">→</div>
          </div>
        </div>
      )
    },
    {
      title: 'PDF to JPG',
      description: 'Convert PDF pages to images',
      icon: '🖼️',
      color: 'from-yellow-500 to-orange-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-40 h-48 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg shadow-2xl animate-float">
            <div className="absolute inset-4 border-4 border-white/50 rounded flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Sign PDF',
      description: 'Add your signature to PDF documents',
      icon: '✍️',
      color: 'from-rose-500 to-pink-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-48 h-40 bg-gradient-to-br from-rose-400 to-pink-600 rounded-lg shadow-2xl animate-pulse-slow">
            <div className="absolute bottom-8 right-8 text-6xl">✍️</div>
          </div>
        </div>
      )
    },
    {
      title: 'Edit PDF',
      description: 'Edit text and images in your PDF',
      icon: '✏️',
      color: 'from-teal-500 to-cyan-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-40 h-48 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-lg shadow-2xl">
            <div className="absolute inset-6 space-y-2">
              <div className="h-2 bg-white/50 rounded"></div>
              <div className="h-2 bg-white/50 rounded w-3/4"></div>
              <div className="h-2 bg-white/50 rounded"></div>
              <div className="h-2 bg-white/50 rounded w-1/2"></div>
            </div>
          </div>
          <div className="absolute top-8 right-12 text-4xl animate-bounce-slow">✏️</div>
        </div>
      )
    },
    {
      title: 'Rotate PDF',
      description: 'Rotate pages in your PDF document',
      icon: '🔄',
      color: 'from-violet-500 to-purple-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-40 h-40 bg-gradient-to-br from-violet-400 to-purple-600 rounded-lg shadow-2xl animate-spin" style={{animationDuration: '8s'}}>
          </div>
          <div className="absolute text-6xl z-10">🔄</div>
        </div>
      )
    },
    {
      title: 'Protect PDF',
      description: 'Add password protection to your PDF',
      icon: '🔒',
      color: 'from-gray-600 to-gray-800',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-40 h-48 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg shadow-2xl animate-pulse-slow">
          </div>
          <div className="absolute text-7xl animate-bounce-slow">🔒</div>
        </div>
      )
    },
    {
      title: 'Unlock PDF',
      description: 'Remove password from protected PDFs',
      icon: '🔓',
      color: 'from-lime-500 to-green-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-40 h-48 bg-gradient-to-br from-lime-400 to-green-600 rounded-lg shadow-2xl animate-float">
          </div>
          <div className="absolute text-7xl animate-pulse">🔓</div>
        </div>
      )
    },
    {
      title: 'Add Page Numbers',
      description: 'Insert page numbers to your PDF',
      icon: '🔢',
      color: 'from-amber-500 to-yellow-500',
      illustration: (
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="absolute w-40 h-48 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg shadow-2xl">
            <div className="absolute bottom-4 right-4 text-3xl font-bold text-white/70">123</div>
          </div>
        </div>
      )
    }
  ]

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-30"></div>

        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-4xl">📄</div>
              <span className="text-2xl font-bold text-white">PDF<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tools</span></span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#tools" className="text-white hover:text-cyan-400 transition-colors">Tools</a>
              <a href="#features" className="text-white hover:text-cyan-400 transition-colors">Features</a>
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Professional PDF Tools
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Free & Easy to Use
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform, edit, and manage your PDF documents with our premium suite of tools.
            Fast, secure, and completely free.
          </p>

          {/* Upload Section */}
          <div
            className={`max-w-3xl mx-auto p-12 rounded-3xl glass-effect border-2 border-dashed transition-all ${
              dragActive ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/20 hover:border-white/40'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="text-8xl mb-6 animate-bounce-slow">📁</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Drop your PDF here</h3>
            <p className="text-gray-300 mb-6">or click to browse</p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
              Select PDF File
            </button>
            <p className="text-sm text-gray-400 mt-4">Your files are secure and automatically deleted after processing</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Tools Grid */}
      <section id="tools" className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          All PDF Tools You Need
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">Choose from our collection of powerful PDF tools</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pdfTools.map((tool, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-6 hover-lift cursor-pointer border border-white/10 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10">
                  {tool.illustration}
                </div>

                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-4xl">{tool.icon}</span>
                  <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                </div>

                <p className="text-gray-300 text-sm mb-4">{tool.description}</p>

                <button className={`w-full bg-gradient-to-r ${tool.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform group-hover:scale-105`}>
                  Choose File
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-bounce-slow">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-gray-300">Process your PDFs in seconds with our optimized algorithms</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-6 animate-pulse-slow">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">100% Secure</h3>
            <p className="text-gray-300">Your files are encrypted and automatically deleted after 1 hour</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-6 animate-float">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Works Everywhere</h3>
            <p className="text-gray-300">Access from any device, no installation required</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="glass-effect rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                10M+
              </div>
              <div className="text-gray-300">Files Processed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                5M+
              </div>
              <div className="text-gray-300">Happy Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500 mb-2">
                12
              </div>
              <div className="text-gray-300">PDF Tools</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-2">
                24/7
              </div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-3xl">📄</div>
                <span className="text-xl font-bold text-white">PDFTools</span>
              </div>
              <p className="text-gray-400">Professional PDF tools for everyone</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Merge PDF</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Split PDF</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Compress PDF</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Convert PDF</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PDFTools. All rights reserved. Made with ❤️ for better PDF experience.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
