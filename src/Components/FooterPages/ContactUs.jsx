import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "../styles/Officeaddress.css";
import Footer from "../Footer";


const ContactUs = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        {/* Breadcumber menu */}
        <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="px-10">
        <h1 className="text-4xl font-medium text-gray-700 text-center mb-3">
        Contact Us
        </h1>
        <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>

        <div className="px-10">
        <h1 className="text-2xl font-medium text-gray-700 text-center mb-10">Get in touch with us</h1>
        <div className="shadow-lg rounded-l-none md:rounded-l-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="p-5">
                <h2 className="text-gray-700 text-xl font-bold mb-4">Corporate Office</h2>
                
                <div className="flex items-center gap-2 mb-7">
                <IoMdCall className="text-[#00A79D] text-3xl"></IoMdCall>
                    <p className="flex flex-col">
                        <span>+91 995 599 2502</span>
                        <span>+91 995 599 2505</span>
                    </p>
                </div>

                <div className="flex items-center gap-2 mb-7">
                <MdAccessTimeFilled className="text-[#00A79D] text-3xl"></MdAccessTimeFilled>
                    <p className="">
                    10am to 10pm, all days
                    </p>
                </div>

                <div className="flex items-center gap-2 mb-7">
                <MdEmail className="text-[#00A79D] text-3xl"></MdEmail>
                    <p className="">
                    webmedlifeeasy@gmail.com
                    </p>
                </div>

                <div className="flex items-center gap-2 mb-7">
                <FaLocationDot className="text-[#00A79D] text-3xl"></FaLocationDot>
                    <p className="">
                    H.NO, 2M/94, Bahadurpur Housing Colony, Kankarbagh, <br /> Chitragupta Nagar, Patna, Bihar 800026
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="bg-[#00A79D] px-5 md:px-16 py-5 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg flex justify-center items-center">
                <div className="w-full">
                <h2 className="text-2xl font-bold mb-4 text-white">Write to us</h2>

{/* Name input field */}
    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Name</p>
        <input
  type="text"
  className="bg-white p-3 rounded-lg focus:outline-none w-full"
  placeholder="Enter Name"
/>
    </div>

{/* Email input field */}
    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Email</p>
        <input
  type="email"
  className="bg-white p-3 rounded-lg focus:outline-none w-full"
  placeholder="Enter Your Email"
/>
    </div>

{/* Phone input field */}
    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Phone</p>
        <input
  type="number"
  className="bg-white p-3 rounded-lg focus:outline-none w-full"
  placeholder="Enter Your Phone Number"
/>
    </div>

{/* Message input field */}
    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Message</p>
        <textarea
        className="bg-white p-3 rounded-lg focus:outline-none w-full"
        placeholder="Write Your Message Here"
         name="" id="" cols="30" rows="10"></textarea>
    </div>

            {/* Submit button */}
            <div className='flex justify-center'>
    <button className="bg-gray-800 text-white p-3 rounded-3xl w-80">Submit</button>
    </div>
                </div>
            
            </div>
        </div>
        </div>
      </div>



      {/* Map */}
      <div className="py-10">
      <h1 className="text-4xl font-medium text-gray-700 text-center mb-5">
      View on map
        </h1>
      <div className="flex justify-center items-center">
      <div className="oa-right-card">
        {/* <img src={map} alt="map"></img> */}
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.3079224902253!2d85.16769397568636!3d25.594682277457196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59304941fea5%3A0xf9308c05b31a8b5a!2sMED%20LIFE%20EASY%20(Best%20medical%20Treatment)!5e0!3m2!1sen!2sin!4v1703695792300!5m2!1sen!2sin"
          width="90%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
