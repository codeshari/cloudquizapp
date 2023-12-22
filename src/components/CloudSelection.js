// src/components/CloudSelection.js

import React from 'react';
import './CloudSelection.css';
import {Link} from 'react-router-dom';
import awslogo from '../images/aws.png';
import azurelogo from '../images/azure.png';
import gcplogo from '../images/gcp.png';
import oraclelogo from '../images/oracle.png';
import terraformlogo from '../images/terraform.png';
import kuberneteslogo from '../images/kubernetes.png';

const CloudSelection = () => {
  return (
    <div className="cloud-container" style={{display:"flex", flexDirection:"column"}}>
            <div className="cloud-selection">
        <Link to="/awshome" className="cloud-option aws" style={{ textDecoration: 'none' }}>

          <div className="aws"><img src={awslogo} alt="AWS Logo"/></div>
          <div className="aws-label">AWS</div>

        </Link>
        <Link to="/gcphome" className="cloud-option gcp" style={{ textDecoration: 'none' }}>
          <div className="gcp"><img src={gcplogo} alt = "GCP Logo"/></div>
          <div className="gcp-label">GCP</div>

        </Link>
        <Link to="/azurehome" className="cloud-option azure" style={{ textDecoration: 'none' }}>
          <div className="azure"><img src={azurelogo} alt="Azure Logo"/></div>
          <div className="azure-label">Azure</div>
        </Link>
        <Link to="/oraclehome" className="cloud-option oracle" style={{ textDecoration: 'none' }}>
          <div className="oracle"><img src={oraclelogo} alt="Oracle Cloud Logo"/></div>
          <div className="oracle-label">Oracle Cloud</div>
        </Link>
      </div>

            <div className="cloud-selection">
        <Link to="/teraformhome" className="cloud-option terraform" style={{ textDecoration: 'none' }}>

          <div className="terraform"><img src={terraformlogo} alt="Terraform Logo"/></div>
          <div className="terraform-label">Terraform</div>

        </Link>
        <Link to="/kuberneteshome" className="cloud-option kubernetes" style={{ textDecoration: 'none' }}>
          <div className="kubernetes"><img src={kuberneteslogo} alt="Kubernetes Logo"/></div>
          <div className="kubernetes-label">Kubernetes</div>

        </Link>
        </div>
    </div>
  );
};

export default CloudSelection;
