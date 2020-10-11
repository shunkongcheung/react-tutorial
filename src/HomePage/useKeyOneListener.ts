import { useEffect } from "react";

function useKeyOneListener() {
  useEffect(() => {
    const onKeyOneDown = (event: KeyboardEvent) => {
      if (event.keyCode === 49)
        alert("Key 1 is pressed! I know what you are thinking.. but don't!");
    };

    document.addEventListener("keydown", onKeyOneDown);

    return () => {
      // console.log("component is unmounted");
      document.removeEventListener("keydown", onKeyOneDown);
    };
  }, []);
}

export default useKeyOneListener;
