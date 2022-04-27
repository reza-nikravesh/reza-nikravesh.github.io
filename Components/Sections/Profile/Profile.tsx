import Image from "next/image";
import pic from "../../../public/pic.png";
import classes from "./Profile.module.scss";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

import Link from "next/link";
import data from "../../../constants/data";
import dictionary from '../../../public/dictionary.json'

const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profileImage}>
        <Image src={pic} alt="profile picture" />
      </div>
      <div className={classes.title}>
        <h2>{dictionary.en.profile.name}</h2>
        <h5>{dictionary.en.profile.job}</h5>
      </div>
      <div className={classes.contact}>
        <Link href={data.links.cv}>
          <a>
            <button>
              {dictionary.en.profile.downloadButton}
              <FiDownload />
            </button>
          </a>
        </Link>
        <div>
          <Link href={data.links.github}>
            <a>
              <BsGithub />
            </a>
          </Link>
          <Link href={data.links.linkedin}>
            <a>
              <IoLogoLinkedin />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
