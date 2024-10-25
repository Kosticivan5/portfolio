import { techIcons } from "@/data/data";

const AdditionalTools = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="capitalize pb-4 text-white-100">
        Additional Tools & Technologies
      </h4>
      {/* <h4 className="capitalize pb-2">
          Дополнительные инструменты и технологии
        </h4> */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {techIcons.map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center gap-1 capitalize bg-black-100 py-1 px-2 rounded-lg "
          >
            <img className="w-5 h-5" src={icon} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdditionalTools;
