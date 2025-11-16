import React from 'react'
import { Heart, Zap, Shield, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 relative overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        {/* Top CTA Section */}
        <div className='bg-gradient-to-r from-teal-600 via-teal-500 to-amber-400 rounded-2xl p-10 mb-16 text-center shadow-2xl shadow-teal-500/20 transform hover:-translate-y-1 transition-all duration-300'>
          <h2 className='text-4xl font-black mb-4 text-white drop-shadow'>Ready to Transform Your Wardrobe?</h2>
          <p className='text-slate-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed font-medium'>
            Browse our exclusive collection and start renting high-quality clothing for every occasion. 
            Affordable. Convenient. Sustainable.
          </p>
          <Link 
            to="/explore"
            className='inline-block bg-white text-teal-600 px-10 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-white/20 transition-all transform hover:-translate-y-0.5'
          >
            Start Renting Now
          </Link>
        </div>

        {/* Footer Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* About */}
          <div className='group'>
            <h3 className='text-xl font-bold mb-5 flex items-center gap-3 text-white group-hover:text-teal-400 transition-colors'>
              <Heart className='text-teal-400 group-hover:text-amber-400 transition-colors' size={24} />
              About RentStyle
            </h3>
            <p className='text-slate-300 text-sm leading-relaxed'>
              We make premium clothing accessible and affordable through our smart rental model. 
              Sustainability meets style, transforming the way you dress for every occasion.
            </p>
            <div className='mt-4 space-y-3'>
              <div className='flex items-center gap-3 text-slate-300 text-sm'>
                <Phone size={16} className='text-teal-400' />
                <span>+91 1234-5678-90</span>
              </div>
              <div className='flex items-center gap-3 text-slate-300 text-sm'>
                <Mail size={16} className='text-teal-400' />
                <span>hello@rentstyle.com</span>
              </div>
              <div className='flex items-center gap-3 text-slate-300 text-sm'>
                <MapPin size={16} className='text-teal-400' />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='group'>
            <h3 className='text-xl font-bold mb-5 flex items-center gap-3 text-white group-hover:text-teal-400 transition-colors'>
              <Zap className='text-amber-400 group-hover:text-teal-400 transition-colors' size={24} />
              Quick Links
            </h3>
            <ul className='space-y-3 text-slate-300 text-sm'>
              <li><Link to="/explore" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-teal-400 rounded-full'></span>
                Browse Clothing
              </Link></li>
              <li><Link to="/contact" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-teal-400 rounded-full'></span>
                Contact Us
              </Link></li>
              <li><a href="#" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-teal-400 rounded-full'></span>
                FAQs
              </a></li>
              <li><a href="#" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-teal-400 rounded-full'></span>
                Blog & Tips
              </a></li>
            </ul>
          </div>

          {/* Support */}
          <div className='group'>
            <h3 className='text-xl font-bold mb-5 flex items-center gap-3 text-white group-hover:text-teal-400 transition-colors'>
              <Shield className='text-emerald-400 group-hover:text-amber-400 transition-colors' size={24} />
              Support & Info
            </h3>
            <ul className='space-y-3 text-slate-300 text-sm'>
              <li><a href="#" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-amber-400 rounded-full'></span>
                Shipping Information
              </a></li>
              <li><a href="#" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-amber-400 rounded-full'></span>
                Returns & Exchanges
              </a></li>
              <li><a href="#" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-amber-400 rounded-full'></span>
                Fabric Care Guide
              </a></li>
              <li><a href="#" className='hover:text-teal-400 transition-colors duration-300 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-amber-400 rounded-full'></span>
                Privacy Policy
              </a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-slate-700 pt-10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div>
              <p className='text-slate-400 text-sm font-medium'>
                © 2025 <span className='text-teal-400 font-bold'>RentStyle</span> - Premium Clothing Rental. All rights reserved.
              </p>
              <p className='text-slate-500 text-xs mt-2'>Sustainable Fashion. Affordable Elegance. Infinite Possibilities.</p>
            </div>
            <div className='flex gap-6'>
              <a href="#" className='text-slate-400 hover:text-teal-400 transition-colors transform hover:-translate-y-1'>
                <Facebook size={20} />
              </a>
              <a href="#" className='text-slate-400 hover:text-teal-400 transition-colors transform hover:-translate-y-1'>
                <Instagram size={20} />
              </a>
              <a href="#" className='text-slate-400 hover:text-teal-400 transition-colors transform hover:-translate-y-1'>
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
