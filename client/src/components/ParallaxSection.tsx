import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  backgroundImage?: string;
  speed?: number;
  opacity?: number;
  className?: string;
  overlayColor?: string;
  direction?: "up" | "down";
};

export default function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.5,
  opacity = 0.7,
  className = "",
  overlayColor = "rgba(0,0,0,0.5)",
  direction = "up"
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollY } = useScroll();
  
  // Adjusts the parallax effect based on direction
  const directionMultiplier = direction === "up" ? -1 : 1;
  
  // The y value to move the background image by
  const y = useTransform(
    scrollY, 
    [elementTop - clientHeight, elementTop + clientHeight],
    [`${directionMultiplier * speed * -50}%`, `${directionMultiplier * speed * 50}%`]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const updatePosition = () => {
      setElementTop(element.offsetTop);
      setClientHeight(window.innerHeight);
    };
    
    updatePosition();
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            y,
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: overlayColor, opacity }}
      />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}