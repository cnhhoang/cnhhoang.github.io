import React, { cloneElement, useEffect, useState, ReactElement } from "react";

// ====================================================================================================
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  asChild?: boolean;
}

// ****************************************************************************************************
const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, duration = 1, asChild = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  // Apply animation classes
  const className = `${isVisible ? 'animate-fadeIn' : 'opacity-0'}`;
  const style = { animationDuration: `${duration}s` };

  if (asChild && React.isValidElement(children)) {
    // Clone the child element with the animation class and style
    return cloneElement(children as ReactElement, {
      className: `${children.props.className || ""} ${className}`,
      style: { ...children.props.style, ...style },
    });
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default FadeIn;
