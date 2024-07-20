import "./chara.css";
import Logo from "../assets/yuru-camp-logo.svg";

function Chara({ chara }) {
  if (!chara) return null;

  return (
    <div className="chara-container">
      <div className="chara-title">
        {/* <h2>Character</h2> */}
        <img src={Logo} alt="yuru-camp-logo" className="chara-logo"></img>
      </div>
      <div className="chara-content">
        <div className="chara-content-left">
          <img alt={chara.Name} src={require(`../assets/${chara.Image}`)} className="chara-content-img" />
        </div>
        <div className="chara-content-right">
          <h2 className="image-title">{chara.Name}</h2>
          <p>{chara.Desk}</p>
        </div>
      </div>
    </div>
  );
}

export default Chara;