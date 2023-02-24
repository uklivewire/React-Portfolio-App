import React from 'react';
import pdf from '../../assets/pdf.png';
import resume from '../Resume/Ricky_Bryans_CV.pdf';
import './style.css';

function Resume() {
  return (
    <div className="resume">
      <a href={resume} target="_blank" rel="noreferrer">
        <img src={pdf} alt="PDF icon" />
      </a>
    </div>
  );
}

export default Resume;