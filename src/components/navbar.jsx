import Link from "next/link";
// import { ThemeToggleButton } from "./ui/button";
import { ThemeController } from "./ui/theme-provider";

const Navbar = () => {
  return (
    <nav className="max-w-[1000px] mx-auto flex justify-between items-center px-10 py-10">
      <div className="flex gap-5 items-center">
        <ThemeController />
        <div className=" px-3 py-2 rounded-md">
          <h1 className="">Nonton Project by Loave</h1>
        </div>
      </div>
      <div className="flex gap-5">
        {/* <button onClick={() => changeTheme("dark")}>Dark</button> */}
        {/* <button onClick={() => changeTheme("light")}>Light</button> */}
        <Link href="/">Home</Link>
        <Link href="/videos">Videos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
