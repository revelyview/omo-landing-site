import React from 'react';

interface SectionItemProps {
    titleNo: React.ReactNode;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    content: React.ReactNode;
    image?: React.ReactNode;
}

export const SectionItem: React.FC<SectionItemProps> = ({ titleNo, title, subtitle, content, image }) => {
    return (
        <div className="mobile-section4-item-container">
            <div className="mobile-section4-item-content">
                <h1>{titleNo}</h1>
                <h2>{title}</h2>
                <div className="mobile-section4-item-image">{image}</div>
                <h3>{subtitle}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};
