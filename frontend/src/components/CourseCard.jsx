import React from 'react';

const CourseCard = ({ course: { course_image, title, price } }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginBottom:'5vh' }}>
            <img src={`./courses/${course_image}`} alt="Component Image" style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }} />
            <h2>{title}</h2>
            <span style={{color:"magenta",fontWeight:'bolder'}}>{price} .DT/Month</span>
        </div>
    );
};

export default CourseCard;
