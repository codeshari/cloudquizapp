// src/components/CloudSelection.js

import React from 'react';
import './CloudSelection.css';
import {Link} from 'react-router-dom';

const CloudSelection = () => {
  return (
    <div className="cloud-container" style={{display:"flex", flexDirection:"column"}}>
            <div className="cloud-selection">
        <Link to="/awshome" className="cloud-option aws" style={{ textDecoration: 'none' }}>

          <div className="aws"><img src="https://logolook.net/wp-content/uploads/2023/09/Amazon-Web-Services-Logo.png"/></div>
          <div className="aws-label">AWS</div>

        </Link>
        <Link to="/gcphome" className="cloud-option gcp" style={{ textDecoration: 'none' }}>
          <div className="gcp"><img src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"/></div>
          <div className="gcp-label">GCP</div>

        </Link>
        <Link to="/azurehome" className="cloud-option azure" style={{ textDecoration: 'none' }}>
          <div className="azure"><img src="https://swimburger.net/media/ppnn3pcl/azure.png"/></div>
          <div className="azure-label">Azure</div>
        </Link>
        <Link to="/oraclehome" className="cloud-option oracle" style={{ textDecoration: 'none' }}>
          <div className="oracle"><img src="https://scioinfotech.com/wp-content/uploads/2019/10/oracle-cloud-logo-e1572318472568.png"/></div>
          <div className="oracle-label">Oracle Cloud</div>
        </Link>
      </div>

            <div className="cloud-selection">
        <Link to="/teraformhome" className="cloud-option terraform" style={{ textDecoration: 'none' }}>

          <div className="terraform"><img src="https://static-00.iconduck.com/assets.00/terraform-icon-452x512-ildgg5fd.png"/></div>
          <div className="terraform-label">Terraform</div>

        </Link>
        <Link to="/kuberneteshome" className="cloud-option kubernetes" style={{ textDecoration: 'none' }}>
          <div className="kubernetes"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png"/></div>
          <div className="kubernetes-label">Kubernetes</div>

        </Link>
        </div>
    </div>
  );
};

export default CloudSelection;
