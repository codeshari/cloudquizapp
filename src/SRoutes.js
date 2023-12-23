// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import AWSConceptSelection from './components/concept-selection/aws/AWSConceptSelection';
import CloudSelection from './components/CloudSelection';
import AWSHome from './components/concept-selection/aws/AWSHome';
import GCPHome from './components/concept-selection/gcp/GCPHome';
import GCPConceptSelection from './components/concept-selection/gcp/GCPConceptSelection';
import Layout from './components/Layout';
import AzureHome from './components/concept-selection/azure/AzureHome';
import AzureConceptSelection from './components/concept-selection/azure/AzureConceptSelection';
import OracleConceptSelection from './components/concept-selection/oracle/OracleConceptSelection';
import OracleHome from './components/concept-selection/oracle/OracleHome';
import TerraformConceptSelection from './components/concept-selection/terraform/TerraformConceptSelection';
import TerraformHome from './components/concept-selection/terraform/TerraformHome';
import KubernetesConceptSelection from './components/concept-selection/kubernetes/KubernetesConceptSelection';
import KubernetesHome from './components/concept-selection/kubernetes/KubernetesHome';

const SRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App/>} />
        <Route path="/awsconceptselection" exact element={<Layout><AWSConceptSelection/></Layout>} />
        <Route path="/awshome" exact element={<Layout><AWSHome/></Layout>} />
        <Route path="/gcpconceptselection" exact element={<Layout><GCPConceptSelection/></Layout>} />
        <Route path="/gcphome" exact element={<Layout><GCPHome/></Layout>} />
        <Route path="/azureconceptselection" exact element={<Layout><AzureConceptSelection/></Layout>} />
        <Route path="/azurehome" exact element={<Layout><AzureHome/></Layout>} />
        <Route path="/oracleconceptselection" exact element={<Layout><OracleConceptSelection/></Layout>} />
        <Route path="/oraclehome" exact element={<Layout><OracleHome/></Layout>} />
        <Route path="/terraformconceptselection" exact element={<Layout><TerraformConceptSelection/></Layout>} />
        <Route path="/teraformhome" exact element={<Layout><TerraformHome/></Layout>} />
        <Route path="/kubernetesconceptselection" exact element={<Layout><KubernetesConceptSelection/></Layout>} />
        <Route path="/kuberneteshome" exact element={<Layout><KubernetesHome/></Layout>} />
        <Route path="/cloudselection" exact element={<CloudSelection/>} />
      </Routes>
    </Router>
  );
};

export default SRoutes;
