import React from 'react';

interface ImageSectionProps {
    image: string;
    alt: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({ image, alt }) => {
    return (
        <section>
            <div>
                <img src={image} alt={alt} className="image-content" />
            </div>
        </section>
    );
};
