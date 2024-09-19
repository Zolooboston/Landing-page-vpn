import { LocationIcon, ServerIcon, UserIcon } from "../icons";

export const Card = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="container drop-shadow-lg card card-compact bg-base-100 py-6 px-[100px] h-[200px]">
        <div className="card-body">
          <div className="flex justify-between items-center h-full">
            {/* jijig buleg */}
            <div className="flex items-center gap-3">
              <UserIcon />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-extrabold">90+</p>
                <p>Users</p>
              </div>
            </div>

            {/* zuraas */}
            <div className="border border-1 h-full" />

            {/* jijig buleg */}
            <div className="flex items-center gap-3">
              <LocationIcon />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-extrabold">30+</p>
                <p>Locations</p>
              </div>
            </div>

            {/* zuraas */}
            <div className="border border-1 h-full" />

            {/* jijig buleg */}
            <div className="flex items-center gap-3">
              <ServerIcon />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-extrabold">50+</p>
                <p>Servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
