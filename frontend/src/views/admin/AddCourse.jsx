import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/AddCourse.module.css';
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function AddCourse() {
    const navigate = useNavigate()
    const [course, setCourse] = useState({ course_image: null, title: '', price: null });

    const handleAddNewCourse = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('course_image', course.course_image);
        formData.append('title', course.title);
        formData.append('price', course.price);
        console.log(formData)
        axios.post(`http://localhost:5000/api/courses/add`, formData).then((result) => {
            toast.success('course added ! ');
            setTimeout(() => {
                navigate('/courses_list')
            }, 2000)
        });
    };

    return (
        <div className={styles.container}>
            <ToastContainer />
            <input
                className={styles.input}
                type="text"
                onChange={(e) => {
                    setCourse({ ...course, title: e.target.value });
                }}
                placeholder="Course Title"
            />
            <input
                className={styles.input}
                id="file-input"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => {
                    setCourse({ ...course, course_image: e.target.files[0] });
                }}
            />
            <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                    setCourse({ ...course, price: e.target.value });
                }}
                placeholder="Course Price"
            />
            <button className={styles.button} onClick={handleAddNewCourse}>
                Ajouter Course
            </button>
        </div>
    );
}

export default AddCourse;