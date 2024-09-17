export const Header = () => {
  return (
    <div className="flex justify-center w-full pt-5">
      <div className="container flex justify-between h-[45px]">
        <div className="flex items-center">
          <img width={150} height={36} src="/Logo.png" alt="" />
        </div>
        <div className="flex gap-12 items-center">
          <p>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Help</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="btn btn-ghost rounded-[30px]">Sign in</div>
          <div className="w-[150px] btn btn-outline btn-error rounded-[30px]">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};
