import React from "react";

export default function LandingContainer({ children = null, ...props }) {
  return (
    <div className="container landing-container" {...props}>
      {children}
    </div>
  );
}
