import React, { useState } from 'react';
import './ImageComponent.css'; // Make sure to create a corresponding CSS file for styling

interface ImageComponentProps {
    imageUrl: string;
    imageTitle: string;

}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl, imageTitle }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleClosePopup = () => {
        setIsClicked(false);
    };

    return (
        <div className={'container'}>
            <div
                className={`image-container ${isHovered ? 'blur' : ''}`}
                style={{ backgroundImage: `${imageUrl}` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
            </div>

            <div>
                {isHovered && (
                    <div className="overlay">
                        <p> {imageTitle}</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ImageComponent;
