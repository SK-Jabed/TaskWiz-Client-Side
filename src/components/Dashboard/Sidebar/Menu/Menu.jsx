import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Task Board"
        address="taskBoard"
      />
      {/* <MenuItem
        icon={MdOutlineManageHistory}
        label="Add Publisher"
        address="addPublisher"
      /> */}
    </>
  );
};

export default Menu;
