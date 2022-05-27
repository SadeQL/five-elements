import React from "react";

const Privacy = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "EBGaramond",
            fontWeight: "bold",
            marginBottom: "3vh",
            marginTop: "5vh",
          }}
        >
          Privacy Policy
        </h1>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Proxima Nova",
            marginLeft: "8vh",
            marginRight: "8vh",
            marginTop: "8vh",
            marginBottom: "8vh",
          }}
        >
          Every BaZi reading is unique and confidential. <br />
          Your birth information is requested solely for the creation of your
          BaZi chart. It will not be used for any other purposes. <br />
          All life coaching sessions are not recorded nor filmed. Content of
          consultations will not be shared, published or used in any form.
          <br />
          Booking forms powered by Jotform.
          <br /> All personal data and information are collected only for the
          use of creating birth charts and personalized life coaching sessions.
          No contexts are shared, published or used for other purposes.
        </p>
      </div>
    </>
  );
};

export default Privacy;
