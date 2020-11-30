import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9562147934466!2d7.185905314262977!3d4.432533445159855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106856bb00f82e95%3A0x778589e41b71f89f!2sAkiama%20Rd%2C%20Bonny!5e1!3m2!1sen!2sng!4v1606642947632!5m2!1sen!2sng"
        width="800"
        height="600"
        frameBorder="0"
        title="address"
        className="mapFrame"
        allowFullscreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Map;
