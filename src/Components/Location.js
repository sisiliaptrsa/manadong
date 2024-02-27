import React from "react";
import { GrLocation } from "react-icons/gr";
import { TiLocationArrowOutline } from "react-icons/ti";

const LocationItem = ({ name, address, map }) => {
  return (
    <div className="location-container">
      <div>
        <GrLocation className="location-icon" size={45} />
      </div>
      <div className="location-detail">
        <p className="location-name">{name}</p>
        <p className="location-address">{address}</p>
        <p className="location-map">
          <TiLocationArrowOutline className="location-map-icon" size={17} />
          {map}
        </p>
      </div>
    </div>
  );
};

const Locations = () => {
  const locations = [
    {
      name: "Senopati, Petogogan",
      address: "Santa Modern Market, Lt.1, Blok CKS S, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan",
      map: "View Map",
    },
    {
      name: "Kebun Jeruk / Tanjung Duren",
      address: "Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat",
      map: "View Map",
    },
    {
      name: "Food Plaza PIK",
      address: "Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara",
      map: "View Map",
    },
    {
      name: "Kuningan - D'Kanteen",
      address: "D Kanteen, JI. Komando Rraya No.18, DKI Jakarta 12920",
      map: "View Map",
    },
    {
      name: "Bintaro, Thelapan Square",
      address: "Jl. Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten",
      map: "View Map",
    },
    {
      name: "Gading Serpong",
      address:
        "Ruko Golden 8, Jl. KI Hajar Dewantara Jl. Boulevard Raya Gading Serpong No. 25, ...",
      map: "View Map",
    },
    {
      name: "Cipete",
      address: "Jl. Cipete Raya No. 74c, RW.3, Cipete Jakarta Selatan 12410",
      map: "View Map",
    },
    {
      name: "Menteng",
      address: "Jl. H. Agus Salim No. 60, Menteng, Jakarta Pusat 10350",
      map: "View Map",
    },
  ];

  return (
    <div className="location-section-container">
      <div className="location-section-text-container">
        <p className="primary-subheading">Locations</p>
        <div className="locDivLine"></div>
        <div className="locations-list-container">
          {locations.map((location, index) => (
            <LocationItem key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
