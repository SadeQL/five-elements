import React from "react";

const Terms = () => {
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
          Terms and Conditions
        </h1>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h3
          style={{
            textAlign: "center",
            fontFamily: "EBGaramond",
            fontWeight: "bold",
            marginBottom: "3vh",
            marginTop: "5vh",
          }}
        >
          Booking Policy
        </h3>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Proxima Nova",
            marginLeft: "8vh",
            marginRight: "8vh",

            marginBottom: "8vh",
            textAlign: "center",
          }}
        >
          Sessions are open for reservation 5 days prior to the present day. It
          is mandatory to fill out the booking form, in order to create your
          personal BaZi chart for your sessions. It contains questions of
          personal information, birth time and a short questionnaire about the
          aspects in which you would like to enhance. Please take some time to
          think about it mindfully and honestly. You will receive a booking
          confirmation once the form is sent and the transaction is complete. A
          reminder will be sent 3 days prior to your session. Please contact me
          at least 48 hours in advance if you want to reschedule.
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h3
          style={{
            textAlign: "center",
            fontFamily: "EBGaramond",
            fontWeight: "bold",
            marginBottom: "3vh",
          }}
        >
          Reschedule and Refund
        </h3>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Proxima Nova",
            marginLeft: "8vh",
            marginRight: "8vh",

            marginBottom: "8vh",
            textAlign: "center",
          }}
        >
          To reschedule your session, please contact me at least 48 hours in
          advance from the original date and time. Sessions may be rescheduled
          to another date within 3 months based on availability. If there is no
          availability, a refund will be issued. Please note that reschedule
          will not be granted with less than a 48 hour notice and refunds are
          not permitted in case of no show up.
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h3
          style={{
            textAlign: "center",
            fontFamily: "EBGaramond",
            fontWeight: "bold",
            marginBottom: "3vh",
          }}
        >
          Payment
        </h3>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Proxima Nova",
            marginLeft: "8vh",
            marginRight: "8vh",

            marginBottom: "8vh",
            textAlign: "center",
          }}
        >
          Payments via PayPal. At the end of the booking form, you will be
          directed to PayPal. If you encounter any problems with the payment,
          please <a href="mailto:felicia.chiang@icloud.com">contact me</a>.
        </p>
      </div>
    </>
  );
};

export default Terms;
