import { BsGithub, BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="bg-black-100 p-8 min-h-40 rounded-tl-3xl rounded-tr-3xl grid place-content-center gap-2 border-t border-white-100"
    >
      <h3 className="text-center font-medium">Contact me</h3>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <a
          href="mailto:kosticivan5@gmail.com"
          target="_blank"
          className="hover:text-white-100 flex items-center capitalize gap-1"
        >
          <MdAlternateEmail />
          email
        </a>
        <a
          href="https://t.me/Ivanwbdv"
          target="_blank"
          className="hover:text-white-100 flex items-center capitalize gap-1"
        >
          <LiaTelegramPlane />
          telegram
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=381616549561"
          target="_blank"
          className="hover:text-white-100 flex items-center capitalize gap-1"
        >
          <FaWhatsapp />
          whatsApp
        </a>
        <a
          href="tel:89911470400"
          target="_blank"
          className="hover:text-white-100 flex items-center capitalize gap-1"
        >
          <BsTelephone />
          tel
        </a>
        <a
          href="https://github.com/Kosticivan5"
          target="_blank"
          className="hover:text-white-100 flex items-center capitalize gap-1"
        >
          <BsGithub />
          gitHub
        </a>
      </div>
      <p className="text-center">copyright &copy; {year} Ivan Kostic</p>
    </footer>
  );
};
export default Contact;
