import { Link } from "react-router-dom";
// import { useState } from "react";
// import { MenuIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardAction,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";


const NavBar = function () {
  // const [dropDown, setDropDown] = useState(false);
  // const toggleMenu = function () {
  //   setDropDown((prev) => !prev);
  // };


  const cardData = [
    {
      key: "accordion",
      label: "Accordion",
      content: "A collapsible content display that keeps information tidy and accessible.",
      link: <Link className="italic text-sm" to="/accordion">View Here</Link>
    },
    {
      key: "cp",
      label: "Colour Picker",
      content: "An interactive tool that allows users to select and apply selected colors instantly",
      link:  <Link className="italic text-sm" to="/colourPicker">View Here</Link>

    },
    {
      key: "counter",
      label: "Counter",
      content: "An interactive counter with increment, decrement and reset controls to showcase state management.",
      link: <Link className="italic text-sm" to="/counter">View Here</Link>

    },
    {
      key: "faq",
      label: "FAQs Toggle",
      content: "A dynamic FAQ section where users can expand questions to reveal answers.",
      link: <Link className="italic text-sm" to="/faq">View Here</Link>
    },
    {
      key: "mt",
      label: "Light/Dark Mode Toggle",
      content: "A smooth theme switcher that lets users choose between light and dark experiences",
      link: <Link className="italic text-sm" to="/modeToggle">View Here</Link>

    },
    {
      key: "pt",
      label: "Show/Hide Password Toggle",
      content: "A user-friendly feature that makes entering passwords secure yet convenient.",
      link: <Link className="italic text-sm" to="/passwordToggle">View Here</Link>

    },
    {
      key: "quote",
      label: "Random Quote Picker",
      content: "A fun generator that displays a pre-programmed quotes with each click",
      link: <Link className="italic text-sm" to="/quote">View Here</Link>

    },
    {
      key: "tab",
      label: "Tab Switcher",
      content: "A clean, organized way to navigate between multiple content sections seamlessly.",
      link: <Link className="italic text-sm" to="/tabs">View Here</Link>

    }
  ]

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 my-6 justify-items-center justify-center max-w-5xl mx-auto">
        {
          cardData.map((card) => (
            <Card key={card}
            className="w-[70%] lg:w-[90%] py-6 px-8 flex gap-6 text-left hover:scale-[1.05] hover:border-[hsl(10,0%,20%)] rotate-[1deg] hover:rotate-[0deg] translate-x-[-5%] cursor-pointer ">
              <CardContent className="text-left space-y-2">
                <CardHeader className="text-xl">{card.label}</CardHeader>
                <CardDescription className="text-lg">{card.content}</CardDescription>
                <CardAction>{card.link}</CardAction>
              </CardContent>

            </Card>
          ))
        }

      </div>
    </>
  );
};

export default NavBar;
