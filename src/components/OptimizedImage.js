import React from 'react'
import Image from 'next/image'

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false,
  ...props 
}) => {
  if (src.startsWith('http')) {
    return (
      <img 
        src={src} 
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="lazy"
        {...props}
      />
    )
  }

  try {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    )
  } catch (error) {
    return (
      <img 
        src={src} 
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="lazy"
       {...props}
      />
    )
  }
}

export default OptimizedImage
