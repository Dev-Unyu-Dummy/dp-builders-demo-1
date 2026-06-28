const APPROVED_PUBLIC_ASSETS = Object.freeze({
  brandLogo: '/logo.webp',
  heroBlueprint: '/assets/placeholders/blueprint-hero.svg',
  projectRoom: '/assets/placeholders/project-room.svg',
  galleryDetail: '/assets/placeholders/gallery-detail.svg',
})

const SAFE_PUBLIC_PATH = /^\/[a-zA-Z0-9/_-]+\.(avif|webp|png|jpe?g|svg)$/i

function assertSafePublicPath(path) {
  if (!SAFE_PUBLIC_PATH.test(path) || path.includes('..') || path.includes('//')) {
    throw new Error(`Unsafe public asset path configured: ${path}`)
  }
}

Object.values(APPROVED_PUBLIC_ASSETS).forEach(assertSafePublicPath)

export function getPublicAsset(assetKey) {
  if (!Object.prototype.hasOwnProperty.call(APPROVED_PUBLIC_ASSETS, assetKey)) {
    return null
  }

  return APPROVED_PUBLIC_ASSETS[assetKey]
}
