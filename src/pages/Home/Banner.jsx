import { useEffect } from 'react';
import {  AiOutlineArrowRight } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const bannerStyle = {
        backgroundImage: 'url("https://i.ibb.co/hKVq8ps/7360723.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div className="relative bg-cover bg-no-repeat bg-center min-h-screen" style={bannerStyle}   data-aos="fade-right">
            <div
                className="absolute inset-0 flex flex-col items-center justify-center mt-[90px]"
                data-aos="fade-left"
                data-aos-delay="500"
            > 
            <h2 className={` flex text-white text-xl `}>
            <b className='text-6xl '>Journey Beyond </b>
           <i> <b className='text-6xl ml-[20px] text-[#4c63f4]'  data-aos="fade-left"
                data-aos-delay="800">Imagination</b></i>
            </h2>
           
            </div>
            <div>
          
            </div>
        </div>
    );
};

export default Banner;
