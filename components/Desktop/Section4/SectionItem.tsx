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
        <div className="section4-item-container">
            <div className="section4-item-image">{image}</div>
            <div className="section4-item-content">
                <h1 className="title-no">{titleNo}</h1>
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
                <p className="content">{content}</p>
            </div>
        </div>
    );
};
