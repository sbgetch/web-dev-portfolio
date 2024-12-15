import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="fixed w-12 h-12 bg-blue-950 bottom-4 right-4 p-2 rounded-2xl shadow-xl transition-opacity duration-200 z-50 md:w-16 md:h-16 md:rounded-3xl hover:bg-white"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="h-20 w-20 text-blue-500" />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
