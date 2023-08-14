import AvatarLogo from "../../assets/logo-avatar.png";
import styles from "./Avatar.module.css";

export default function Avatar({hasBorder, src}) {
  return (
    <img
      className={ hasBorder ? styles.avatarWithBorder : styles.logoAvatar }
      src={src}
      alt="Avatar"
    />
  );
}
