import "./App.css";

function Navbar() {
  return (
    <nav className="w-full bg-white fixed z-10 p-5 flex items-center  md:justify-between">
      <img src="/images/logo.svg" alt="logo" />
      <ul className="hidden md:flex  ">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="pl-2">
          <a href="#">About</a>
        </li>
        <li className="pl-2">
          <a href="#">Contact</a>
        </li>
        <li className="pl-2">
          <a href="#">Blog</a>
        </li>
        <li className="pl-2">
          <a href="#">Careers</a>
        </li>
      </ul>
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
      />
    </nav>
  );
}

function HeaderPage() {
  return (
    <header className="w-screen relative bg-Very-Light-Gray">
      <img
        className="w-full h-auto relative"
        src="/images/bg-intro-mobile.svg"
        alt="header"
      />
      <img
        className="max-w-full absolute top-[-4rem] px-3"
        src="/images/image-mockups.png"
        alt="mockup"
      />
      <div className="px-4">
        <h1 className="relative -top-8 font-customSans text-center text-5xl leading-10 text-Dark-Blue">
          Next generation digital banking
        </h1>
        <p className="font-customSans text-center text-base pb-7  text-Grayish-Blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="flex justify-center pb-20">
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
    <section className=" bg-Light-Grayish-Blue py-16 font-customSans">
      <div>
        <h1 className=" text-3xl text-center px-9 pb-5 text-Dark-Blue">
          Why choose Easybank?
        </h1>
        <p className="text-base text-center px-2 pb-5 text-Grayish-Blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex flex-col items-center pt-10">
        <img
          className=" max-w-min"
          src="/images/icon-online.svg"
          alt="online"
        />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue">
          Online Banking
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>
      <div className="flex flex-col items-center pt-10">
        <img src="/images/icon-budgeting.svg" alt="budget" />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue">
          Simple Budgeting
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue">
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </p>
      </div>
      <div className="flex flex-col items-center pt-10">
        <img src="/images/icon-onboarding.svg" alt="onboarding" />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue">
          Fast Onboarding
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue">
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>
      <div className="flex flex-col items-center pt-10">
        <img src="/images/icon-api.svg" alt="api" />
        <h3 className="text-xl text-center px-2 pt-5 text-Dark-Blue">
          Open API
        </h3>
        <p className="text-base text-center px-2 pt-5 text-Grayish-Blue">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
    </section>
  );
}

function Article() {
  return (
    <article className="px-5 py-16 font-customSans bg-Very-Light-Gray">
      <h1 className=" text-center text-4xl text-Dark-Blue pb-5">
        Latest Articles
      </h1>
      <div className="mb-5  bg-white rounded-lg">
        <img
          className="rounded-t-lg w-full"
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
    <footer className=" font-customSans bg-Dark-Blue flex flex-col items-center text-White py-10">
      <img className="" src="public/images/logo-footer.svg" alt="" />
      <div className="flex py-7 w-full justify-center gap-x-5">
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-youtube.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
      </div>
      <div className="text-center font-light">
        <ul>
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
        className=" bg-Lime-Green my-8 px-10 py-3 rounded-full font-bold"
      >
        Request Invite
      </button>
      <p className=" text-Light-Grayish-Blue">
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
