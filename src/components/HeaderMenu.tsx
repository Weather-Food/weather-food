import { useState, useEffect } from "react";
import "../styles/HeaderMenu.scss";

const HeaderMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (): void => {
    setIsClicked((prev) => !prev);
  };

  // 메뉴 버튼이 아닌 다른 곳을 눌러도 메뉴 사라짐
  const handleOutsideClick = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;

    if (
      !target.closest(".menu-icon--container") &&
      !target.closest(".mini-menu--container")
    ) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    if (isClicked) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isClicked]);

  return (
    <>
      <div className="menu-icon--container" onClick={handleClick}>
        <img className="menu-icon" src="./Header/menu.svg" alt="menu" />
      </div>
      {isClicked ? (
        <div className="mini-menu--container">
          <div className="menu-login">로그인</div>
          <div className="menu-signin">회원가입</div>
        </div>
      ) : null}
    </>
  );
};

export default HeaderMenu;
