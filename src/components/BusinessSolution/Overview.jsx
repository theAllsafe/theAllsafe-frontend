import React from 'react';

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview_left">
        <h2 className="overview-heading">SAVE TIME &amp; ELIMINATE ERRORS</h2>
        <p className="para-15">
          This simple yet effective tool supports over a dozen database
          platforms and helps automate the following processes:
        </p>
        <ul className="benefits">
          <li>Verify successful database migration and replication</li>
          <li>Explore differences in database schemas</li>
          <li>Compare two database tables and views</li>
          <li>
            Optimize DevOps routine by running all operations in Command Line
            Interface (CLI)
          </li>
          <li>
            Migrate data between different database environments (for example,
            from development to production)
          </li>
          <li>
            Simplify schema and data manipulation tasks in both homogeneous and
            heterogeneous database environments
          </li>
          <li>
            Restore damaged database objects instead of full database restores
          </li>
          <li>
            Migrate databases and applications from on-premises to the cloud
          </li>
        </ul>
      </div>
      <div className="overview_right">
        <h2 className="overview-heading">BENEFITS</h2>
        <p className="para-15">
          DB Best Database Compare Suite has a user-friendly interface and
          doesn’t require any specific database experience from the users. In
          addition to that, our tool provides users with the following benefits:
        </p>
        <ul className="benefits">
          <li>
            Speed up verification process when moving to production environment
          </li>
          <li>Detect database changes and address them right away</li>
          <li>Upscale your database migration and upgrade projects</li>
          <li>Simplify operational data management</li>
          <li>
            Avoid human factor and possible errors with full automation of
            operations
          </li>
          <li>
            Perform comparison and synchronization operations with command-line
            interface
          </li>
          <li>Improve your DevOps pipelines, version control, etc.</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
