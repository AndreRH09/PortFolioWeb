import type { ReactNode } from "react";

export interface DepthCarouselProps {
  items?: any[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tint?: string;
  depth?: number;
  spread?: number;
  tilt?: number;
  tiltDirection?: "left" | "right";
  perspective?: number;
  visibleCards?: number;
  falloff?: number;
  blur?: number;
  duration?: number;
  ease?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  onChange?: (index: number, item: any) => void;
  onCardActivate?: (index: number, item: any) => void;
  renderItem?: (item: any, index: number, isActive: boolean) => ReactNode;
  className?: string;
}

declare const DepthCarousel: (props: DepthCarouselProps) => ReactNode;
export default DepthCarousel;
