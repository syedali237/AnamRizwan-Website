import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#FFB3BC] border-b-2 border-black sticky top-0 z-10">
      <div className="flex flex-row-reverse gap-2">
        <Link to={"/projects"} className="m-5">
          projects
        </Link>
        <Link to={"/skills"} className="m-5">
          skills
        </Link>
        <Link to={"/experience"} className="m-5">
          experience
        </Link>
        <Link to={"/"} className="m-5">
          home
        </Link>
      </div>
    </nav>
  );
}