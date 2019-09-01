import React from "react";

export default function TechItem({ tech, handleDelete }) {
  return (
    <li>
      {tech}
      <button onClick={handleDelete} type="button">
        Remove
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};
