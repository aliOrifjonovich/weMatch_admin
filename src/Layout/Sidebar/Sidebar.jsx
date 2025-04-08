import Item from "@/components/shared/item";
import { Button } from "@/components/ui/button";
import {
  Archive,
  ArchiveIcon,
  ArchiveX,
  Book,
  Grid2x2Plus,
  Inbox,
  Info,
  NotepadTextDashed,
  Send,
  ShoppingBag,
  TrashIcon,
  UsersRound,
} from "lucide-react";

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    {
      label: "Inbox",
      icon: Inbox,
      path: "/inbox",
    },
    {
      label: "Drafts",
      icon: NotepadTextDashed,
      path: "/drafts",
    },
    {
      label: "Sent",
      icon: Send,
      path: "/sent",
    },
    {
      label: "Junk",
      icon: ArchiveX,
      path: "/junk",
    },
    {
      label: "Trash",
      icon: TrashIcon,
      path: "/trash",
    },
    {
      label: "Archive",
      icon: ArchiveIcon,
      path: "/archive",
    },
    {
      label: "Social",
      icon: UsersRound,
      path: "/archive",
    },
    {
      label: "Updates",
      icon: Info,
      path: "/updates",
    },
    {
      label: "Forums",
      icon: Book,
      path: "/forums",
    },
    {
      label: "Shopping",
      icon: ShoppingBag,
      path: "/shopping",
    },
    {
      label: "Promotions",
      icon: Archive,
      path: "/promotions",
    },
    {
      label: "Opportunities",
      icon: Grid2x2Plus,
      path: "/opportunities",
    },
  ];
  return (
    <div className="max-w-[300px] w-full h-[100vh] p-2 bg-white fixed border-r border-[#e5e7eb] dark:bg-black">
      <div className="flex flex-col">
        {navLinks?.map((links, id) => {
          const { label, icon, path } = links;
          return (
            <Link to={path} key={id}>
              <Item label={label} icon={icon} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
