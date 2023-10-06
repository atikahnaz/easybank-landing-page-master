import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

function MenuHamburger() {
  return (
    <div className="flex items-start justify-center absolute w-full z-20 top-20 md:top-0 md:z-50 md:relative md:w-1/2 md:text-lg">
      <ul className=" font-customSans text-Grayish-Blue w-3/4 h-1/2 z-20 flex flex-col items-center justify-evenly bg-slate-600  md:flex-row md:bg-transparent">
        <li className="pl-2 pt-8 pb-3 md:py-0">
          <a href="#">Home</a>
        </li>
        <li className="pl-2 py-3">
          <a href="#">About</a>
        </li>
        <li className="pl-2 py-3">
          <a href="#">Contact</a>
        </li>
        <li className="pl-2 py-3">
          <a href="#">Blog</a>
        </li>
        <li className="pl-2 py-3 mb-5 md:py-0 md:m-0">
          <a href="#">Careers</a>
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMediumScreen, setMediumScreen] = useState(false);

  function HamburgerClick() {
    setShowMenu(!showMenu);
  }

  // Function to check the screen size and update the state accordingly
  function checkScreenSize() {
    if (window.innerWidth >= 768) {
      setShowMenu(true); // Close the menu on medium screens
    } else {
      setShowMenu(false);
    }
  }
  // Use useEffect to add a listener for screen size changes
  useEffect(() => {
    checkScreenSize(); // Check screen size on initial render
    window.addEventListener("resize", checkScreenSize); // Add a listener for resize events

    return () => {
      // Cleanup: remove the resize listener when the component unmounts
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <nav className="w-screen bg-white fixed z-50 p-5 flex items-center justify-between lg:px-28">
        <img src="/images/logo.svg" alt="logo" />
        {showMenu && <MenuHamburger />}
        <button
          type="button"
          className="hidden md:flex bg-Lime-Green px-7 py-2 rounded-3xl text-base font-bold text-White"
        >
          Request Invite
        </button>
        <img
          className="absolute right-5 md:hidden"
          src="/images/icon-hamburger.svg"
          alt="hamburger"
          onClick={HamburgerClick}
        />
      </nav>
    </>
  );
}

function HeaderPage() {
  return (
    <header className="w-full flex flex-col items-center bg-Very-Light-Gray lg:relative lg:flex-row-reverse lg:top-20 overflow-x-clip">
      <img
        className="w-full h-auto relative lg:hidden"
        src="/images/bg-intro-mobile.svg"
        alt="header"
      />
      <div className="overflow-x-hidden">
        <img
          className="hidden  lg:flex relative max-w-full -top-32 -right-32"
          src="./public/images/bg-intro-desktop.svg"
          alt="header"
        />
      </div>

      <img
        className="max-w-full absolute top-[-4rem] px-3 lg:-right-36 lg:z-40"
        src="public/images/image-mockups.png"
        alt="mockup"
      />

      <div className="px-4 lg:pl-16 xl:pl-28 lg:w-2/3 ">
        <h1 className="relative -top-8 font-customSans text-center text-5xl leading-10 text-Dark-Blue xl:text-6xl lg:text-left">
          Next generation digital banking
        </h1>
        <p className="font-customSans text-center text-base pb-7  text-Grayish-Blue lg:text-xl lg:text-left">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="flex justify-center pb-20 lg:justify-start">
          <button
            type="button"
            className="bg-Lime-Green px-7 py-3 rounded-3xl text-base font-bold text-White"
          >
            Request Invite
          </button>
        </div>
      </div>
    </header>
  );
}

function SectionPage() {
  return (
    <section className=" bg-Light-Grayish-Blue py-16 font-customSans lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:relative lg:top-8 lg:z-20 lg:px-28">
      <div className="lg:col-span-4 lg:top-40 lg:w-1/2 lg:mt-12 lg:h-1/6">
        <h1 className=" text-3xl text-center px-9 pb-5 text-Dark-Blue lg:text-left lg:px-0 lg:m-0 lg:text-5xl">
          Why choose Easybank?
        </h1>
        <p className="text-base text-center px-2 pb-5 text-Grayish-Blue lg:text-left lg:px-0 lg:pb-0 lg:text-lg">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="flex flex-col items-center pt-10 lg:items-start lg:pt-0">
        <img
          className=" max-w-min"
          src="/images/icon-online.svg"
          alt="online"
        />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue lg:text-left">
          Online Banking
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue lg:text-left">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>
      <div className="flex flex-col items-center pt-10 lg:items-start lg:pt-0">
        <img src="/images/icon-budgeting.svg" alt="budget" />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue">
          Simple Budgeting
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue lg:text-left">
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </p>
      </div>
      <div className="flex flex-col items-center pt-10 lg:items-start lg:pt-0">
        <img src="/images/icon-onboarding.svg" alt="onboarding" />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue">
          Fast Onboarding
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue lg:text-left">
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>
      <div className="flex flex-col items-center pt-10 lg:items-start lg:pt-0">
        <img src="/images/icon-api.svg" alt="api" />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue">
          Open API
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue lg:text-left">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
    </section>
  );
}

function Article() {
  return (
    <article className="px-5 py-16 font-customSans bg-Very-Light-Gray lg:grid lg:grid-cols-4 lg:grid-rows-[1fr,4fr] lg:px-28 lg:gap-6">
      <h1 className=" text-center text-4xl text-Dark-Blue pb-5 lg:col-span-4 lg:text-left lg:my-auto lg:text-5xl">
        Latest Articles
      </h1>
      <div className="mb-5  bg-white rounded-lg ">
        <img
          className="rounded-t-lg w-full lg:h-auto"
          src="/images/image-currency.jpg"
          alt="articles"
        />
        <div className=" px-8 py-10">
          <p className="text-xxs text-Grayish-Blue pb-3">By Claire Robinson</p>
          <h5 className=" text-Dark-Blue text-base leading-5 pb-3">
            Receive money in any currency with no fees
          </h5>
          <p className=" text-Grayish-Blue text-customsm">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
      </div>
      <div className="mb-5  bg-white rounded-lg">
        <img
          className="rounded-t-lg w-full"
          src="/images/image-restaurant.jpg"
          alt="articles"
        />

        <div className=" px-8 py-10">
          <p className="text-xxs text-Grayish-Blue pb-3">By Wilson Hutton</p>
          <h5 className=" text-Dark-Blue text-base leading-5 pb-3">
            Treat yourself without worrying about money
          </h5>
          <p className=" text-Grayish-Blue text-customsm">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>
      </div>
      <div className="mb-5  bg-white rounded-lg">
        <img
          className="rounded-t-lg w-full"
          src="/images/image-plane.jpg"
          alt="articles"
        />
        <div className=" px-8 py-10">
          <p className="text-xxs text-Grayish-Blue pb-3">By Wilson Hutton</p>
          <h5 className=" text-Dark-Blue text-base leading-5 pb-3">
            Take your Easybank card wherever you go
          </h5>
          <p className=" text-Grayish-Blue text-customsm">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
      </div>
      <div className="mb-5  bg-white rounded-lg">
        <img
          className="rounded-t-lg w-full"
          src="/images/image-confetti.jpg"
          alt="articles"
        />
        <div className=" px-8 py-10">
          <p className="text-xxs text-Grayish-Blue pb-3">By Claire Robinson</p>
          <h5 className=" text-Dark-Blue text-base leading-5 pb-3">
            Our invite-only Beta accounts are now live!
          </h5>
          <p className=" text-Grayish-Blue text-customsm">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer
      className=" font-customSans bg-Dark-Blue flex flex-col items-center text-White py-10
    lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:px-28"
    >
      <img className=" lg:order-first" src="/images/logo-footer.svg" alt="" />
      <div className="flex py-7 w-full justify-center gap-x-5 lg:order-2 lg:justify-start">
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-youtube.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
      </div>
      <div className="text-center font-light lg:row-span-2 ">
        <ul className="lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:text-left">
          <li className="py-2">
            <a href="">About Us</a>
          </li>
          <li className="py-2">
            <a href="">Contact</a>
          </li>
          <li className="py-2">
            <a href="">Blog</a>
          </li>
          <li className="py-2">
            <a href="">Careers</a>
          </li>
          <li className="py-2">
            <a href="">Support</a>
          </li>
          <li className="py-2">
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className=" bg-Lime-Green my-8 px-10 py-3 rounded-full font-bold lg:m-0 lg:w-fit lg:justify-self-end"
      >
        Request Invite
      </button>
      <p className=" text-Light-Grayish-Blue lg:order-last lg:justify-self-end">
        © Easybank. All Rights Reserved
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <HeaderPage />
      <SectionPage />
      <Article />
      <Footer />

      {/**/}

      {/*<div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
  </div>*/}
    </>
  );
}

export default App;
