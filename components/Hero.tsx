export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Content Column */}
      <div className="text-center lg:text-left space-y-8 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-teal-300">Award-Winning Creative Studio</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto lg:mx-0">
          Where Bold Ideas
          <span className="block mt-2 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Become Reality
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          We craft exceptional brand experiences across digital, print, and motion—transforming ambitious visions into market-leading creative work.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-col sm:flex-row gap-4 text-left max-w-2xl mx-auto lg:mx-0">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">Full-service creative capabilities</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">Multi-industry expertise</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button className="group px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View Our Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300">
            Start a Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-16 max-w-2xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-sm text-gray-400">Industry Awards</div>
          </div>
        </div>
      </div>

      {/* Visual Column - Floating Cards */}
      <div className="relative lg:h-[700px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Main showcase card */}
        <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
          <div className="aspect-[4/3] relative">
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop" 
              alt="Creative workspace with design tools and vibrant colors"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 border border-teal-400/30 rounded-full backdrop-blur-sm mb-3">
                <span className="text-xs font-medium text-teal-300">Featured Project</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brand Identity Redesign</h3>
              <p className="text-sm text-gray-300">Complete visual transformation for tech startup</p>
            </div>
          </div>
        </div>

        {/* Floating card 1 - Top right */}
        <div className="absolute top-0 right-0 w-48 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Floating card 2 - Bottom left */}
        <div className="absolute bottom-0 left-0 w-56 bg-gradient-to-br from-teal-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-5 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-900"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Expert Team</div>
              <div className="text-xs text-gray-300">15+ Specialists</div>
            </div>
          </div>
        </div>

        {/* Floating card 3 - Middle right */}
        <div className="hidden lg:block absolute top-1/2 -right-4 w-44 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-sm font-semibold text-white mb-1">Award Winner</div>
            <div className="text-xs text-gray-300">Best Creative Agency 2024</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom fade effect */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

  <style jsx>{`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
</section>
  );
}