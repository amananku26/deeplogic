import "./mainfile.modules.css";
import { AuthContextNews } from "../contexts/AuthNews";
import { useContext, useEffect } from "react";
export default function MainFile(params) {
  let { showNews, arr } = useContext(AuthContextNews);
  useEffect(() => {
    showNews();
  }, []);
  //console.log(arr, "arr:");
  return (
    <>
      <div className="mainDiv">
        <div style={{ display: "flex", height: "50px" }}>
          <div>
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
          <div>
            <img
              style={{ height: "28px", marginTop: "7px", marginLeft: "15px" }}
              src="time-logo-red.svg"
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p className="para">AMERICA MUST CHANGE</p>
          <p className="para" style={{ color: "grey" }}>
            RACISM & COVID-19
          </p>
          <p className="para" style={{ color: "grey" }}>
            INEQUALITY
          </p>
          <p className="para" style={{ color: "grey" }}>
            BLACK DISABLED AND AT RISK
          </p>
          <p className="para" style={{ color: "grey" }}>
            NEWSLETTER
          </p>
        </div>
        <div>
          <img
            style={{
              height: "20px",
              color: "grey",
              marginRight: "30px",
              marginTop: "10px",
            }}
            src="icons8-search.svg"
          />
        </div>
      </div>
      <div className="secondDiv">
        <div style={{ marginTop: "50px" }}>
          <div className="subDiv">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="arrow"></div>
              <img className="rotate90" src="fast-forward.png" />
              <div
                style={{
                  marginTop: "15px",
                  color: "red",
                  fontWeight: "bolder",
                }}
              >
                LATEST STORIES
              </div>
              <img
                style={{ height: "20px", marginTop: "17px", marginLeft: "8px" }}
                src="fast-forward.png"
              />
              <div className="arrow"></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {arr.map((el, i) => {
                return (
                  <div style={{ marginTop: "40px" }} key={i}>
                    <h1
                      style={{
                        textDecoration: "underline",
                        textDecorationColor: "red",
                      }}
                    >
                      {i + 1}
                    </h1>
                    <p style={{ fontSize: "small", fontWeight: "bold" }}>
                      <a
                        href={el.link}
                        target="_blank"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {el.title}
                      </a>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-200px" }}>
        <p
          style={{
            fontStyle: "serif oblique",
            fontWeight: "bold",
            fontSize: "larger",
          }}
        >
          Inside the Issue
        </p>

        <div>
          <img src="https://api.time.com/wp-content/uploads/2021/11/best-inventions-2021-v2.jpg?quality=85&w=801&h=451&crop=1" />
        </div>
      </div>
    </>
  );
}
