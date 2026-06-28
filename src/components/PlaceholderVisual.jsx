import { getPublicAsset } from '../utils/publicAssets.js'

export default function PlaceholderVisual({
  title,
  label,
  className = '',
  pattern = 'grid',
  assetKey = 'heroBlueprint',
}) {
  const assetSrc = getPublicAsset(assetKey)

  return (
    <div
      className={`image-placeholder ${className}`}
      style={
        assetSrc
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(37, 7, 216, 0.72), rgba(10, 12, 20, 0.45)), url("${assetSrc}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }
          : undefined
      }
    >
      <div className={pattern === 'grid' ? 'absolute inset-0 bg-grid blueprint-grid opacity-35' : 'absolute inset-0'} />
      <div className="absolute inset-x-5 bottom-5 z-10 border border-white/20 bg-deep/75 p-4 backdrop-blur">
        <p className="font-display text-2xl font-bold uppercase leading-none text-white">{title}</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-100">{label}</p>
      </div>
    </div>
  )
}
