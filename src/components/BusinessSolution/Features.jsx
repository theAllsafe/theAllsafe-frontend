import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import data from './featuredata';

const Features = () => {
  let len = data.length;
  const [oldData, setOldData] = useState(data.slice(0, len - 3));
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
        {oldData.map((el) => (
          <FeatureCard data={el} />
        ))}
        <div className="view_entire col-md-4">
          {oldData.length !== len ? (
            <h5
              onClick={() => setOldData(data.slice(0, len))}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              View entire list...
            </h5>
          ) : (
            ''
          )}
        </div>
      </div>

      <div className="sv_container">
        <div className="sv1">
          <h5 className="card-title featur1" style={{ fontWeight: 600 }}>
            SUPPORTED VERSIONS
          </h5>
          <ul className="para-15">
            <li>Amazon Redshift</li>
            <li>Apache Cassandra 2.1 or later</li>
            <li>Azure SQL Database</li>
            <li>Azure Synapse Analytics</li>
            <li>BigQuery</li>
            <li>IBM DB2 for Linux, Unix and Windows (LUW) 9.7 or later</li>
            <li>MariaDB 5.5 or later</li>
            <li>
              Microsoft SQL Server 2000, 2005, 2008, 2012, 2014, 2016, 2017,
              2019 (all editions)
            </li>
            <li>Microsoft Access</li>
          </ul>
        </div>
        <div className="sv2">
          <ul className="para-15 pt-4">
            <li>
              MySQL 5.5.3 or later (Database Compare Suite works with previous
              versions as well, but some features can be omitted)
            </li>
            <li>Oracle 9.2 or later</li>
            <li>
              PostgreSQL 9.2 or later (Database Compare Suite works with
              previous versions as well, but some features can be omitted)
            </li>
            <li>Sybase ASE 12.5 or later</li>
            <li>Sybase IQ 16 or later</li>
            <li>Teradata 14 or later</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
