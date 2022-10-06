import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.module.css";

function JobTypeServices() {
  return (
    <div className="pt-10 pb-20">
      <p className="text-2xl font-semibold text-center mb-10">
        Services Related To Graphics &amp; Design
      </p>
      <div className="flex flex-wrap justify-center items-center px-16 space-x-3 space-y-3">
        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Minimalist logo design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Signature logo design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Mascot logo design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          3d logo design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Hand drawn logo design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Vintage logo design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Remove background
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Photo restoration
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Photo retouching
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Image resize
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Product label design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Custom twitch overlay
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Custom twitch emotes
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Gaming logo
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Children book illustration
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Instagram design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Movie poster design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Box design
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Logo maker
        </Link>

        <Link
          className={`text-sm font-semibold hover:text-black hover:underline ${Style.serviceLink}`}
          to="/"
        >
          Logo ideas
        </Link>
      </div>
    </div>
  );
}

export default JobTypeServices;
