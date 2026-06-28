import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import { galleryItems } from '../data/siteData.js'
import useReveal from '../hooks/useReveal.js'
import { getPublicAsset } from '../utils/publicAssets.js'

const galleryAssetKeys = ['galleryDetail', 'projectRoom', 'heroBlueprint']

export default function Gallery() {
  useReveal()

  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="A flexible image wall for finished work, site details and transformations."
        text="This page is intentionally built as a mixed-size gallery so future photography can keep its natural feel instead of being forced into identical boxes."
        imageTitle="Gallery hero placeholder"
        imageLabel="Replace with a broad project view"
      />

      <section className="bg-plaster py-16 text-deep sm:py-20" id="gallery-wall">
        <div className="section-shell">
          <SectionIntro
            dark={false}
            eyebrow="Previous Work"
            title="Non-uniform image placeholders for real construction photography."
            text="Use these slots for before-after details, finished rooms, garden works, structural preparation and close-up craftsmanship."
          />

          <div className="masonry mt-10">
            {galleryItems.map((item, index) => {
              const assetSrc = getPublicAsset(galleryAssetKeys[index % galleryAssetKeys.length])

              return (
                <article key={item.title} className="masonry-item reveal overflow-hidden border border-deep/10 bg-white shadow-lift">
                  <div
                    className={`image-placeholder ${item.size}`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(37, 7, 216, 0.72), rgba(10, 12, 20, 0.45)), url("${assetSrc}")`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className="absolute inset-0 bg-grid blueprint-grid opacity-30" />
                    <div className="absolute left-4 top-4 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blueprint">
                      {item.category}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-deep/82 p-5 text-white backdrop-blur">
                      <p className="font-display text-2xl font-bold uppercase leading-none">{item.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">
                        Placeholder image {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
