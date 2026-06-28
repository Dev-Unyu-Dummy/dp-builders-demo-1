import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Button from '../components/Button.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import { company, services } from '../data/siteData.js'
import useReveal from '../hooks/useReveal.js'

export default function Contact() {
  useReveal()

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us what needs building, improving or repairing."
        text="Use the enquiry form as a placeholder for future form handling, CRM integration or direct email submission."
        imageTitle="Contact image placeholder"
        imageLabel="Replace with team or site photography"
        assetKey="galleryDetail"
      />

      <section className="bg-plaster py-16 text-deep sm:py-20" id="contact-form">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="reveal">
            <SectionIntro
              dark={false}
              eyebrow="Get In Touch"
              title="A clear brief is the best first tool."
              text="Add your location, service type, timeline and any notes about drawings, permissions or access."
            />
            <div className="mt-8 grid gap-3">
              {[
                [Phone, company.phone, `tel:${company.phone.replaceAll(' ', '')}`],
                [Mail, company.email, `mailto:${company.email}`],
                [MapPin, company.address, null],
              ].map(([Icon, label, href]) => {
                const content = (
                  <span className="flex items-center gap-3 border border-deep/10 bg-white p-4 text-sm font-semibold shadow-lift">
                    <Icon className="text-blueprint" size={20} />
                    {label}
                  </span>
                )

                return href ? (
                  <a key={label} href={href} className="transition hover:-translate-y-1">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>
            <p className="mt-6 border-l-4 border-blueprint pl-4 text-sm leading-7 text-deep/65">
              Opening hours: {company.hours}. Emergency availability and weekend surveys can be added here if
              required.
            </p>
          </aside>

          <form className="reveal border border-deep/10 bg-white p-5 shadow-lift sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-deep/65">
                Full name
                <input className="min-h-12 border border-deep/15 px-4 font-body text-base normal-case tracking-normal outline-none focus:border-blueprint" placeholder="Jane Smith" />
              </label>
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-deep/65">
                Email
                <input type="email" className="min-h-12 border border-deep/15 px-4 font-body text-base normal-case tracking-normal outline-none focus:border-blueprint" placeholder="jane@example.co.uk" />
              </label>
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-deep/65">
                Phone
                <input className="min-h-12 border border-deep/15 px-4 font-body text-base normal-case tracking-normal outline-none focus:border-blueprint" placeholder="+44 7..." />
              </label>
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-deep/65">
                Project type
                <select className="min-h-12 border border-deep/15 px-4 font-body text-base normal-case tracking-normal outline-none focus:border-blueprint">
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-deep/65">
              Project notes
              <textarea
                className="min-h-40 resize-y border border-deep/15 p-4 font-body text-base normal-case tracking-normal outline-none focus:border-blueprint"
                placeholder="Tell us about the property, desired works, timing and any drawings or references you already have."
              />
            </label>
            <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-xs leading-6 text-deep/52">
                Placeholder form only. Connect to email, API or CRM before production launch.
              </p>
              <Button type="button">
                Send Enquiry <Send size={17} />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
