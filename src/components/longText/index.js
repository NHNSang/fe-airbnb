import React, { useState } from 'react';
import './style.css'

const LongText = ({ text_1, text_2 , text_3, text_4 }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className={`text-container ${expanded ? 'expanded' : ''}`} style={{ maxHeight: expanded ? 'none' : '50px' }}>
                <p>{text_1}</p>
                <p className='mt-3'>{text_2}</p>
                <p className='mt-3'>{text_3}</p>
                <p className='mt-3'>{text_4}</p>
            </div>
            <div className='flex justify-center'>
                <button className="expand-button text-black" onClick={toggleExpand}>
                    {expanded ? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="black" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"/></svg>}
                </button>
            </div>
        </div>
    );
};

export default LongText;