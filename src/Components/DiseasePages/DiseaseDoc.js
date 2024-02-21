import React, { useEffect, useRef, useState } from "react";
import "./styles/DiseaseDoc.css";
import ddcard1 from "../../Assests/ddcard1.svg";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
const DiseaseDoc = ({docHeading}) => {
  const cardsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 497;
    const container = cardsContainerRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const axiosBaseUrl = useAxiosBaseUrl();


  // Data fetch from API

  const [allDoctors, setAllDoctors] = useState([]);
  console.log(allDoctors);
  useEffect(() => {
    axiosBaseUrl.get("/api/v1/doctors")
      .then(res => res.data)
      .then(data => setAllDoctors(data.doctors))
      .catch(err => console.log(err.message))
  }, [axiosBaseUrl]);


  return (
    <div className="rev-cont">
      <div className="hero-btm-head">{docHeading}</div>

      <div className="rev-car-cont">
        <div className="arrow-div" onClick={() => handleScroll("left")}>
          &lt;
        </div>
        <div ref={cardsContainerRef} className="rev-cards-cont">
          {
            allDoctors.length > 0 ?
            allDoctors.map(doctor => 
              <div key={doctor._id} className="dd-card">
            <div className="dd-top">
              <div className="dd-top-left">
                <img src={ddcard1} alt="ddrc" />
              </div>
              <div className="dd-top-right">
                <div className="dd-top-head">{doctor.doctorName}</div>
                <div className="dd-top-text">
                  {" "}
                  MBBS, MS- <b style={{ color: "#00A0AA", fontSize:"17px" }}>{doctor.diseaseHandle}</b>
                </div>
                <div className="dd-top-sub-head"> Specialization</div>
                <div className="dd-top-sp-cont">
                  <div className="dd-top-sp text-base">{doctor.specialization1}</div>
                  <div className="dd-top-sp">{doctor.specialization2}</div>
                  <div className="dd-top-sp">{doctor.specialization3}</div>
                </div>
                <div className="dd-top-stats-cont">
                  <div className="dd-top-stats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.5625 7.5H17.4375V6.9375C17.4364 5.51902 16.8816 4.157 15.8914 3.14141C14.9011 2.12582 13.5535 1.53689 12.1355 1.5H11.8645C10.4465 1.53689 9.09893 2.12582 8.10865 3.14141C7.11836 4.157 6.56361 5.51902 6.5625 6.9375V7.5H2.4375C2.38777 7.5 2.34008 7.51975 2.30492 7.55492C2.26975 7.59008 2.25 7.63777 2.25 7.6875V21.75C2.25 21.9489 2.32902 22.1397 2.46967 22.2803C2.61032 22.421 2.80109 22.5 3 22.5H21C21.1989 22.5 21.3897 22.421 21.5303 22.2803C21.671 22.1397 21.75 21.9489 21.75 21.75V7.6875C21.75 7.63777 21.7302 7.59008 21.6951 7.55492C21.6599 7.51975 21.6122 7.5 21.5625 7.5ZM8.4375 6.98438C8.4375 5.02312 10.0036 3.39562 11.9648 3.375C12.4355 3.37085 12.9023 3.45991 13.3384 3.63704C13.7744 3.81417 14.1711 4.07587 14.5056 4.40704C14.84 4.73821 15.1056 5.13231 15.287 5.56662C15.4684 6.00092 15.562 6.46683 15.5625 6.9375V7.5H8.4375V6.98438ZM15.75 15.75H12.75V18.75H11.25V15.75H8.25V14.25H11.25V11.25H12.75V14.25H15.75V15.75Z"
                        fill="#2F4961"
                      />
                    </svg>
                    {doctor.experience}
                  </div>
                  <div className="dd-top-stats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V18C3 19.1 3.9 20 5 20H9L11.29 22.29C11.68 22.68 12.31 22.68 12.7 22.29L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM12 5.3C13.49 5.3 14.7 6.51 14.7 8C14.7 9.49 13.49 10.7 12 10.7C10.51 10.7 9.3 9.49 9.3 8C9.3 6.51 10.51 5.3 12 5.3ZM18 16H6V15.1C6 13.1 10 12 12 12C14 12 18 13.1 18 15.1V16Z"
                        fill="#2F4961"
                      />
                    </svg>
                    2k
                  </div>
                  <div className="dd-top-stats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.157 16.8821L16.97 18.0561C16.095 18.9141 14.96 20.0181 13.564 21.3681C13.1444 21.7738 12.5836 22.0006 12 22.0006C11.4163 22.0006 10.8555 21.7738 10.436 21.3681L6.94497 17.9721C6.50497 17.5411 6.13897 17.1781 5.84297 16.8821C4.62534 15.6644 3.79614 14.113 3.46023 12.424C3.12432 10.735 3.29678 8.98435 3.95581 7.39339C4.61484 5.80243 5.73084 4.44262 7.16269 3.48591C8.59453 2.5292 10.2779 2.01855 12 2.01855C13.722 2.01855 15.4054 2.5292 16.8373 3.48591C18.2691 4.44262 19.3851 5.80243 20.0441 7.39339C20.7032 8.98435 20.8756 10.735 20.5397 12.424C20.2038 14.113 19.3746 15.6644 18.157 16.8821ZM14.5 11.0001C14.5 10.3371 14.2366 9.70119 13.7677 9.23235C13.2989 8.7635 12.663 8.50011 12 8.50011C11.3369 8.50011 10.701 8.7635 10.2322 9.23235C9.76336 9.70119 9.49997 10.3371 9.49997 11.0001C9.49997 11.6632 9.76336 12.299 10.2322 12.7679C10.701 13.2367 11.3369 13.5001 12 13.5001C12.663 13.5001 13.2989 13.2367 13.7677 12.7679C14.2366 12.299 14.5 11.6632 14.5 11.0001Z"
                        fill="#2F4961"
                      />
                    </svg>
                    {doctor.location}
                  </div>
                </div>
              </div>
            </div>
            <div className="dd-btm">
              <div className="dd-call">Call now +98 765 432 10</div>
              <div className="dd-book">Book Appointment</div>
            </div>
          </div>
              )
              :
              <p>Loading</p>
          }
        </div>

        <div className="arrow-div" onClick={() => handleScroll("right")}>
          &gt;
        </div>
      </div>
    </div>
  );
};
export default DiseaseDoc;
