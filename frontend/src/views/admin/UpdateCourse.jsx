import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/AddCourse.module.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
function UpdateCourse() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [course, setCourse] = useState({ course_image: null, title: '', price: null });

    const handleUpdateCourse = async (e) => {
        e.preventDefault();




        await axios.put(`http://localhost:5000/api/courses/update_course/${id}`, course)
            .then((result) => {
                console.log(result.data);
                toast.success("Course updated!");
                setTimeout(() => {
                    navigate('/courses_list')
                }, 2000)
            })
            .catch(error => {
                toast.error("Error updating course");
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/get_course/${id}`).then(result => {
            setCourse(result.data)
        })
    }, [id])

    return (
        <div className={styles.container}>
            <ToastContainer />
            <label className={styles.label} >Title</label>
            <input
                className={styles.input}
                value={course.title}
                type="text"
                onChange={(e) => {
                    setCourse({ ...course, title: e.target.value });
                }}
                placeholder="Course Title"
            />

            <img style={{ height: '75px', width: '75px', marginBottom: '25px' }} src={`/courses/${course.course_image}`} />
            <label className={styles.label} >Price </label>  <input
                className={styles.input}
                type="number"
                value={course.price}

                onChange={(e) => {
                    setCourse({ ...course, price: e.target.value });
                }}
                placeholder="Course Price"
            />
            <button className={styles.button} onClick={(e) => handleUpdateCourse(e)}>
                Update Course
            </button>
        </div>
    );
}

export default UpdateCourse;