
import React from "react";

const LocationMap: React.FC = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl border border-white/10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.602995631473!2d-51.18809742334801!3d-30.048866274986928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979853d3ef3dd%3A0xc4c780b5a49c9209!2sR.%20Carlos%20Huber%2C%20110%20-%20Tr%C3%AAs%20Figueiras%2C%20Porto%20Alegre%20-%20RS%2C%2091330-150!5e0!3m2!1spt-BR!2sbr!4v1683141395388!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Localização do escritório"
        className="z-10"
      ></iframe>
    </div>
  );
};

export default LocationMap;
