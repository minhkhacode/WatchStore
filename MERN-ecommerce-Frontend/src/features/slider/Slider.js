import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
    const slides = [
        {
            url: 'https://lh3.googleusercontent.com/pw/AP1GczMvEV0SMhlmJ7i12_E58Mhe_ByCduhJpW6vKKhxd0XWGvplS6-J2Y3yomX-plGjJoWpnMG0noN7EK4dvKTLp8rS0v2wani04IC9R3yh3Xvm5Xs4TIxNngrOxxA1zTT13Id31pJM9e46AEmSDV6m4hZR=w2048-h596-s-no?authuser=0',
        },
        {
            url: 'https://lzd-img-global.slatic.net/us/domino/62cedd08bf5fa229c47dc1356712e55c.jpg_2200x2200q80.jpg_.webp',
        },
        {
            url: 'https://donghoduyanh.com/images/slideshow/2024/04/09/compress/tang-dong-ho-treo-tuong_1712637612.png',
        },
        {
            url: 'https://bizweb.dktcdn.net/100/463/752/themes/876147/assets/slider_3.jpg?1699180702642',
        },

        {
            url: 'https://bizweb.dktcdn.net/100/463/752/themes/876147/assets/slider_1.jpg?1699180702642',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    useEffect(() => {
        const autoSlide = setInterval(nextSlide, 2000);
        return () => {
            clearInterval(autoSlide);
        }
    }, [currentIndex])

    return (
        <div className='max-w-[1400px] h-[350px] w-full relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-100'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex text-slate-400 w-full absolute bottom-[10px] justify-center items-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;