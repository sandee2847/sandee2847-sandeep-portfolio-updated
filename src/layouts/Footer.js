const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 m-10px-tb">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://github.com/sandee2847">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/sandeepsharma2847/">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-md-6 m-10px-tb text-center text-md-right">
            <p>© {new Date().getFullYear()} copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
