import VHomeGuest from "@/views/VHomeGuest";
import VHomeUser from "@/views/VHomeUser";
import VSettings from "@/views/VSettings";
import VChat from "@/views/VChat";
import VError404 from "@/views/VError404";

export default [
  {
    path: "/",
    name: "home",
    component: VHomeGuest
  },
  {
    path: "/home-user",
    name: "home-user",
    component: VHomeUser
  },
  {
    path: "/settings",
    name: "settings",
    component: VSettings
  },
  {
    path: "/chat",
    name: "chat",
    component: VChat
  },
  {
    path: "*",
    name: "error",
    component: VError404
  }
];
