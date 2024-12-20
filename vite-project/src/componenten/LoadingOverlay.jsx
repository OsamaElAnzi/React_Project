import React from "react";
import ReactLoading from "react-loading";

const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <ReactLoading type="bars" color="#0d47a1" height={100} width={100} />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingOverlay;