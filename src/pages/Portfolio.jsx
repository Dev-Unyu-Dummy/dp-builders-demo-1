import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import PlaceholderVisual from '../components/PlaceholderVisual.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import CTA from '../components/CTA.jsx'
import { portfolioCategories } from '../data/siteData.js'
import useReveal from '../hooks/useReveal.js'

const portfolioAssetKeys = ['projectRoom', 'heroBlueprint', 'galleryDetail']

export default function Portfolio() {
  useReveal()

  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Project categories ready for finished case studies."
        text="A structured portfolio layout for kitchen, bathroom, interiors, extensions, exterior works, tiling, carpentry and structural projects."
        imageTitle="Portfolio hero placeholder"
        imageLabel="Replace with strongest completed project"
      />

      <section className="bg-plaster py-16 text-deep sm:py-20" id="portfolio-categories">
        <div className="section-shell">
          <SectionIntro
            dark={false}
            eyebrow="Categories"
            title="Organised so future clients can find the work that matches their property."
            text="Each category includes a large image placeholder, project count and short positioning copy."
          />
          <div className="mt-10 grid gap-6">
            {portfolioCategories.map((category, index) => (
              <article
                key={category.title}
                className="reveal grid overflow-hidden border border-deep/10 bg-white shadow-lift lg:grid-cols-[0.92fr_1.08fr]"
              >
                <PlaceholderVisual
                  title={category.title}
                  label={category.accent}
                  assetKey={portfolioAssetKeys[index % portfolioAssetKeys.length]}
                  className={`min-h-[20rem] ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                />
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <span className="inline-flex bg-blueprint px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      {category.count}
                    </span>
                    <h2 className="mt-8 font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
                      {category.title}
                    </h2>
                    <p className="mt-5 max-w-2xl leading-8 text-deep/68">{category.description}</p>
                  </div>
                  <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-blueprint">
                    Discuss Similar Work <ArrowUpRight size={17} />
                  </a>
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
