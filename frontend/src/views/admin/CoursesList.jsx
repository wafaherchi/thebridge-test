import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/CoursesList.module.css';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom'
function CoursesList() {
    const [courses, setCourses] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/api/courses/get_all_courses')
            .then(result => setCourses(result.data))
    }, [courses]);

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/api/courses/delete_course/${id}`).then(() => {
            toast.warn('course deleted !')
        })
    }

    return (
        <div className={styles.CoursesListContainer}>
            <ToastContainer />
            <div style={{display:"flex",alignItems:"center"}}>  
                <Link to="/add" className={styles.addBtn}>Add Course</Link>
         
                <h1 className={styles.heading}>CoursesList</h1>
            </div>

            {courses && courses.length > 0 ? courses.map((course, index) => (
                <div key={index} className={styles.courseCard}>
                    <ul className={styles.courseDetails}>
                        <>    <li><span className={styles.spanText}> {course.title}</span></li>
                            <li> <span className={styles.spanText}>{course.price} .DT</span>  </li></>

                        <span >
                            <img className={styles.courseImage} src={`./courses/${course.course_image}`} />
                        </span>


                    </ul>
                    <button className={styles.updateButton} onClick={() => navigate(`/update_course/${course._id}`)} >update</button>
                    <button className={styles.deleteButton} onClick={() => handleDelete(course._id)} >Delete</button>
                </div>
            )) : <h1>No courses ! </h1>}
        </div>
    );
}

export default CoursesList;