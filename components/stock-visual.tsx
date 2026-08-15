import Image from "next/image";
import type { StockImageAsset } from "@/lib/stock-images";

export function StockVisual({
  image,
  priority = false,
  className = "",
}: {
  image: StockImageAsset;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`stock-visual stock-visual--${image.kind}${className ? ` ${className}` : ""}`}>
      <div className="stock-visual__stage" style={{ aspectRatio: `${image.width}/${image.height}` }}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 820px) 92vw, (max-width: 1200px) 52vw, 560px"
          priority={priority}
        />
      </div>
      <figcaption>
        <strong>{image.title}</strong>
        <span>{image.caption}</span>
      </figcaption>
    </figure>
  );
}
