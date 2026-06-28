import { ArrowRight, CheckCircle2, ClipboardCheck, Clock, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import CTA from '../components/CTA.jsx'
import LogoMark from '../components/LogoMark.jsx'
import PlaceholderVisual from '../components/PlaceholderVisual.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import { featureIcons, portfolioCategories, processSteps, services, stats, testimonials } from '../data/siteData.js'
import useReveal from '../hooks/useReveal.js'

export default function Home() {
  useReveal()

  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden bg-deep pt-32 text-white sm:pt-8">
        <div className="absolute inset-0 bg-grid blueprint-grid opacity-25" />
        <div className="absolute left-1/2 top-28 hidden h-72 w-72 -translate-x-1/2 border border-white/10 bg-blueprint/20 blur-3xl lg:block" />
        <div className="section-shell relative grid min-h-[calc(92vh-9rem)] items-center gap-10 pb-12 lg:grid-cols-[1.20fr_0.80fr]">
          <div className="reveal">
            <p className="font-display text-2xl font-extrabold uppercase tracking-wide text-white">
              DP Builders
            </p>
            <p className="eyebrow">Property & Interior Development</p>
            <h1 className="display-title mt-4">
              Precise building work for sharper living spaces.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              DP Builders delivers kitchens, bathrooms, renovations, extensions,
              interiors, landscaping and structural preparation with a
              design-conscious, site-ready approach.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Plan Your Project</Button>
              <Button to="/portfolio" variant="secondary">
                Explore Portfolio <ArrowRight size={17} />
              </Button>
            </div>
          </div>

          <div className="reveal relative min-h-[32rem] lg:min-h-[42rem]">
            <PlaceholderVisual
              title="Hero image placeholder"
              label="Replace with project photography"
              assetKey="heroBlueprint"
              className="absolute inset-0 shadow-blueprint"
            />
            <div className="absolute -bottom-5 left-4 right-4 grid gap-3 border border-white/15 bg-deep/85 p-4 backdrop-blur sm:left-auto sm:right-8 sm:w-80">
              <p className="font-display text-3xl font-extrabold uppercase leading-none">
                Built around the brief.
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/10 bg-white/5 p-3"
                  >
                    <p className="font-display text-2xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-white/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-plaster py-16 text-deep sm:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionIntro
              dark={false}
              eyebrow="Company Profile"
              title="A disciplined build partner for homes that need more than a surface refresh."
              text="This placeholder profile introduces DP Builders as a practical, detail-led team for property improvements, interior development and exterior works across residential projects."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Measured planning", ClipboardCheck],
                ["Clean coordination", Clock],
                ["Durable finish", ShieldCheck],
              ].map(([title, Icon]) => (
                <div
                  key={title}
                  className="reveal border border-deep/10 bg-white p-5 shadow-lift"
                >
                  <Icon className="text-blueprint" size={28} />
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-deep/62">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer a clear scope.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-structural py-16 text-white sm:py-20"
        id="services-preview"
      >
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionIntro
              eyebrow="What We Build"
              title="Renovation, installation and structural capability under one roof."
              text="From smaller finish details to full property changes, the service list is designed for clients who need one reliable build conversation."
            />
            <Button
              to="/services"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              All Services
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service) => (
              <Link
                key={service.title}
                to="/services"
                className="reveal group border border-white/10 bg-soft p-5 transition hover:-translate-y-1 hover:border-blueprint hover:bg-blueprint"
              >
                <service.icon
                  size={30}
                  className="text-blue-200 transition group-hover:text-white"
                />
                <h3 className="mt-7 font-display text-2xl font-bold uppercase leading-none">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/62 group-hover:text-white/78">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="overflow-hidden bg-deep py-7 text-white">
        <div className="flex w-max animate-[marquee_100s_linear_infinite] duration gap-4 whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <span
              key={`${service.title}-${index}`}
              className="font-display text-4xl font-extrabold uppercase leading-none text-white/14 sm:text-6xl"
            >
              {service.title}
            </span>
          ))}
        </div>
      </section> */}

      <section className="bg-plaster py-16 text-deep sm:py-20">
        <div className="section-shell">
          <SectionIntro
            dark={false}
            eyebrow="Selected Categories"
            title="Portfolio organised by the kind of work clients ask for."
            text="Each category can later be connected to real case studies, project images and before-after details."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioCategories.slice(0, 6).map((category, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <Link
                  key={category.title}
                  to="/portfolio"
                  className="reveal group border border-deep/10 bg-white p-6 shadow-lift transition hover:-translate-y-1 hover:border-blueprint"
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="text-blueprint" size={30} />
                    <span className="bg-blueprint px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-extrabold uppercase leading-none">
                    {category.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-deep/62">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-structural py-16 text-white sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionIntro
            eyebrow="Process"
            title="Clear phases keep complex work understandable."
            text="The process below is placeholder copy, but it reflects the site rhythm a building client would expect from first visit to handover."
          />
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="reveal grid gap-5 border border-white/10 bg-soft p-5 sm:grid-cols-[5rem_1fr]"
              >
                <div className="font-display text-5xl font-extrabold text-blue-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase leading-none">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/65">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plaster py-16 text-deep sm:py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <PlaceholderVisual
              title="Gallery preview placeholder"
              label="Mixed project dimensions"
              assetKey="galleryDetail"
              className="reveal min-h-[32rem]"
            />
            <div className="reveal">
              <SectionIntro
                dark={false}
                eyebrow="Previous Work"
                title="A gallery made for real project photography."
                text="The gallery page uses variable-height image slots so future site photos do not need to be cropped into a rigid grid."
              />
              <div className="mt-8 grid gap-3">
                {testimonials.slice(0, 2).map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="border border-deep/10 bg-white p-5"
                  >
                    <CheckCircle2 className="text-blueprint" size={22} />
                    <p className="mt-4 text-sm leading-7 text-deep/70">
                      "{testimonial.quote}"
                    </p>
                    <p className="mt-4 font-bold">{testimonial.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/gallery">Open Gallery</Button>
                <Button
                  to="/testimonials"
                  variant="secondary"
                  className="border-deep/15 bg-deep text-white hover:bg-blueprint hover:text-white"
                >
                  Client Notes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
