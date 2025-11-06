export default function Pricing() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Everything you need to establish your creative presence online. One-time investment, unlimited potential.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="mt-12 md:mt-16 flex justify-center">
      <div className="max-w-md w-full border-2 border-blue-600 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 md:px-10 lg:px-12 pt-8 md:pt-10 lg:pt-12 pb-6">
          <h3 className="text-2xl font-bold text-white">Creative Catalyst Package</h3>
          <p className="text-blue-100 text-sm mt-2">Everything to launch your creative vision</p>
        </div>

        {/* Card Content */}
        <div className="p-8 md:p-10 lg:p-12">
          {/* Price */}
          <div className="mb-4">
            <div className="text-5xl font-bold text-gray-900">$29</div>
            <p className="text-gray-600 mt-2">One-time payment</p>
          </div>

          {/* Features */}
          <div className="mt-6 mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Diverse portfolio across multiple industries</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Full-service creative capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Experienced team of creative professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Proven track record with measurable results</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Collaborative, client-focused process</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Award-winning work and industry recognition</span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=40edcc70-6b81-4ec8-ab5a-08aa83b7ddc3'}
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Get Your Website - $29
          </button>

          {/* Trust Badge */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Secure payment • Instant access • 30-day guarantee
          </p>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-12 md:mt-16">
      <p className="text-gray-600 mb-4">
        Ready to transform your creative vision into reality?
      </p>
      <p className="text-sm text-gray-500">
        Join dozens of brands already working with Catalyst Creative Studio
      </p>
    </div>
  </div>
</section>
  );
}