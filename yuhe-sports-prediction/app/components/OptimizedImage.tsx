interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  // This component no longer renders an image
  return null
}

