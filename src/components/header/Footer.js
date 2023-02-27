import classes from './Footer.module.css';
import FBSvg from '../../supplementary/Svg/FB-Svg';
import TwitterSvg from '../../supplementary/Svg/Twitter-Svg';
import LinkedinSvg from '../../supplementary/Svg/Linkedin-Svg';

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <h2>
        © Created by - <span className={classes.name}>Nikoloz Gogishvili</span>
      </h2>
      <div className={classes.mediaLinks}>
        <a href='https://www.facebook.com/nika.gogishvili1'>
          <FBSvg />
        </a>
        <a href='https://www.linkedin.com/in/nikoloz-gogishvili-152940197/'>
          <LinkedinSvg />
        </a>
        <a href='https://twitter.com/GogishviliNika'>
          <TwitterSvg />
        </a>
      </div>
    </div>
  );
};

export default Footer;
