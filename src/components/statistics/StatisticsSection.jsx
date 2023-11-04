import React from 'react'
import './Statistics.scss'
import smile from '../../assets/smile.png'

const StatisticsSection = () => {
    return (
        <div className="statistics">
            <div className="st-card">
                <img src={smile} alt="" />
                <div className="stats">
                    <h1>50+</h1>
                    <p>HAPPY STUDENTS</p>
                </div>
            </div>
            <div className="st-card">
                <img src={smile} alt="" />
                <div className="stats">
                    <h1>5+</h1>
                    <p>TOTAL TEACHERS</p>
                </div>
            </div>
            <div className="st-card">
                <img src={smile} alt="" />
                <div className="stats">
                    <h1>100+</h1>
                    <p>CERTIFICATION</p>
                </div>
            </div>
            <div className="st-card">
                <img src={smile} alt="" />
                <div className="stats">
                    <h1>2000+</h1>
                    <p>EXAMS</p>
                </div>
            </div>
        </div>
    )
}

export default StatisticsSection