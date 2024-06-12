// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" w-full   py-4 px-20 ">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <Link href="/privacy">
            Privacy Policy      </Link>
          </li>
          <li>
            <Link href="/terms">
            Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/contact">
            Contact </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
