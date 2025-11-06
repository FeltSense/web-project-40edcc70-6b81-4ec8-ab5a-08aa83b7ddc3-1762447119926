import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-block mb-4">
        <span className="text-sm font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">
          Our Services
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
        Creative Solutions That
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-teal-600 to-purple-600">
          Ignite Growth
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        From brand identity to digital experiences, we craft solutions that transform businesses and captivate audiences
      </p>
    </div>

    {/* Services Grid - Creative Staggered Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
      
      {/* Featured Service - Brand Strategy & Identity */}
      <div className="lg:col-span-2 lg:row-span-2 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="relative h-80 md:h-96 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/catalyst-brand-strategy/1200/800" 
                alt="Brand Strategy & Identity Design" 
                width={1200} 
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full mb-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-900">Featured Service</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Brand Strategy & Identity
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    We craft distinctive brand identities that resonate with your audience and stand out in crowded markets. From logo design to comprehensive brand guidelines, we build the foundation for lasting brand recognition.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Complete brand identity systems with logo, color palette, and typography</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Strategic positioning and messaging frameworks that connect</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Comprehensive brand guidelines for consistent application</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Brand refresh and evolution for established companies</span>
                </div>
              </div>

              <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>Explore Brand Services</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Web Design & Development */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="relative h-56 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/catalyst-web-design/800/600" 
                alt="Web Design & Development" 
                width={800} 
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Web Design & Development
                </h3>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Beautiful, high-performing websites that convert visitors into customers. We blend stunning design with cutting-edge technology.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Custom responsive websites</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">E-commerce solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">SEO optimization</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Marketing */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="relative h-56 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/catalyst-digital-marketing/800/600" 
                alt="Digital Marketing Strategy" 
                width={800} 
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Digital Marketing
                </h3>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Data-driven campaigns that amplify your reach and drive measurable results across all digital channels.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Social media management</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">PPC & paid advertising</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Email marketing campaigns</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Creation */}
      <div className="md:col-span-2 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative md:flex md:flex-row-reverse">
            <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/catalyst-content-creation/900/700" 
                alt="Content Creation & Storytelling" 
                width={900} 
                height={700}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent md:bg-gradient-to-l"></div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Content Creation & Storytelling
                </h3>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Compelling narratives that engage audiences and build emotional connections. From video production to copywriting, we tell stories that matter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Video production</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Copywriting & blogs</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Social media content</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300 self-start">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="relative h-56 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/catalyst-uiux-design/800/600" 
                alt="UI/UX Design" 
                width={800} 
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  UI/UX Design
                </h3>
              </div>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Intuitive interfaces that delight users and drive engagement. We design experiences that are both beautiful and functional.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">User research & testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Wireframing & prototyping</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-700">Mobile app design</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 md:mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl shadow-2xl">
        <div className="text-white text-left sm:text-center">
          <p className="text-lg md:text-xl font-semibold mb-1">Ready to transform your brand?</p>
          <p className="text-purple-100">Let's create something extraordinary together</p>
        </div>
        <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
          Start Your Project
        </button>
      </div>
    </div>
  </div>
</section>
  );
}