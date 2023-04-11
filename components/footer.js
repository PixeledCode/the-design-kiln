const year = new Date;

const Footer = () => {
  return(
    <div className="footer">
      <span>&copy;</span> {year.getFullYear()} | Developed by <a target='__blank' href="https://pixeledcode.github.io/">PixeledCode</a>
    </div>
  )
}
export default Footer;
