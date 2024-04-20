import Link from "next/link";
import React from "react";
import { headerLinks } from "@/storage/linkData/linkData";

function Header() {
  const isLogin = true;
  const subMenuLinks = (subMenu) => (
    <ul className="w-full float-none">
      {subMenu.map((item, subIndex) => (
        <li key={subIndex} className=" float-none text-center w-full">
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );

  const mainMenuLinks = headerLinks.map((menuItem, index) => (
    <li key={index} className="relative w-auto text-center mx-4 inline-block">
      <Link href={menuItem.href}>{menuItem.title}</Link>
      <div className="hidden absolute mt-8 group-hover:block w-full bg-green-50">
        {menuItem.subMenu && subMenuLinks(menuItem.subMenu)}
      </div>
    </li>
  ));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-20 bg-green-100">
        {/* Header높이 = 20 */}
        <h1>header</h1>
        <div className="flex">
          <div className="fixed float-left">
            <Link href="/">홈</Link>
          </div>
          <nav className="relative group hidden lg:block mx-0 w-full">
            <ul className="flex cursor-pointer mx-20 w-full float-left">
              {mainMenuLinks}
            </ul>
          </nav>
          <div className="fixed right-40 hidden lg:block float-right">
            <form>
              <input type="text" placeholder="정보를 찾고계신가요?"></input>
              <button>검색</button>
            </form>
          </div>
          <div className="fixed right-4 ">
            {isLogin && <Link href="/mypage/login">로그인</Link>}
            <Link href="/mypage">마이페이지</Link>
            <Link href="/sitemap">메뉴</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
