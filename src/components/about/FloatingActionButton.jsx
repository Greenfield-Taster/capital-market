import React from "react";
import { ArrowRight } from "lucide-react";
import "../../styles/components/about/FeaturedProjectSection.scss";

const FloatingActionButton = () => {
  return (
    <div className="fab">
      <button className="fab-button">
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default FloatingActionButton;
