import { useEffect, useState } from "react";
import classes from "./Error.module.css";
import imgs from "../../img/img";
function Error({ msg }) {
  const [bgImg, setBgImg] = useState("");
  useEffect(() => {
    if (msg === "Local não encontrado!") {
      setBgImg(imgs.notFound);
    } else {
      setBgImg(imgs.offline);
    }
  }, [msg]);
  return (
    <div className={classes.content}
      style={{ backgroundImage: `url(${bgImg.url})`}}>
      <p style={{visibility:bgImg.visibility}}>{msg}</p>
    </div>
  );
}

export default Error;
