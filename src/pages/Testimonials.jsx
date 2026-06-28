import { Star } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import { testimonials } from '../data/siteData.js'
import useReveal from '../hooks/useReveal.js'

export default function Testimonials() {
  useReveal()

  return (
    <main>
      <PageHero
        eyebrow="Testimonials"
        title="Client feedback placeholders with room for real proof."
        text="Use this page for verified quotes, project locations, service labels and future review platform links."
        imageTitle="Client story placeholder"
        imageLabel="Replace with people, room or detail shot"
        assetKey="projectRoom"
      />

      <section className="bg-plaster py-16 text-deep sm:py-20">
        <div className="section-shell">
          <SectionIntro
            dark={false}
            eyebrow="Client Notes"
            title="Short quotes that connect finished work with the experience of getting there."
            text="The current copy is placeholder content written in UK English and can be replaced once real reviews are available."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="reveal border border-deep/10 bg-white p-6 shadow-lift">
                <div className="flex gap-1 text-blueprint" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-7 text-lg leading-8 text-deep/76">"{testimonial.quote}"</p>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-deep/10 pt-5">
                  <div>
                    <h2 className="font-display text-3xl font-bold uppercase leading-none">{testimonial.name}</h2>
                    <p className="mt-2 text-sm text-deep/55">{testimonial.location}</p>
                  </div>
                  <span className="bg-blueprint px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {testimonial.service}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
