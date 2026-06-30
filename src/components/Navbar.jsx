import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { company, navItems } from '../data/siteData.js'
import LogoMark from './LogoMark.jsx'
import { getPublicAsset } from '../utils/publicAssets.js'

export default function Navbar() {
  const logoSrc = getPublicAsset('brandLogo')
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
      isActive ? 'bg-white text-blueprint' : 'text-white/76 hover:bg-white/10 hover:text-white'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-7xl border border-white/15 bg-blueprint/50 shadow-lift backdrop-blur-lg">
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-5">
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img
              src={logoSrc}
              alt=""
              className="size-full object-cover w-32"
              loading="eager"
            />
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <a
            href={`tel:${company.phone.replaceAll(" ", "")}`}
            className="hidden min-h-11 items-center gap-2 border border-white/15 px-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-blueprint md:inline-flex"
          >
            <Phone size={16} />
            Call
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center border border-white/15 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 p-3 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
