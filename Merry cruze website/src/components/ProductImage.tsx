import React, { useState } from 'react';
import { 
  Sparkles, 
  ShowerHead, 
  Trash2, 
  Home, 
  Armchair, 
  AlertTriangle,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  slug?: string;
  loading?: 'lazy' | 'eager';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  category = 'cleaning-janitorial',
  slug = '',
  loading = 'lazy',
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If external image fails to download or load (CORS, offline, ISP/firewall block, 403),
  // render an elegant, brand-aligned vector graphic representing the product.
  if (error || !src) {
    const isTrolley = slug.includes('trolley');
    const isMop = slug.includes('mop') || slug.includes('wringer');
    const isCaution = slug.includes('caution') || slug.includes('sign');
    const isShower = slug.includes('shower');
    const isBin = slug.includes('bin') || slug.includes('waste');
    const isIron = slug.includes('iron') || slug.includes('board');
    const isPillow = slug.includes('pillow') || slug.includes('microfibre');
    const isStool = slug.includes('stool') || slug.includes('chair');

    return (
      <div className={`relative flex flex-col items-center justify-center p-6 bg-gradient-to-b from-neutral-100 to-neutral-200 text-neutral-800 select-none overflow-hidden ${className}`}>
        {/* Subtle background geometric watermark */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Visual Product Icon Representation */}
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-md border border-[#E7E7E7] flex items-center justify-center mb-3">
          {isTrolley && <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-[#F59A23]" />}
          {isMop && <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#F59A23]" />}
          {isCaution && <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />}
          {isShower && <ShowerHead className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />}
          {isBin && <Trash2 className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-700" />}
          {isIron && <Home className="w-8 h-8 sm:w-10 sm:h-10 text-[#F59A23]" />}
          {isPillow && <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" />}
          {isStool && <Armchair className="w-8 h-8 sm:w-10 sm:h-10 text-[#D97706]" />}
          {!isTrolley && !isMop && !isCaution && !isShower && !isBin && !isIron && !isPillow && !isStool && (
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#F59A23]" />
          )}
        </div>

        {/* Product Label */}
        <div className="relative z-10 text-center max-w-[200px]">
          <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-[#D97706] bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mb-1">
            Merrycruze Standard
          </span>
          <p className="text-xs font-bold text-[#171717] line-clamp-1 leading-tight">
            {alt || 'Commercial Equipment'}
          </p>
        </div>

        {/* Bottom subtle brand tag */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] text-[#606060] font-mono">
          <span>MC-SPEC</span>
          <span className="flex items-center gap-0.5 text-emerald-600 font-semibold">
            <CheckCircle2 className="w-2.5 h-2.5" /> Verified
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      onError={() => {
        // When any download failure occurs, switch to resilient local vector graphic
        setError(true);
      }}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-90'}`}
    />
  );
};
