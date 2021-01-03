import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar, IconButton } from "@material-ui/core";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import SettingsIcon from "@material-ui/icons/Settings";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [rooms, setRooms] = useState([]);
  //const [searchRooms,setSearchRooms]=useState([])
  const handleChange = (e) => {
    setInput(e.target.value);
    const newData = rooms.filter((element) => {
      return element.data.name.includes(input);
    });
    setRooms(newData);
  };
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [input == ""]);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input
            placeholder="Search or start new chat"
            value={input}
            onChange={(e) => handleChange(e)}
            type="text"
          />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.length > 0 ? (
          rooms?.map((room) => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))
        ) : (
          <p className="sidebar__text">sorry No room found</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
