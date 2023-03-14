import { TbDog } from "react-icons/tb";
import { IoLogoOctocat } from "react-icons/io";
import { SiHappycow } from "react-icons/si";
import { GiHorseHead, GiChicken, GiSheep } from "react-icons/gi";

const List = () => {
  return (
    <ul className="flex flex-col items-center max-w-[160px] border-gray-300  mt-12 mx-auto border-2">
      {[
        { name: "dog", icon: <TbDog /> },
        { name: "cat", icon: <IoLogoOctocat /> },
        { name: "chicken", icon: <GiChicken /> },
        { name: "cow", icon: <SiHappycow /> },
        { name: "sheep", icon: <GiSheep /> },
        { name: "horse", icon: <GiHorseHead /> },
      ].map((item, index) => {
        return (
          <li
            className="border-b-2 border-gray-300 flex items-center justify-center gap-1 py-2 w-full text-center"
            key={index}
          >
            {item.icon} {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
