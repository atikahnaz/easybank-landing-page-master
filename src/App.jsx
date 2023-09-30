import "./App.css";

function App() {
  return (
    <>
      <nav className="w-full flex">
        <img src="public/images/logo.svg" alt="logo" />
        <div className=" invisible lg:visible">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Request Invite</a>
        </div>
        <img
          className="md:invisible"
          src="public/images/icon-hamburger.svg"
          alt="hamburger"
        />
      </nav>
      <header>
        <img src="public/images/bg-intro-mobile.svg" alt="header" />
        <img src="public/images/image-mockups.png" alt="mockup" />
        <div>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button>Request Invite</button>
        </div>
      </header>
      <section>
        <div>
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div>
          <img src="public/images/icon-online.svg" alt="online" />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img src="public/images/icon-budgeting.svg" alt="budget" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div>
          <img src="public/images/icon-onboarding.svg" alt="onboarding" />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div>
          <img src="public/images/icon-api.svg" alt="api" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </section>
      <article>
        <h1>Latest Articles</h1>
        <div>
          <img
            src="public/images/image-currency.jpg"
            alt="articles</h1>
        <div>"
          />
          <p>By Claire Robinson</p>
          <h5>Receive money in any currency with no fees</h5>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
        <div>
          <img src="public/images/image-restaurant.jpg" alt="articles" />
          <p>By Wilson Hutton</p>
          <h5>Treat yourself without worrying about money</h5>
          <p>
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>
        <div>
          <img src="public/images/image-plane.jpg" alt="articles" />
          <p>By Wilson Hutton</p>
          <h5>Take your Easybank card wherever you go</h5>
          <p>
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
        <div>
          <img src="public/images/image-confetti.jpg" alt="articles" />
          <p>By Claire Robinson</p>
          <h5>Our invite-only Beta accounts are now live!</h5>
          <p>
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </article>
      <footer>
        <img src="public/images/logo.svg" alt="" />
        <div>
          <img src="public/images/icon-facebook.svg" alt="" />
          <img src="public/images/icon-youtube.svg" alt="" />
          <img src="public/images/icon-twitter.svg" alt="" />
          <img src="public/images/icon-pinterest.svg" alt="" />
          <img src="public/images/icon-instagram.svg" alt="" />
        </div>
        <div>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <button>Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </footer>

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
