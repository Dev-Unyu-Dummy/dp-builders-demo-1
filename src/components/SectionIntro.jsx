export default function SectionIntro({ eyebrow, title, text, align = 'left', dark = true }) {
  const alignment = align === 'centre' ? 'mx-auto text-center' : ''
  return (
    <div className={`max-w-5xl ${alignment}`}>
      {eyebrow && <p className={dark ? 'eyebrow' : 'font-display text-sm font-bold uppercase tracking-[0.22em] text-blueprint'}>{eyebrow}</p>}
      <h2
        className={`mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-6xl ${
          dark ? 'text-white' : 'text-deep'
        }`}
      >
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-8 ${dark ? 'text-white/68' : 'text-deep/70'}`}>{text}</p>}
    </div>
  )
}
