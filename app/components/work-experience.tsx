import PromithicLogo from "~/assets/promithic-logo";
import { useState, useEffect } from 'react';
// ====================================================================================================

//****************************************************************************************************
export default function WorkExperience()
{
    useEffect(() => {
        const element = document.getElementById('animateElement');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('scale-x-[-1]');
                    
                    setTimeout(() => {
                        element.classList.add('scale-x-[1]');
                    }, 1000); // Adjust the timing as needed
                    // Optional: Stop observing once the animation is triggered
                    // observer.unobserve(element); 
                }
                setTimeout(() => {
                    element.classList.remove('scale-x-[-1]');
                    element.classList.remove('scale-x-[1]');
                }, 2000); // Adjust the timing as needed
                // Optional: Stop observing once the animation is triggered
                // observer.unobserve(element); 


            });
        }, {
            threshold: 0.1 // Trigger when at least 10% of the element is visible
        });

        observer.observe(element);
    }, []); // Empty dependency array ensures this runs once on mount
    
    return (
        
            <div className="relative h-screen w-full p-5 border-4">
                <div className="flex jusity-center items-center 
                                text-4xl text-white border-b-2">
                    Experience
                </div>

                <div className="mt-10 w-full border">
                    <div id="animateElement" className="h-fit w-fit transform transition-transform duration-1000">
                        <PromithicLogo/>
                    </div>
                </div>
                
            </div>
            
    );
    
}