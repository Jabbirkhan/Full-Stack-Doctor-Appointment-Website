import React, { useContext, useMemo, useState, useEffect } from 'react'
import { Context } from '../context/context'
import { FaArrowRight } from 'react-icons/fa';
import { MdCalendarToday } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import Pagination from "../components/pagination"
import axiosInstance from '../utils/axiosInstance.js';
import { toast } from 'react-toastify';
import Loader from '../components/loader.jsx';

const Doctors = () => {

  const { currency, authState } = useContext(Context);

  const [category, setCategory] = useState([]);
  const [experience, setExperience] = useState('');
  const [sortBy, setSortBy] = useState('Relevant');
  const [searchTerm, setSearchTerm] = useState('');

  const [searchInput, setSearchInput] = useState('');

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [totalDoctors, setTotalDoctors] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  const handleSearch = useMemo(() =>
    debounce((text) => {
      setSearchTerm(text);
      setCategory([]);
      setExperience('');
      setSortBy('Relevant')
      setPage(1);
    }, 1000), []
  );

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    }
  }, [handleSearch]);

  const toggleCategory = (speciality) => {
    setCategory((prev) => {
      return prev.includes(speciality) ? prev.filter((s) => s !== speciality) : [...category, speciality];
    });
    setPage(1);
  };

  const toggleExperience = (exp) => {
    setExperience(exp);
    setPage(1);
  }

  // const applyFilters = () => {
  //   let filteredDoctors = searchTerm || category || experience ? [...allDoctors] : [...doctors];

  //   if (searchTerm.trim() !== '') {
  //     filteredDoctors = filteredDoctors.filter(doc => doc.name.toLowerCase().includes(searchTerm.toLowerCase()));
  //   }

  //   if (category.length > 0) {
  //     filteredDoctors = filteredDoctors.filter(doc => category.includes(doc.speciality));
  //   }

  //   if (experience) {
  //     filteredDoctors = filteredDoctors.filter((doc) => {
  //       const years = parseInt(doc.experience);

  //       switch (experience) {
  //         case "0-5":
  //           return years >= 0 && years <= 5;
  //         case "5-10":
  //           return years >= 5 && years <= 10;
  //         case "10-15":
  //           return years >= 10 && years <= 15;
  //         case "15+":
  //           return years > 15;
  //         default:
  //           return true;
  //       }
  //     });
  //   }

  //   setFilteredDoctors(filteredDoctors);
  // };

  // const sortDoctors = () => {
  //   const sortedDoctors = [...filteredDoctors];

  //   switch (sortBy) {
  //     case 'High-Low':
  //       sortedDoctors.sort((a, b) => b.fees - a.fees);
  //       break;
  //     case 'Low-High':
  //       sortedDoctors.sort((a, b) => a.fees - b.fees);
  //       break;
  //     default:
  //       applyFilters();
  //       break;
  //   }
  //   setFilteredDoctors(sortedDoctors);
  // };

  // useEffect(() => {
  //   applyFilters();
  // }, [searchTerm, category, experience, allDoctors]);

  // useEffect(() => {
  //   sortDoctors();
  // }, [sortBy]);

  // const specialities = useMemo(() => {
  //   return [...new Set(doctors.map(doc => doc.speciality))];
  // }, [doctors]);

  const [loading, setLoading] = useState(false);
  
  const fetchDoctors = async (page) => {
    try {
      setLoading(true);
      
      const params = new URLSearchParams();

      params.append('page', page);
      params.append('limit', 12);

      if (searchTerm) {
        params.append('search', searchTerm);
      }

      category.forEach((cat) => {
        params.append('category', cat);
      });

      if (experience) {
        params.append('experience', experience);
      }

      if (sortBy) {
        params.append('sort', sortBy);
      }

      const response = await axiosInstance.get(`/api/v1/user/doctors?${params.toString()}`);
      if (response.data.success) {
        setDoctors(response.data.doctors);
        setSpecialities(response.data.specialities);
        setTotalDoctors(response.data.totalDoctors);
        setTotalPages(response.data.totalPages);
        setPage(response.data.currentPage);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (authState === 'authenticated') {
      fetchDoctors(page);
    }
  }, [authState, page, category, experience, sortBy, searchTerm]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  if (doctors.length === 0) {
    return <Loader />
    // return (
    //   <div className='w-full h-screen flex justify-center items-center'>
    //     <div className='flex flex-col'>
    //       <h2 className='mb-5'>Doctors are not found</h2>
    //       <Link to='/' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>Home</Link>
    //     </div>
    //   </div>
    // );
  }

  if (loading) {
    return <Loader />
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Search */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">All Doctors</h2>
          </div>
          <div>
            <input type="text"
              value={searchInput}
              onChange={(e) => {
              handleSearch(e.target.value);
              setSearchInput(e.target.value);
            }} className='px-4 py-2 border border-gray-500 rounded-md outline-none' placeholder='Search by doctor name...' />
          </div>
        </div>

        {/* filter and doctors */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Sidebar for filters and sorting (e.g., by speciality, experience, fees, availability) */}
          {doctors.length > 0 && <div className="w-full md:w-1/4 p-6 shadow-md rounded-2xl">

            <div>
              <h3 className="text-lg font-semibold mb-4">Speciality</h3>
              <div className="space-y-2">
                {specialities.map((speciality, i) => (
                  <label key={i} className="flex items-center">
                    <input type="checkbox" checked={category.includes(speciality)} onChange={() => toggleCategory(speciality)} className="mr-2" />
                    <span className='line-clamp-1'>{speciality}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold my-4'>Experience</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <button onClick={() => toggleExperience('0-5')} className={`px-2 py-1.5 border border-gray-300 rounded-md ${experience === '0-5' ? 'bg-linear-to-r from-purple-600 to-cyan-500 text-white' : ''} hover:text-white hover:bg-linear-to-r hover:from-purple-600 hover:to-cyan-500 transition-all duration-200`}>0-5 Years</button>
                <button onClick={() => toggleExperience('5-10')} className={`px-2 py-1.5 border border-gray-300 rounded-md ${experience === '5-10' ? 'bg-linear-to-r from-purple-600 to-cyan-500 text-white' : ''} hover:text-white hover:bg-linear-to-r hover:from-purple-600 hover:to-cyan-500 transition-all duration-200`}>5-10 Years</button>
                <button onClick={() => toggleExperience('10-15')} className={`px-2 py-1.5 border border-gray-300 rounded-md ${experience === '10-15' ? 'bg-linear-to-r from-purple-600 to-cyan-500 text-white' : ''} hover:text-white hover:bg-linear-to-r hover:from-purple-600 hover:to-cyan-500 transition-all duration-200`}>10-15 Years</button>
                <button onClick={() => toggleExperience('15')} className={`px-2 py-1.5 border border-gray-300 rounded-md ${experience === '15' ? 'bg-linear-to-r from-purple-600 to-cyan-500 text-white' : ''} hover:text-white hover:bg-linear-to-r hover:from-purple-600 hover:to-cyan-500 transition-all duration-200`}>15+ Years</button>
              </div>
            </div>

            <div className='mt-4'>
              <h3 className="text-lg font-semibold mb-4">Consultation Fees</h3>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
              }} className='border border-gray-300 px-5 py-2 rounded-md outline-none'>
                <option value="Relevant" >Sort by: Relevant</option>
                <option value="High-Low">Sort by: High to Low</option>
                <option value="Low-High">Sort by: Low to High</option>
              </select>
            </div>

          </div>}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {doctors.filter((doc) => doc.available === true).map((doc, i) => (
              <Link to={`/doctor/${doc._id}`} key={i} onClick={scrollToTop} className="bg-white rounded-2xl shadow overflow-hidden">

                <div className="h-56 relative">
                  <img src={doc.image} className="w-full h-full object-cover" alt={doc.name} />
                  <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
                    {doc.available === true ? "Available" : "Unavailable"}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg line-clamp-1">{doc.name}</h3>
                  <span className="text-sm text-purple-600">{doc.speciality}</span>

                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="text-xs text-gray-400">Fee</p>
                      <p className="font-bold">{currency}{doc.fees}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Experience</p>
                      <p className="font-bold">{doc.experience} Years</p>
                    </div>
                  </div>
                  <button className="w-full bg-linear-to-r from-purple-600 to-cyan-500 text-white hover:bg-linear-to-r hover:from-purple-700 hover:to-cyan-600 cursor-pointer px-4 py-1.5 rounded-md mt-2">
                    Book Visit
                  </button>
                </div>

              </Link>
            ))}
          </div>

        </div>

      </div>

      {/* pagination */}
      <div className='my-10'>
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  )
}

export default Doctors
