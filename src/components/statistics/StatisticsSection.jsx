import React from 'react'
import './Statistics.scss'
import smile from '../../assets/smile.png'

const StatisticsSection = ({className}) => {
    return (
        <div className={`statistics ${className}`}>
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

// import React from 'react';
// import './Statistics.scss';
// import smile from '../../assets/smile.png';

// const statisticsData = [
//   { value: '50+', label: 'HAPPY STUDENTS' },
//   { value: '5+', label: 'TOTAL TEACHERS' },
//   { value: '100+', label: 'CERTIFICATION' },
//   { value: '2000+', label: 'EXAMS' },
// ];

// const StatisticsSection = () => {
//   return (
//     <div className="statistics">
//       {statisticsData.map((data, index) => (
//         <div key={index} className="st-card">
//           <img src={smile} alt="" />
//           <div className="stats">
//             <h1>{data.value}</h1>
//             <p>{data.label}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StatisticsSection;
