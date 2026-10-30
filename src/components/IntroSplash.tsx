import Image from "next/image";
import CarIcon from "@/components/CarIcon";
import PlaneIcon from "@/components/PlaneIcon";

// Runs before the overlay is parsed: hides the intro once it has been seen this browser session.
// If storage is blocked (some private windows) the intro simply plays.
const SEEN_SCRIPT = `try{if(sessionStorage.getItem("hm-intro"))document.documentElement.dataset.intro="seen";else sessionStorage.setItem("hm-intro","1")}catch(e){}`;

// Runs just after the overlay is parsed: starts the drive only once the scene is really on screen.
// It waits for the logo (at most 400ms), then two frames: the second runs after the first painted
// frame, so the visitor always sees the car leave point A. A background tab waits until it's viewed.
const PLAY_SCRIPT = `(function(){var d=document.documentElement;if(d.dataset.intro==="seen")return;var done=false;function play(){if(done)return;done=true;requestAnimationFrame(function(){requestAnimationFrame(function(){d.dataset.intro="play"})})}var img=document.querySelector(".intro-splash img");if(!img||img.complete)return play();img.addEventListener("load",play);img.addEventListener("error",play);setTimeout(play,400)})()`;

// Intro screen on the first full page load of a visit: a car drives the route to Heathrow and the
// plane takes off, then the screen fades into the page, which has rendered underneath all along.
// The animation itself is CSS (globals.css, "Intro screen"); PLAY_SCRIPT only says when to start.
// If JavaScript never runs, the still scene fades out on its own after a few seconds.
// Decorative: hidden from assistive tech, and clicks pass straight through.
export default function IntroSplash() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SEEN_SCRIPT }} />
      <div
        aria-hidden="true"
        className="intro-splash pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-4"
      >
        {/* Scaled as one group so the car's travel distance in globals.css still matches the road. */}
        <div className="flex scale-125 flex-col items-center md:scale-150">
          <Image
            src="/images/logo.png"
            alt=""
            width={800}
            height={224}
            sizes="270px"
            loading="eager"
            className="h-12 w-auto"
          />
          <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-[#0A2740]">
            YOUR DOOR TO HEATHROW
          </p>
          <div className="relative mt-6 flex h-6 w-56 items-center">
            <span className="absolute left-0 h-2.5 w-2.5 rounded-full bg-[#0A2740]" />
            <svg className="intro-road absolute left-3 h-[2px] w-[11.25rem] overflow-visible">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#1FA3D6"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>
            <span className="intro-car absolute left-4">
              <CarIcon />
            </span>
            <span className="intro-plane absolute right-0 text-[#1FA3D6]">
              <PlaneIcon className="h-6 w-6" />
            </span>
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: PLAY_SCRIPT }} />
    </>
  );
}
