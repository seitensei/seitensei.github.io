import Divider from '@material-ui/core/Divider';
import React from 'react';

import { Layout } from '../components/layout';

const ProjectsPage = () => {
    return (
        <Layout>
            <h2>Upcoming Projects</h2>
            <Divider />
            <div>
                <h3>plamo.club</h3>
                <p>
                    plamo.club will be a web applications for tracking East
                    Asian plastic model kits and resin garage kits, as well as
                    keeping managing an inventory or collection of kits already
                    owned.
                </p>
            </div>
        </Layout>
    );
};

export default ProjectsPage;
