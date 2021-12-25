import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
  
export const SidebarData = [
  {
    title: "Apie mus",
    path: "/about-us",
    icon: <FaIcons.FaHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
  },
  {
    title: "Šalys",
    path: "/countrys",
    icon: <BiIcons.BiWorld />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Amerika",
        path: "/countrys/Amerika",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Anglija",
        path: "/countrys/Anglija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Argentina",
        path: "/countrys/Argentina",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Armėnija",
        path: "/countrys/Armėnija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Belgija",
        path: "/countrys/Belgija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Brazilija",
        path: "/countrys/Brazilija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Graikija",
        path: "/countrys/Graikija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Gruzija",
        path: "/countrys/Gruzija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Indija",
        path: "/countrys/Indija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Ispanija",
        path: "/countrys/Ispanija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Italija",
        path: "/countrys/Italija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Japonija",
        path: "/countrys/Japonija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Kinija",
        path: "/countrys/Kinija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Kolumbija",
        path: "/countrys/Kolumbija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Kosta Rika",
        path: "/countrys/Kosta Rika",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Lenkija",
        path: "/countrys/Lenkija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Lietuva",
        path: "/countrys/Lietuva",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Norvegija",
        path: "/countrys/Norvegija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Olandija",
        path: "/countrys/Olandija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Portugalija",
        path: "/countrys/Portugalija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Prancūzija",
        path: "/countrys/Prancūzija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Tailandas",
        path: "/countrys/Tailandas",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Turkija",
        path: "/countrys/Turkija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Ukraina",
        path: "/countrys/Ukraina",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Vengrija",
        path: "/countrys/vengrija",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Gėrimų meniu",
    path: "/drinksMenu",
    icon: <BiIcons.BiDrink />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Karštieji gėrimai",
        path: "/drinksMenu/Karštieji gėrimai",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Šaltieji gėrimai",
        path: "/drinksMenu/Šaltieji gėrimai",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Sveikuoliams",
    path: "/health",
    icon: <GiIcons.GiHealthPotion />,
  },
  {
    title: "Prisijunk/Registruokis",
    path: "/join",
    icon: <GiIcons.GiArchiveRegister />,
  },
  {
    title: "Kontaktai",
    path: "/contacts",
    icon: <IoIcons.IoMdContacts />,
  },
];