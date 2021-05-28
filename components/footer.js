const year = new Date;

const Footer = () => {
  return(
    <div className="footer">
      <span>&copy;</span> {year.getFullYear()} | Developed by <a target='__blank' href="https://shoaibahmed.dev">PixeledCode</a>
    </div>
  )
}
export default Footer;