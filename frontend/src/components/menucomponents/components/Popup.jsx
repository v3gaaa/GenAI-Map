import React from "react";

const Popup = ({ cardInfo, onClose }) => {
  if (!cardInfo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-2/3 relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          Cerrar
        </button>
        <h2 className="text-2xl font-bold mb-4">{cardInfo.title}</h2>
        <p>
          <strong>Desarrollador:</strong> {cardInfo.developer}
        </p>
        <p className="mt-4">
          <strong>Descripción:</strong> {cardInfo.description}
        </p>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: cardInfo.detailedInfo }}
        />
      </div>
    </div>
  );
};

export default Popup;
