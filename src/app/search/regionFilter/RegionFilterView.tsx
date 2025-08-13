import { RegionFilterViewProps } from "./types";

const RegionFilterView = ({ props, hook }: RegionFilterViewProps) => {
  return (
    <div>
      <h3 className="text-[1.5rem] pb-3 font-semibold">Country</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-4">
        {hook.whiskyRegions.map((region) => (
          <label
            key={`${region}`}
            htmlFor={`${region}`}
            className="flex hover:brightness-90"
          >
            <p className="w-[70%] sm:w-[40%] text-[0.75rem] sm:text-[1rem]">
              {region}
            </p>
            <input
              id={`${region}`}
              className="w-5 accent-[#c19a6b]"
              type="checkbox"
              onChange={() => {}}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default RegionFilterView;
