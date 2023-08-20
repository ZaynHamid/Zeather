import React from 'react'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./icons";

const Footer = () => {
    return (
        <div className="bg-[#1d1d1f] mt-10">
            <div className="md:flex items-center justify-start p-6 container mx-auto">
                <div className='md:w-1/2'>
                    <h2 className="font-semibold text-xl text-white">About me:</h2>
                    <p className='text-white my-4'>I am a front-end developer with over 3 years of experience in the field of Web Development.</p>
                    <a href='https://zaynsportfolio.netlify.app' target='_blank' rel='noreferrer' className='text-white border border-white p-2 hover:text-black hover:bg-white rounded-lg my-2'>Learn more about me</a>
                </div>
                <div className="md:mt-0 mt-8 flex flex-col md:items-end w-1/2" style={{ color: "white" }}>
                    <div className="flex gap-4">
                        <a href='https://www.linkedin.com/in/zayn-hamid-8ba669200/' target='_blank' rel='noreferrer'>
                            <LinkedInIcon />
                        </a>

                        <a href='https://github.com/zaynhamid' target='_blank' rel='noreferrer'>
                            <GitHubIcon />
                        </a>

                        <a href='https://twitter.com/Web_Dev_Zayn' target='_blank' rel='noreferrer'>
                            <TwitterIcon />
                        </a>

                    </div>
                    <p className="md:text-lg mt-2">or contact me via email</p>
                    <p className="md:text-xl text-[16px] my-1 font-light">zainhamid982@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer