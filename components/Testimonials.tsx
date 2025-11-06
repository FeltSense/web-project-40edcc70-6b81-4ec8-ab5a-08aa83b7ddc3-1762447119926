export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 overflow-hidden">
  {/* Dynamic gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
  
  {/* Animated accent elements */}
  <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Section header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6">
        <span className="text-2xl">💬</span>
        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          CLIENT TESTIMONIALS
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Trusted by{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
          Industry Leaders
        </span>
      </h2>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Don't just take our word for it. Here's what our clients say about working with Catalyst Creative Studio.
      </p>
    </div>

    {/* Testimonials grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      
      {/* Testimonial 1 */}
      <div className="group relative bg-white rounded-2xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-4 text-xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>
          
          {/* Testimonial text */}
          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "Catalyst transformed our entire digital presence. Within 3 months, we saw a <strong className="text-gray-900">47% increase in qualified leads</strong> and our conversion rate doubled. Their strategic approach to brand positioning was exactly what we needed."
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <img 
              src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg"
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">Sarah Mitchell</div>
              <div className="text-sm text-gray-600 mt-1">VP of Marketing</div>
              <div className="text-sm text-gray-500">TechVenture Solutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative bg-white rounded-2xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-4 text-xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>
          
          {/* Testimonial text */}
          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "We were struggling with an outdated brand identity that didn't reflect our innovation. Catalyst delivered a complete rebrand that <strong className="text-gray-900">increased customer engagement by 65%</strong> and helped us secure $2M in new contracts. Absolutely game-changing."
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <img 
              src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100"
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">Marcus Chen</div>
              <div className="text-sm text-gray-600 mt-1">CEO & Founder</div>
              <div className="text-sm text-gray-500">Innovate Labs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative bg-white rounded-2xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-4 text-xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>
          
          {/* Testimonial text */}
          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "The team at Catalyst didn't just design a website—they crafted an experience. Our <strong className="text-gray-900">bounce rate dropped by 52%</strong> and average session time tripled. Their attention to user experience and conversion optimization is unmatched."
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <img 
              src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg"
              alt="Jennifer Rodriguez"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-100"
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">Jennifer Rodriguez</div>
              <div className="text-sm text-gray-600 mt-1">Director of Digital Strategy</div>
              <div className="text-sm text-gray-500">Horizon Enterprises</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="group relative bg-white rounded-2xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-4 text-xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>
          
          {/* Testimonial text */}
          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "Working with Catalyst was like having a creative powerhouse on our team. They helped us launch our product with a campaign that generated <strong className="text-gray-900">10,000+ pre-orders in the first week</strong>. Their strategic thinking and execution are world-class."
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <img 
              src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
              alt="David Thompson"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-cyan-100"
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">David Thompson</div>
              <div className="text-sm text-gray-600 mt-1">Product Manager</div>
              <div className="text-sm text-gray-500">NextGen Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="group relative bg-white rounded-2xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-4 text-xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>
          
          {/* Testimonial text */}
          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "Catalyst's content strategy revolutionized our social media presence. We went from <strong className="text-gray-900">5,000 to 85,000 followers in 6 months</strong>, and our engagement rate is now 8x higher than industry average. They truly understand modern digital marketing."
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <img 
              src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_1280.jpg"
              alt="Emily Watson"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100"
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">Emily Watson</div>
              <div className="text-sm text-gray-600 mt-1">Head of Communications</div>
              <div className="text-sm text-gray-500">Urban Lifestyle Co.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="group relative bg-white rounded-2xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-4 text-xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>
          
          {/* Testimonial text */}
          <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            "From concept to execution, Catalyst exceeded every expectation. Their video production and brand storytelling helped us <strong className="text-gray-900">close 3 enterprise deals worth $5M+</strong>. They don't just create content—they create business results."
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <img 
              src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg"
              alt="Robert Kim"
              className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100"
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">Robert Kim</div>
              <div className="text-sm text-gray-600 mt-1">Chief Revenue Officer</div>
              <div className="text-sm text-gray-500">CloudScale Systems</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16 md:mt-20">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 rounded-2xl border border-gray-200">
        <div className="text-left">
          <div className="text-2xl font-bold text-gray-900 mb-2">Ready to transform your brand?</div>
          <div className="text-gray-600">Join hundreds of satisfied clients who've accelerated their growth with Catalyst.</div>
        </div>
        <button className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
          Start Your Project →
        </button>
      </div>
    </div>
  </div>
</section>
  );
}