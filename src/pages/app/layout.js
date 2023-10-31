import style from "../app/layout.module.css"
import Menu from "../../components/app/menu";

const Layout = () => {
  return (
    <main
      className={` ${style.layout} flex flex-col lg:flex-row w-full h-full lg:h-screen`}
    >
      <Menu />
    </main>
  );
};

export default Layout;
