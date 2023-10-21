import React, { useState } from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Handle your subscription logic here
        // For now, we'll just clear the email input
        setEmail('');
    };

    return (
        <div>
            <div className='h-fit' style={{ backgroundImage: "url('https://i.ibb.co/6WzN429/footer.jpg')" }}>
                <div className='bg-no-repeat bg-center bg-cover text-white p-8'>
                    <div className='flex justify-between flex-col gap-20 lg:flex-row w-3/4 mx-auto'>
                        <div>
                            <div className='flex items-center mb-10'>
                                <img className='w-[190px] rounded-xl' src="https://i.ibb.co/xsJJSwp/cover.png" alt="" />
                            </div>
                            <div>
                                <ul className='mt-6 flex flex-col gap-2'>
                                    <li className='flex gap-2 items-center'><MdLocationOn className='text-[#2cae74] text-2xl' /><p> 828 Circuit Street, Electropolis, Silicon Valley, USA</p></li>
                                    <li className='flex gap-2 items-center'><BsTelephoneFill className='text-[#2cae74] text-2xl' /><p>+8 (800) 238 9997 (admin)</p></li>
                                    <li className='flex gap-2 items-center'><MdEmail className='text-[#2cae74] text-2xl' /><p>besbuddycar77@gmail.com</p></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-semibold text-4xl mb-3 text-[#2cae74]'>Social Links</h2>
                            <p>You can find us from social links given below</p>
                            <div className='flex gap-3 mt-8'>
                                <FaFacebookSquare className='text-[#1d1ddd] text-4xl' />
                                <RiInstagramFill className='text-[#d71ddd] text-4xl' />
                                <FaYoutube className='text-[#dd1d1d] text-4xl' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-4xl mb-8 font-semibold text-[#2cae74]'>Subscribe</h2>
                            <input
                                className='p-1 mb-3 text-black pl-2'
                                type="text"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /><br />
                            <button
                                className='bg-[#1d7edd] text-[#20252b] font-semibold py-1 px-3'
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0a151e] text-[#2cae74] p-3 text-center'>
                <p>© Best Buddy  2023 | Created by <span>Mahtab Uddin</span></p>
            </div>
        </div>
    );
};

export default Footer;
