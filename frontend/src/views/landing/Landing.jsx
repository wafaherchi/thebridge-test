import React, { useEffect, useState } from 'react'
import CourseCard from '../../components/CourseCard'
import styles from '../../styles/Landing.module.css'
import axios from 'axios'
function Landing() {
    const [courses, setCourses] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:5000/api/courses/get_all_courses').then(result => {
            setCourses(result.data)
        })
    }, [courses])
    return (
        <div className={styles.main}  >
            <img src='./logo.png' />
            <div className={styles.outer_div}>
                <div className={styles.inner_div}>
                    <h1>Improve your skills on your own <br />To prepare for a better future</h1>
                    <button className={styles.registerBtn}>REGISTER NOW</button>
                </div>
            </div>
            <div className={styles.courses}>
                <div className={styles.coursesHeading}>
                    <h1>Discover Our Courses</h1>
                    <button className={styles.moreBtn}>View More</button>
                </div>
                <div className={styles.coursesList}  >
                    {courses?.map(el => {
                        return <CourseCard course={el} />
                    })}
                </div>

            </div>
            <div className={styles.contactUs}>
                <h2>Contact Us</h2>
                <form>
                    <label>NAME</label><br />
                    <input type="text" placeholder='Wafa' />
                    <br />
                    <label>EMAIL</label><br />
                    <input type="text" placeholder='Wafa' />
                    <br />
                    <label>MESSAGE</label><br />
                    <textarea cols="30" rows="10"></textarea><br />
                    <button className={styles.sendBtn}>send the message</button>
                </form>
            </div>
        </div>
    )
}

export default Landing