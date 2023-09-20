
const Footer = () => {
  return (
    <footer className="p-10 bg-theme-color-200 text-white">
      <div className="container mx-auto footer">
      <form data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <header className="footer-title text-lg normal-case text-theme-color-100">Secure your place on the waiting list now and <br />
test our real estate software exclusively</header>
<p>Get a status update about our <br />
software every 1-2 months <br />
and find out directly when <br />
our trial version is available. <br />
Of course, you can <br />
unsubscribe at any time</p>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative flex">
              <input
                type="text"
                placeholder="username@site.com"
                className="rounded-none outline-none rounded-s-2xl   pl-4 py-2 md:py-3"
              />
              <button className="hover:bg-theme-color-200 border-none transition-all duration-500 ease-in-out normal-case bg-theme-color-100 text-white text-md md:text-lg rounded-tr-2xl rounded-none px-3">Subscribe</button>
            </div>
          </fieldset>
        </form>
        <nav data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <header className="footer-title text-lg normal-case text-theme-color-100">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <header className="footer-title text-lg normal-case text-theme-color-100">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <header className="footer-title text-lg normal-case text-theme-color-100">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        
      </div>
    </footer>
  );
};

export default Footer;
