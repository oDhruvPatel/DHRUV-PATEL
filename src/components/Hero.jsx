import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 0;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    // Reset video styles
    gsap.set("#next-video", {
      visibility: "hidden",
      scale: 0,
      width: "64px",
      height: "64px",
    });

    gsap.from("#middle", {
      width: "92px",
      height: "92px",
      duration: 0.5,
      delay: 0.2,
    });

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useEffect(() => {
    if (hasClicked) {
      gsap.set("#next-video", { visibility: "visible" });
      gsap.to("#next-video", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 0.7,
        ease: "power1.out",
        onStart: () => {
          nextVdRef.current.play();
        },
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(11% 0, 94% 0, 89% 100%, 6% 100%)",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-hidden " id="home">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden  bg-black"
      >
      
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
     
      

        <div>
          <div
            className=" absolute-center absolute z-50 md:size-64 size-32 pointer-events-none cursor-pointer overflow-hidden rounded-lg md:hover:border-[1px] md:hover:border-black"
            id="middle"
          >
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-20  md:opacity-0 transition-all duration-500 ease-in hover:scale-100 md:hover:opacity-100 opacity-100 md:size-64 size-32 anim-1"
            >
              <video
                ref={nextVdRef}
                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center hover:scale-150 object-cover object-center transition-all duration-500 "
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          
          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100 md:block hidden">
          developer
        </h1>

       

            {/* for mobile screens */}


            <h1 className="special-font hero-heading text-blue-100 z-50 w-screen  text-center relative top-28 mx-auto md:hidden block !text-[5rem] px-2">
              <div className="w-full text-left">software</div>
              <div className="w-full text-right">developer</div>
            </h1>

            <div className="md:hidden  absolute bottom-0 pb-3 px-2 flex flex-row justify-between z-50 items-center w-screen bg-gradient-to-t from-[#0e0e0e]/80 to-transparent text-white">
            <p className="   max-w-60 font-robert-regular text-blue-75 !text-sm">
              Hi👋, I'm Dhruv Patel <br /> <span className="opacity-70">
              aiming to make a difference <br /> 
              with robust software solutions.
              </span>
            </p>

            
            <Button
              id="watch-trailer"
              title="Let's talk"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1 h-10"
            />
            </div>

            {/* mobile screen ends */}

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
           
          <h1 className="special-font hero-heading text-blue-100  md:block hidden"> 
              software
            </h1>
            <div className="md:block hidden">
            <p className="md:block hidden mb-5 md:max-w-80 max-w-64 font-robert-regular text-blue-75">
              Hey there 👋, I'm Dhruv Patel <br /> <span className="opacity-70">aiming to make a difference
              with user-friendly and robust software solutions.</span>
            </p>

            
            <Button
              id="watch-trailer"
              title="Let's talk"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1 "
            />
            </div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-[#0e0e0e] md:block hidden">
        developer
      </h1>

      <div class="absolute z-40 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-red-600 size-56 object-cover overflow-hidden clip-animate">
  <img src="https://www.perkosis.com/uploads/staffs/big/9.jpg" alt="profile" />
</div>



      

    </div>
  );
};

export default Hero;
