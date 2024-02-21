import React from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import ReviewHeader from './ReviewHeader';
import ReviewCard from './ReviewCard';
import Getintouch from '../Getintouch';
import Officeaddress from '../Officeaddress';
import Footer from '../Footer';

const ReviewPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>All Reviews</li>
        </ul>
      </div>

      <div className='px-5 md:px-10'>
      <div className='shadow-md rounded-md p-4'>
      <ReviewHeader></ReviewHeader>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>

      {/* Pagination buttons */}
      <div className='flex items-center justify-center mt-20 mb-3 gap-3'>
        <button className='bg-[#5854A8] w-9 h-9 rounded text-white font-semibold text-sm flex justify-center items-center'>
            <FaCaretLeft className=''></FaCaretLeft>
        </button>
        <button className='bg-[#5854A8] w-9 h-9 rounded text-white font-semibold text-sm flex justify-center items-center'>
            1
        </button>
        <button className='bg-[#5854A8] w-9 h-9 rounded text-white font-semibold text-sm flex justify-center items-center'>
            ...
        </button>
        <button className='bg-[#5854A8] w-9 h-9 rounded text-white font-semibold text-sm flex justify-center items-center'>
            10
        </button>
        <button className='bg-[#5854A8] w-9 h-9 rounded text-white font-semibold text-sm flex justify-center items-center'>
            <FaCaretRight className=''></FaCaretRight>
        </button>
      </div>
      </div>
      </div>
      
      <Getintouch></Getintouch>
      <Officeaddress></Officeaddress>
      <Footer></Footer>
        </div>
    );
};

export default ReviewPage;