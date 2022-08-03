import React, { useState, useEffect } from "react";
import { ButtonToTopContainer } from "./styles";
import iconUpToTop from "../../assets/images/icon-up-to-top.png";

const ButtonToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <ButtonToTopContainer>
            {" "}
            {showTopBtn && (
                <button onClick={goToTop}>
                  <img src={iconUpToTop} alt="Top" width={40}/>
                </button>
            )}{" "}
        </ButtonToTopContainer>
    );
};
export default ButtonToTop;