import ClientAnchorLink from "@/ui/ClientAnchorLink";
import styles from "./navbar.module.scss";
import Logo from "@/public/logo.svg";
import Button from "@/ui/Button";

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <ClientAnchorLink href="#main">
            <Logo />
          </ClientAnchorLink>
          <Button
            theme="blue"
            href="#choose-name"
            className="max-w-[106px] roboto"
          >
            Get VPN
          </Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
