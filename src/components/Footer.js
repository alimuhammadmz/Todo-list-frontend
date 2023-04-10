import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-3">
      <p className="text-center">
        Copyright &copy; {new Date().getFullYear()} To-do List
      </p>
    </footer>
  );
}

export default Footer;
