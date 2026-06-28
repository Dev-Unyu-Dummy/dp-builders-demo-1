import { Link } from 'react-router-dom'

export default function Button({ to, children, variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'secondary'
      ? 'border border-white/15 bg-white/10 text-white hover:bg-white/15'
      : 'border border-blueprint bg-blueprint text-white shadow-blueprint hover:bg-white hover:text-blueprint'

  const classes = `inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] transition ${styles} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
