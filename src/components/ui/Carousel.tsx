import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  slidesToShow?: number;
  gap?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = "",
  slidesToShow = 1,
  gap = 16
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(children.length / slidesToShow);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const getVisibleSlides = () => {
    const startIndex = currentIndex * slidesToShow;
    return children.slice(startIndex, startIndex + slidesToShow);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div className="flex transition-transform duration-500 ease-in-out">
          <div 
            className="flex w-full"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              gap: `${gap}px`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="flex-shrink-0 w-full flex"
                style={{ gap: `${gap}px` }}
              >
                {children
                  .slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow)
                  .map((child, childIndex) => (
                    <div 
                      key={childIndex}
                      className="flex-1"
                      style={{ minWidth: `calc((100% - ${(slidesToShow - 1) * gap}px) / ${slidesToShow})` }}
                    >
                      {child}
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <Button
            onClick={goToPrevious}
            variant="secondary"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            onClick={goToNext}
            variant="secondary"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary shadow-glow scale-125'
                  : 'bg-muted hover:bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};