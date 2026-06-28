import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, navItems, services } from '../data/siteData.js'
import LogoMark from './LogoMark.jsx'

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="section-shell py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div>
            <LogoMark />
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/68">
              Placeholder company profile copy for a property and interior development studio delivering
              renovations, installations and structural improvements with a clean, precise site process.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/75">
              <a className="inline-flex items-center gap-3 hover:text-white" href={`tel:${company.phone.replaceAll(' ', '')}`}>
                <Phone size={17} /> {company.phone}
              </a>
              <a className="inline-flex items-center gap-3 hover:text-white" href={`mailto:${company.email}`}>
                <Mail size={17} /> {company.email}
              </a>
              <span className="inline-flex items-center gap-3">
                <MapPin size={17} /> {company.address}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold uppercase">Navigation</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="group inline-flex items-center gap-2 text-sm text-white/68 hover:text-white">
                  <ArrowUpRight size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold uppercase">Core Works</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.slice(0, 9).map((service) => (
                <span key={service.title} className="border border-white/12 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/45 sm:flex-row">
          <p>Copyright 2026 {company.name}. All rights reserved.</p>
          <p>Built for responsive local deployment.</p>
        </div>
      </div>
    </footer>
  )
}
