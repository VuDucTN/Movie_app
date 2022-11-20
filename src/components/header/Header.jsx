import React, { useRef, useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from 'react-router';

import { Link, useLocation } from "react-router-dom";
import Button from '../button/Button';
import Input from '../input/Input'

import { category} from '../../api/tmdbApi';

import "./header.scss";

import logo from "../../assets/logo.png";

const headerNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Phim chiếu rạp",
    path: "/movie",
  },
  {
    display: 'Danh sách đã lưu',
    path: '/mylist'
  }
];

const Header = (props) => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const { keyword } = useParams();

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
          <div className="section">
                <MovieSearch category={props.category} keyword={keyword}/>
          </div>
          <div className="account">
              <Link to="/account">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtf8mLiyb1SdiVmm1nmkwxsd2oyAUiZVEbw&usqp=CAU" alt="" />
                <p className="nameAcc">Hero</p>
              </Link>
          </div> 
      </div>
    </div>
  );
};

const MovieSearch = props => {

    const history = useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/movie/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Nhập tên phim"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small_min" onClick={goToSearch}>
                Tìm kiếm
            </Button>
        </div>
    )
}

export default Header;
