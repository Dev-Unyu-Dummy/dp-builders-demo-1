import { getPublicAsset } from '../utils/publicAssets.js'

export default function LogoMark({ compact = false, className = '' }) {
  const logoSrc = getPublicAsset('brandLogo')

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="DP Builders logo placeholder">
      <div className="w-32 place-items-center text-white">
        {logoSrc ? (
          <img src={logoSrc} alt="" className="size-full object-cover" loading="eager" />
        ) : (
          <span className="font-display text-xl font-extrabold leading-none">DP</span>
        )}
      </div>
      {!compact && (
        <div className="leading-none">
          <p className="font-display text-2xl font-extrabold uppercase tracking-wide text-white">DP Builders</p>
          {/* <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-blue-100">
            Logo placeholder
          </p> */}
        </div>
      )}
    </div>
  )
}
