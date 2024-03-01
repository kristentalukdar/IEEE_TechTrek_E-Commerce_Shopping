import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, label, subtopics, onClick }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        marginRight: '20px',
        position: 'relative',
      }}
    >
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          color: '#333',
          fontWeight: 'bold',
          position: 'relative',
          display: 'inline-block',
          padding: '10px',
        }}
      >
        {label}
      </Link>
      {isHovered && (
        <div
          className="submenu"
          onClick={onClick}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: 1,
            minWidth: '150px', // Adjust the width as needed
            padding: '10px',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {subtopics.map((SubtopicComponent, index) => (
            <SubtopicComponent key={index} />
          ))}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
