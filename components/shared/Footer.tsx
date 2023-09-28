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
      <div className="lg:col-span-2 md:flex justify-between mt-6 lg:ml-6">
        <div>
          <h6 className="font-medium text-gray-400 max-sm:pt-4">Membership</h6>
          <ul>
            <li className="py-2 text-sm">Become a member</li>
            <li className="py-2 text-sm">Membership Forum</li>
            <li className="py-2 text-sm">Membership Benefits</li>
            <li className="py-2 text-sm">Renew Membership</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 max-md:pt-4">Support</h6>
          <ul>
            <li className="py-2 text-sm">Donate</li>
            <li className="py-2 text-sm">Work with us</li>
            <li className="py-2 text-sm">Membership Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 max-sm:pt-4">Quick Links</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Membership</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Contribute</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 max-sm:pt-4">Other Links</h6>
          <ul>
            <li className="py-2 text-sm">Events</li>
            <li className="py-2 text-sm">Education</li>
            <li className="py-2 text-sm">Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
