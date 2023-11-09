import "./style.css";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaCopy,
  FaCut,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
} from "react-icons/fa";

function Richtext() {
  const Sise = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
  ];
  const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
  };
  return (
    <div className="container">
      <div className="richtext">
        <div className="inst">
          <div className="lp">
            <select
              name=""
              id=""
              defaultValue={3}
              onChange={(e) => {
                modifyText("fontSize", false, e.currentTarget.value);
              }}
            >
              {Sise.map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
            <select
              name=""
              id=""
              defaultValue={3}
              onChange={(e) => {
                modifyText("fontName", false, e.currentTarget.value);
              }}
            >
              {fontList.map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
          </div>

          <div className="lp">
            <button onClick={() => modifyText("bold", false, null)}>
              <FaBold />
            </button>
            <button onClick={() => modifyText("italic", false, null)}>
              <FaItalic />
            </button>
            <button onClick={() => modifyText("underline", false, null)}>
              <FaUnderline />
            </button>
          </div>

          <div className="lp">
            <button onClick={() => modifyText("copy", false, null)}>
              <FaCopy />
            </button>
            <button onClick={() => modifyText("cut", false, null)}>
              <FaCut />
            </button>
          </div>

          <div className="lp">
            <button
              onClick={() => modifyText("insertUnorderedList", false, null)}
            >
              <FaListUl />
            </button>
            <button
              onClick={() => modifyText("insertOrderedList", false, null)}
            >
              <FaListOl />
            </button>
          </div>
          <div className="lp">
            <button onClick={() => modifyText("justifyLeft", false, null)}>
              <FaAlignLeft />
            </button>
            <button onClick={() => modifyText("justifyCenter", false, null)}>
              <FaAlignCenter />
            </button>
            <button onClick={() => modifyText("justifyRight", false, null)}>
              <FaAlignRight />
            </button>
          </div>
          <div className="lp">
            <input
              type="color"
              name=""
              id="colorBack"
              onChange={(e) => {
                modifyText("foreColor", false, e.currentTarget.value);
              }}
            />
            <p>color</p>
            <input
              type="color"
              name=""
              id="colorBack"
              onChange={(e) => {
                modifyText("backColor", false, e.currentTarget.value);
              }}
            />
            <p>color Back</p>
          </div>
        </div>
        <div className="bord" contentEditable placeholder="text">
          Text
        </div>
      </div>
    </div>
  );
}

export default Richtext;
