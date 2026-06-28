import PageHero from '../components/PageHero.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import CTA from '../components/CTA.jsx'
import { processSteps, services } from '../data/siteData.js'
import useReveal from '../hooks/useReveal.js'

export default function Services() {
  useReveal()

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Building disciplines for inside, outside and everything between."
        text="A flexible service range for homeowners, landlords and design-led clients who need clean execution across multiple trades."
        imageTitle="Service image placeholder"
        imageLabel="Kitchen, bathroom, exterior or structural shot"
        assetKey="projectRoom"
      />

      <section className="bg-plaster py-16 text-deep sm:py-20" id="all-services">
        <div className="section-shell">
          <SectionIntro
            dark={false}
            eyebrow="Full Capability"
            title="Choose a single trade package or combine several into one coordinated project."
            text="All descriptions are placeholder copy and can be replaced with exact operating areas, licences, guarantees and material preferences."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="reveal group border border-deep/10 bg-white p-6 shadow-lift transition hover:-translate-y-1 hover:border-blueprint">
                <div className="grid size-14 place-items-center bg-blueprint text-white">
                  <service.icon size={28} />
                </div>
                <h2 className="mt-8 font-display text-3xl font-extrabold uppercase leading-none">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-deep/65">{service.summary}</p>
                <div className="mt-6 h-1 w-14 bg-blueprint transition group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-structural py-16 text-white sm:py-20">
        <div className="section-shell">
          <SectionIntro
            eyebrow="How Work Is Scoped"
            title="Practical planning before tools arrive on site."
            text="The early stages are built to reduce uncertainty, especially where several services meet in the same property."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="reveal border border-white/10 bg-soft p-5">
                <span className="font-display text-5xl font-extrabold text-blue-200">{index + 1}</span>
                <h3 className="mt-7 font-display text-3xl font-bold uppercase leading-none">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
