import React from 'react';
import { Link } from 'react-router-dom';
import './coursepagelist.scss';
import { useNavigate } from "react-router-dom";

const CoursePageList = ({ hd1, hd2, links, activeLink,  onLinkClick }) => {
  const navigate = useNavigate();

  return (
    <div className="course-list">
      <h2>
        {hd1} <span className="under-bar">{hd2}</span>
      </h2>
      <div className="course-links">
        {links.map((item, index) => {
          const pathArray = window.location.pathname.split('/');
          pathArray.pop();
          pathArray.push(item); 
          const newPath = pathArray.join('/');

          console.log("Sublinks:", links);
          
          return (
            <Link key={index} to={newPath} onClick={onLinkClick}>
              <div className={`course-link ${activeLink === item ? 'active' : ''}`}>
                {item}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePageList;