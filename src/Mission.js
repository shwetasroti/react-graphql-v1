import React from 'react';

const Mission = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <div> <span>Mission Id:</span> <span className="card-title">{props.mission.id}</span> </div>
            <div> <span>Mission Name:</span> <span className="card-subtitle mb-2 text-muted">{props.mission.mission_name}</span></div>
            <div> <span>Mission Year:</span> <span>{props.mission.launch_year}</span></div>
        </div>
    </div>
);

export default Mission