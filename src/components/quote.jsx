import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";


function Quote () {
  const navigate = useNavigate();
    const handlenext = function () {
      navigate("/tabs");
    };

    const handleback = function () {
      navigate("/passwordToggle");
    };

    const handlehome = function (){
    navigate("/")
  }

    const [openQuote, setOpenQuote] = useState (false);

    const quotes = [
  {
    text: "The best among you are those who have the best manners and character.",
    author: "Prophet Muhammad ﷺ"
  },
  {
    text: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    author: "Prophet Muhammad ﷺ"
  },
    {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
{
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    text: "Make things easy and do not make them difficult, cheer the people up by conveying glad tidings to them and do not repulse them.",
    author: "Prophet Muhammad ﷺ"
  },
  {
    text: "The strong is not the one who overcomes people by his strength, but the strong is the one who controls himself while in anger.",
    author: "Prophet Muhammad ﷺ"
  },
  {
    text: "No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim... but that Allah expiates some of his sins for it.",
    author: "Prophet Muhammad ﷺ"
  },
  {
    text: "Do not grieve. Indeed, Allah is with us.",
    author: "Abu Bakr As-Siddiq (RA)"
  },
  {
    text: "Take account of yourselves before you are taken to account.",
    author: "Umar ibn Al-Khattab (RA)"
  },
  {
    text: "He who avoids complaint invites happiness.",
    author: "Ali ibn Abi Talib (RA)"
  },
  {
    text: "Patience is of two kinds: patience over what pains you, and patience against what you covet.",
    author: "Ali ibn Abi Talib (RA)"
  },
  {
    text: "Be like the flower that gives its fragrance even to the hand that crushes it.",
    author: "Ali ibn Abi Talib (RA)"
  }
];

const pickQuote = function () {
    
     const randomIndex = Math.floor (Math.random () * quotes.length);
     setOpenQuote(quotes[randomIndex])

    };


// math.floor (math.random ()*quotes.length)

    return (
        <>
        <div
        className="flex flex-col items-center justify-center">

        {openQuote && (
        <div className="flex flex-col items-center justify-center max-w-[70vw] p-2"
        >
             <blockquote className="text-center p-2">{openQuote.text}</blockquote>
            <cite className="p-2">{openQuote.author}</cite>         
        </div>
        )}
        <button
        onClick={pickQuote}
        className="py-4 px-3 rounded-sm border-none bg-[hsl(0,0%,40%)] text-[hsl(0,0%,70%)]"
        >Pick a Random Quote</button>
        </div> 

        <div className="gap-8 flex items-center justify-center mt-2 p-4">
        <ChevronLeftIcon
          size={30}
          strokeWidth={4}
          onClick={handleback}
          className=" cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,40%)] px-1"
        />

        <Home
        size={30}
        strokeWidth={4}
        onClick={handlehome}
        className="cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,40%)] px-1"
        />

        <ChevronRightIcon
          size={30}
          strokeWidth={4}
          onClick={handlenext}
          className=" cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,40%)] px-1"
        />
      </div>


        </>
    

    )
}

export default Quote;