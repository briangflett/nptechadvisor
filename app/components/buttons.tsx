"use client";

import Link from "next/link";

export const GetStartedButton = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Link
        href="/contact?interest=Services"
        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Get Started
      </Link>
    </div>
  );
};
export const VolunteerButton = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0">
      <Link
        href="/contact?interest=Volunteer"
        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Volunteer
      </Link>
    </div>
  );
};
export const DonateButton = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0">
      <Link
        href="/"
        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Donate
      </Link>
    </div>
  );
};
