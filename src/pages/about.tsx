import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import React from 'react';

import { Layout } from '../components/layout';

const AboutPage = () => (
    <Layout>
        <div>
            <h2>What I Use</h2>
            <div><strong>Languages: </strong>TypeScript, JavaScript, C#, T-SQL</div>
            <div><strong>Frameworks/Tooling: </strong>React, Webpack, Babel, Git, Gatsby, .NET Framework, .NET Core, SQL Server</div>
            <div><strong>Environments: </strong>Linux (Debian, Ubuntu, Fedora), Windows (WSL), macOS</div>
        </div>
        <div>
            <h2>Where I've Been</h2>
            <div>
                <strong>SalesPad, LLC.</strong>
                <ul>
                    <li>
                        <span>Software Developer, Software Developer II <em>September 2017 - Present</em></span>
                        <ul>
                            <li>Contributed to the full stack development and maintenance of a cloud hosted ERP application with external accounting and fulfillment integrations and facilitated team development by mentoring new developers on frontend web development.</li>
                            <li>Engaged in a legacy modernization project, updating a server rendered Java application to an AngularJS solution. Implemented integration to Google Maps for real time tracking.</li>
                            <li>Participated in an exploration project using micro-frontends to provide customization and tailoring of web applications.</li>
                        </ul>
                    </li>
                    <li>
                        <span>Customs Developer <em>August 2017 - September 2017</em></span>
                        <ul>
                            <li>Developed enhancements and customizations for a web-based B2B portal and desktop ERP application using C# and AngularJS.</li>
                        </ul>
                    </li>
                    <li>
                        <span>Innovations Development Intern <em>January 2017 - August 2017</em></span>
                        <ul>
                            <li>Contributed software enhancements for a web-based B2B portal using AngularJS.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
);

export default AboutPage;
