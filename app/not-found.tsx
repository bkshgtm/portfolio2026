import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-white/20 text-[11px] uppercase tracking-[0.25em] mb-4">404</p>
      <h1 className="font-display text-4xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-white/40 text-[14px] mb-8 text-center max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] text-[13px] font-semibold rounded-[3px] hover:bg-white/90 transition-all"
      >
        Back to Home →
      </Link>
    </div>
  )
}
