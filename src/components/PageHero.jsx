import Button from './Button.jsx'
import PlaceholderVisual from './PlaceholderVisual.jsx'

export default function PageHero({ eyebrow, title, text, imageTitle, imageLabel, assetKey = 'heroBlueprint' }) {
  return (
    <section className="relative overflow-hidden bg-deep pb-16 pt-32 text-white sm:pt-36 lg:pb-24">
      <div className="absolute inset-0 bg-grid blueprint-grid opacity-20" />
      <div className="section-shell relative grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title mt-4">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact">Start a Project</Button>
            <Button to="/portfolio" variant="secondary">
              View Work
            </Button>
          </div>
        </div>
        <PlaceholderVisual
          title={imageTitle}
          label={imageLabel}
          assetKey={assetKey}
          className="reveal min-h-[22rem] sm:min-h-[28rem]"
        />
      </div>
    </section>
  )
}
