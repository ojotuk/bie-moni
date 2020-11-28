import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.9961935798083!2d19.043917215240032!3d49.823736740204396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a1f5e9aae39f%3A0xd7e4f1592747f513!2sMONO%20P%C3%A2tisserie%20%26%20Bistro!5e0!3m2!1sen!2sng!4v1606578124475!5m2!1sen!2sng"
        width="800"
        height="600"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        className="mapFrame"
        title="address"
      ></iframe>
    </div>
  );
};

export default Map;
