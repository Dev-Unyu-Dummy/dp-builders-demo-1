import { ArrowRight } from 'lucide-react'
import Button from './Button.jsx'

export default function CTA() {
  return (
    <section className="bg-plaster py-16 sm:py-20">
      <div className="section-shell">
        <div className="reveal grid gap-8 border border-deep/10 bg-deep p-6 text-white shadow-lift sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Project Enquiry</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
              Ready to map the next phase?
            </h2>
            <p className="mt-4 max-w-2xl text-white/68">
              Share a few details about the property, the work required and your preferred timing. We will
              respond with a clear next step.
            </p>
          </div>
          <Button to="/contact" className="w-full sm:w-auto">
            Contact the Team <ArrowRight size={17} />
          </Button>
        </div>
      </div>
    </section>
  )
}
