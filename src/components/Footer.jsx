import logo from '../assets/img/logo.png'
import whatsapp from '../assets/img/whatsapp.svg'
import twitter from '../assets/img/twitter.svg'
import instagram from '../assets/img/instagram.svg'


const Footer = () => {
    const date = new Date()
    return (
        <footer className='bg-white/25 flex flex-col md:flex-row justify-between p-[90px] text-white'>
            <div className='flex flex-col my-5 md:my-0'>
                <img src={logo} alt='Hernalytics logo' className='object-cover mb-3 w-[138px] md:w-[200px]' />
                <p className='font-normal text-sm leading-4 mb-3'>
                Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria
                </p>
                <p className='font-normal text-sm leading-4'>
                &copy; {date.getFullYear()} Hernalytics
                </p>
            </div>
            <div className='flex flex-col my-5 md:my-0'>
                <p className='font-bold text-sm '>
                About
                </p>
                <p className='font-normal text-sm '>
                Our Story
                </p>
                <p className='font-normal text-sm '>
                Blog
                </p>
                <p className='font-normal text-sm '>
                About Hernalytics
                </p>
                <p className='font-normal text-sm '>
                Videos
                </p>
            </div>
            <div className='flex flex-col my-5 md:my-0'>
                <p className='font-bold text-sm '>
                Support
                </p>
                <p className='font-normal text-sm '>
                FAQs
                </p>
                <p className='font-normal text-sm '>
                Privacy Policy
                </p>
                <p className='font-normal text-sm '>
                Terms of Service
                </p>
            </div>
            <div className='flex flex-col my-5 md:my-0'>
                <p className='font-bold text-sm '>
                Let's chat!
                </p>
                <a href="mailto:hernalytics@gmail.com">hernalytics@gmail.com</a>
                <a href="tel:+2348012345678">+234 801 234 5678</a>

                <div className='flex flex-row md:justify-between'>
                    <img src={instagram} className='w-[24px] h-[24px] mr-8 md:mx-0' alt='instagram logo'/>
                    <img src={twitter} className='w-[24px] h-[24px] mr-8 md:mx-0' alt='twitter logo'/>
                    <img src={whatsapp} className='w-[24px] h-[24px] mr-8 md:mx-0' alt='whatsapp logo'/>
                </div>
            </div>
        </footer> 
    )
}

export default Footer