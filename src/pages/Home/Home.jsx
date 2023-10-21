
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import { GiHandOk } from 'react-icons/gi';
import { MdHandyman } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import BrandCard from "./BrandCard";
import {  useState } from "react";


const Home = () => {

    const [buttonText, setButtonText] = useState("+");
    const handleButtonClick = () => {
        setButtonText(prevText => (prevText === "+" ? "-" : "+"));
    };
   const brands=useLoaderData();
   
   
    return (
        <div>
            <Banner></Banner>

            <div className='w-3/4 mx-auto text-center py-20'>
                <div className='flex lg:flex-row flex-col lg:text-center lg:gap-5 gap-8'>
                    <div data-aos="fade-right" className='mx-auto flex flex-col justify-center items-center'>
                        <GiHandOk className='text-6xl text-[#FFB807]' />
                        <h3 className='text-4xl pb-3 font-semibold'>Best Products</h3>
                        <p className='text-slate-600'>We sell best products. We check all of our <br /> products before we sell it.</p>
                    </div>
                    <div data-aos="fade-down" className='mx-auto flex flex-col justify-center items-center'>
                        <MdHandyman className='text-6xl text-[#FFB807]' />
                        <h3 className='text-4xl pb-3 font-semibold'>Long Lasting</h3>
                        <p className='text-slate-600'>Our products will last longer than you can <br /> ever expect.</p>
                    </div>
                    <div data-aos="fade-left" className='mx-auto flex flex-col justify-center items-center'>
                        <FaUserFriends className='text-6xl text-[#FFB807]' />
                        <h3 className='text-4xl pb-3 font-semibold'>Professional Workers</h3>
                        <p className='text-slate-600'>Our workers are Professional, fast and very <br /> kind at their jobs.</p>
                    </div>
                </div>
            </div>
            <div className="mt-[40px] " data-aos="fade-right" >
           <h1 className="text-center text-4xl font-bold mb-4 "> Find Your Dream <span className="text-[#FFB807] ml-2"><i>Buddy</i> </span> </h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {
                        
                        brands.map(brand =>
                            <BrandCard
                            
                              key={brand.id}
                              brands={brand}
                            ></BrandCard>
                            
                        )
                     
                    }
                           
            </div>
           </div>

           <div className='mb-20 mt-[40px]'>
                <h1 className='text-5xl font-bold text-[#d8b865] text-center mb-5'>FAQ Section</h1>
                <div className='flex lg:flex-row flex-col-reverse gap-10 w-11/12 lg:w-3/4 mx-auto'>
                    <div data-aos="fade-right" className='w-11/12 lg:w-3/4 mx-auto flex flex-col gap-5 mt-7'>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    What types of cars do you offer for sale on your website?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p> Our website offers a wide range of cars from various brands, including sedans, SUVs, trucks, and more. We aim to provide options to suit different preferences and needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    Can I finance a car purchase through your website?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, we offer financing options. We work with reputable financial institutions to help you secure a car loan with favorable terms. You can find more information on our financing page.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    Are the cars on your website new or used?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>We offer both new and used cars. You can browse our inventory to find new models with the latest features or explore our used car listings for more budget-friendly options.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    How can I schedule a test drive or inquire about a specific vehicle?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>To schedule a test drive or inquire about a particular vehicle, simply contact our sales team through the website or by phone. We'll be happy to assist you in arranging a test drive or providing additional information.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    What sets your website apart from other car dealerships?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p> We take pride in offering a diverse selection of cars, competitive pricing, and exceptional customer service. Our team is knowledgeable and ready to assist you in finding the right vehicle for your needs. We also provide detailed vehicle descriptions and photos to make your online shopping experience informative and convenient.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className=''>
                        <img src="/faq.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;