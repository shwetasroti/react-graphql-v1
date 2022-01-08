import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Mission from './Mission';

const Missions = () => (
    <Query query={gql`
        {
            launches {
                id,
                mission_name
                launch_year
              }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p style={{'color': 'red', 'marginTop': '10px'}}>Loading ...</p>;
            if (error) return <p>Error :(</p>;
            
            return data.launches.map((launch) => (
                <Mission mission={launch} />
            ));
        }}
    </Query>
);

export default Missions;