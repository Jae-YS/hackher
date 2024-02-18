import CogIcon from "@heroicons/react/24/solid/CogIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { SvgIcon } from "@mui/material";
import { RxDashboard } from "react-icons/rx";

export const items = [
  {
    title: "My Projects",
    path: "/myproject",
    icon: (
      <SvgIcon fontSize="small">
        <RxDashboard />
      </SvgIcon>
    ),
  },
  {
    title: "BlogPosts",
    path: "/blogposts",

    icon: (
      <SvgIcon fontSize="small">
        <MdForum />
      </SvgIcon>
    ),
  },
  {
    title: "Account",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Chat With Ai",
    path: "/aiChat",
    icon: (
      <SvgIcon fontSize="small">
        <FaChalkboardTeacher />
      </SvgIcon>
    ),
  },
];
