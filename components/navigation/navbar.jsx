import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://explorer-testnet.morphl2.io/" target={"https://explorer-testnet.morphl2.io/"}>
				<img
					className={styles.logo_text}
					src="/logo_text.svg"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
