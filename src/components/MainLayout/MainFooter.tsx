import { Layout } from "antd";
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: "center", marginTop: 50 }}>
      React product ©2023 Created by{" "}
      <a href="https://github.com/Anubhavjain786" target="_blank">
        Anubhav Jain
      </a>
      .
    </Footer>
  );
};

export default MainFooter;
