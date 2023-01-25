import React, {useState} from 'react';


import {ReactComponent as LocationIcon} from '../../assets/location-ico.svg';
import {ReactComponent as DepartmentIcon} from '../../assets/department-icon.svg';
import {ReactComponent as ToggleIcon} from '../../assets/toggle-icon.svg';

import "./Job.scss"

const Job = ({position}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="job-container">
            <div className="job" key={position.id}>
                <div className="job__details">
                    <div className="job__details__name">
                        <span className="name">{position.name}</span>
                        <div className={`v-icon ${isOpen ? 'opened' : ''}`}>
                            <ToggleIcon onClick={() => setIsOpen(isOpen => !isOpen)}/>
                        </div>
                    </div>
                    <div className="job__details__general">
                        <div className="location">
                            <LocationIcon/>
                            {position.location}
                        </div>
                        <div className="department">
                            <DepartmentIcon/>
                            {position.department}
                        </div>
                    </div>
                </div>
                <a href={position.applyUrl} target="_blank" className="job__apply-btn">Apply</a>
            </div>
            {isOpen && <div className="job-info-container">
                <hr className="job-info-container__divider"/>
                <p>About Joonko</p>
                <span>{position.description}</span>
                <p className="job-info-container__title job-info-container__title-underline">To be successful in this role, you’ll need to be:</p>
                    <ul>
                        {position.requirements.map((requirement, id) => <ul key={`req-${id}`}>{requirement}</ul>)}
                    </ul>
                <p className="job-info-container__title ">*** If you are not sure that you’re 100% qualified, but up for the challenge - we want you to apply. ***</p>
                <div className="button-container">
                    <a href={position.applyUrl} target="_blank" className="job__apply-btn">Apply</a>
                </div>
            </div>}
        </div>
    )
}


export default Job;