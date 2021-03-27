import React from 'react';

const Features = () => {
  return (
    <div className="features">
      <p className="para-15" style={{ lineHeight: 1.5 }}>
        We at theAllsafe Best understand the importance of data and the pain of
        data loss or corruption. So, we created a tool that you can trust when
        it comes to data operations, such as comparison, migration,
        synchronization, verification, integrity checks, and many others.
        Database Compare Suite supports the following database platforms: Amazon
        DynamoDB, Amazon Redshift, Apache Cassandra, Azure SQL Database, Azure
        Synapse Analytics, BigQuery, Greenplum, IBM DB2 for Linux, Unix and
        Windows (LUW), Netezza, MariaDB, Microsoft Access, Microsoft SQL Server,
        MySQL, Oracle, PostgreSQL, SAP ASE (Sybase ASE), SAP IQ (Sybase IQ),
        Teradata, and Vertica. Find the list of key Database Compare Suite
        features below.
      </p>
      <div className="feature_cards">
        <div className="card ">
          <div className="card-body">
            <span className="featur">1</span>
            <h5 className="card-title featur1">
              Database Schema Comparison Tool
            </h5>
            <p className="card-text">
              Compare database schemas and identify differences in tables,
              views, triggers, stored procedures, functions, packages, synonyms,
              rules, etc. The schema comparison operation takes into account
              specifics of all supported dialects.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <span className="featur">2</span>
            <h5 className="card-title featur1">Data Comparison Tool</h5>
            <p className="card-text">
              Compare data in two database tables or views to quickly discover
              whether they are equal or not. You can run this operation against
              databases with equal or close-to-equal database schemas regardless
              of the source and target platforms.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <span className="featur">3</span>
            <h5 className="card-title featur1">Fast Data Comparison Tool</h5>
            <p className="card-text">
              For big volumes of data, the fast data comparison operation
              quickly checks whether the tables are not equal or not. The result
              is based on the value, returned by the hash function, so, the
              detailed comparison results are not available.
            </p>
          </div>
        </div>

        <div className="card col-md-4">
          <div className="card-body">
            <span className="featur">4</span>
            <h5 className="card-title featur1">Data Migration Tool</h5>
            <p className="card-text">
              Migrate data from the source table to the target table regardless
              of the database platforms. Use caution when migrating data as this
              operation clears the data in the target table and then uploads the
              data from the source table.
            </p>
          </div>
        </div>
        <div className="card col-md-4">
          <div className="card-body">
            <span className="featur">5</span>
            <h5 className="card-title featur1">Command-line interface</h5>
            <p className="card-text">
              Database Compare Suite includes both GUI and CLI versions. You can
              utilize a command-line interface to automate the execution of
              different data management tasks, DevOps operations, and
              verification of migration or upgrade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
