import Image from "next/image";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto py-16 px-16 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#000300]">
      <div>
        <div className="flex gap-4 pb-2">
          <Image
            src="assets/unnLogo.svg"
            alt="UNN Logo"
            width={48}
            height={48}
          />
          <Image
            src="assets/medicalLogo.svg"
            alt="Medical Logo"
            width={40}
            height={40}
          />
        </div>
        <p className="py-4">
          The University of Nigeria College of Medicine Alumni Association -
          North America (UNCOMAA-NA) is established exclusively for charitable,
          educational, and scientific purposes. Our mission is to promote and
          foster the interests of The University of Nigeria College of Medicine.
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 ml-6">
        <div>
          <h6 className="font-medium text-gray-400">Membership</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Quick Links</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Carrers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Other Links</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
