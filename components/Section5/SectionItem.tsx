import React from 'react';

interface SectionItemProps {
    title: React.ReactNode;
    icon: React.ReactNode;
}

export const SectionItem = ({ title, icon }) => {
    return (
        <div className="section5-item-container">
            <div>{icon}</div>

            <p>{title}</p>
        </div>
    );
};
