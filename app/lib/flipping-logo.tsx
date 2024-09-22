import React, { useEffect } from 'react';

interface FlippingLogoProps {
    id: string;
    flipCount: number;
}

const FlippingLogo: React.FC<FlippingLogoProps> = ({ id, flipCount }) => {
    useEffect(() => {
        const element = document.getElementById(id);

        if (element) {
            element.classList.add('transform', 'transition-transform', 'duration-1000');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        for (let i = 0; i < flipCount; i++) {
                            setTimeout(() => {
                                if (i % 2 === 0) {
                                    element.classList.add('scale-x-[-1]');
                                } else {
                                    element.classList.remove('scale-x-[-1]');
                                }
                            }, i * 1000); 
                        }
                    }
                });
            }, {
                threshold: 0.1
            });

            observer.observe(element);

            return () => {
                observer.disconnect();
            };
        }
    }, [id, flipCount]);

    return null;
};

export default FlippingLogo;
