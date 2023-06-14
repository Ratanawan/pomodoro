import { Layout } from "antd";
import TomatoIcon from "@/assets/tomato.svg";

const Header = () => {
  return (
    <Layout.Header
      className="d-flex align-items-center"
    >
      <img src={TomatoIcon} style={{ width: "36px", height: "36px", margin: "16px" }} alt="Tomato" />
      <span className="text-white text-align-center fw-bold" style={{ fontSize: "36px" }}>Pomodoro</span>
    </Layout.Header>
  );
}

export default Header;