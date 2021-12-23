import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Reddit } from "../../assets/icons/reddit.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";

export default function Social() {
  return (
    <div className="social-row">
      {/* <Link href="https://github.com/Gla-DAO" target="_blank">
        <SvgIcon color="primary" component={GitHub} />
      </Link> */}

      <Link href="https://t.me/GalacticDAO" target="_blank">
        <SvgIcon color="primary" component={Telegram} />
      </Link>

      <Link href="https://www.reddit.com/r/Galactic_DAO/" target="_blank">
        <SvgIcon color="primary" component={Reddit} viewBox={"0 0 28 28"}/>
      </Link>

      <Link href="https://twitter.com/galactic_dao" target="_blank">
        <SvgIcon color="primary" component={Twitter} />
      </Link>

      <Link href="s://discord.gg/94aP9kRP87" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link>
    </div>
  );
}
