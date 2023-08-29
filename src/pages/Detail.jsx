import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectData from '../data/ProjectData';
import './Detail.scss'

const Detail = () => {
    const { id } = useParams();
    // console.log(id)

    const selectedProject = ProjectData.find(project => project.id === parseInt(id));
    if (!selectedProject) {
        return <div>Project not found</div>;
    }

    return (
        <div className='Detail'>
            <div className='container'>
                <div className='detail-img'>
                    <img src={selectedProject.imgSrc} alt="" />
                </div>
                <div className='detail-info'>
                    <h3>{selectedProject.projectName}</h3>
                    <p>{selectedProject.projectDescript}</p>
                    <span>
                        <img src={process.env.PUBLIC_URL + '/img/skills/CSS.svg'} width="100" height="100"  alt="" />
                    </span>
                    <Link to={selectedProject.projectLink}>move to page: {selectedProject.projectLink}</Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;
