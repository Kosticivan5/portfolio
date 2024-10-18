const TechStack = () => {
  return (
    <div className="text-white absolute -top-4 right-4 w-5/8  flex justify-center gap-2 text-center">
      <ul className="w-28 flex flex-col gap-2 -translate-y-3">
        <li className=" bg-black-100 rounded-lg h-14 grid place-items-center">
          React.js
        </li>
        <li className=" bg-black-100 rounded-lg h-14 grid place-items-center">
          Next.js
        </li>
        <li className="bg-black-100 rounded-lg h-14 grid place-items-center">
          {" "}
          Typescript
        </li>
        <li className="bg-black-100 rounded-lg h-14"></li>
      </ul>
      <ul className="w-28 flex flex-col gap-2 -translate-y-12">
        <li className=" bg-black-100 rounded-lg h-14"></li>
        <li className=" bg-black-100 rounded-lg h-14 grid place-items-center">
          Javascript
        </li>
        <li className=" bg-black-100 rounded-lg h-14 grid place-items-center">
          Tailwind
        </li>
        <li className=" bg-black-100 rounded-lg h-14 grid place-items-center">
          Three.js
        </li>
      </ul>
    </div>
  );
};
export default TechStack;
