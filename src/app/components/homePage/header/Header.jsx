import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full m-auto pt-10 flex justify-around">
      <div className="flex justify-center items-center">
        <Image
          src="/Logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className="flex justify-between gap-5">
        <button className="">About</button>
        <button className="">Features</button>
        <button className="">Pricing</button>
        <button className="">Testimonials</button>
        <button className="">Help</button>
      </div>
      <div className="flex gap-x-5">
        <button className="btn">Sign In</button>
        <button className="btn btn-outline btn-warning text-[#F53855]">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Header;
