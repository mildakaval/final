import React from "react";
import './contacts.scss';


 export const Contacts = () => {
  return (
    <div className="contacts">
     <h1>Susisiekite</h1>
     <h4>Jei turite klausimų, pasiūlymų, pastebėjimų<span><br></br></span>ar norite
       pasikalbėti ir pasidalinti savo nuomone, <span><br></br></span>maloniai prašome susisiekti: <span><br></br><br></br></span>
       el. pašto adresu:  
       <a href = "mailto: info@worldfood.lt">info@worldfood.lt</a>
       <span><br></br><br></br></span>
       arba skambinkte tel. numeriu:<span><br></br></span>
       +37063756787
     </h4>
    </div>
  );
};
  
export default Contacts;