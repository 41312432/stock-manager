import React from "react";
import "./editor.scss";

const Editor = ({ item, stock, itemProperty }) => {
  console.log(item, stock, itemProperty);
  return (
    <div className="editor">
      <h4>{itemProperty.koFullName}</h4>
      <div className="pannel-container">
        <div className="pannel stock">
          <div className="monitor-property">
            <p>한 박스당 개수 : {itemProperty.numPerBox}개</p>
            <p>유통기한 : {itemProperty.expDate}일</p>
          </div>
          <div className="monitor-stock">재고 테이블</div>
        </div>
        <div className="pannel control">
          <div className="monitor-number">
            <input
              type="number"
              id="control-number"
              value="0"
              min="0"
              step="1"
            />
            <div className="number-button-container">
              <div className="plus-container">
                <button>+</button>
                <button>+ Box</button>
              </div>
              <div className="minus-container">
                <button>-</button>
                <button>- Box</button>
              </div>
            </div>
          </div>
          <div className="monitor-button">
            <button>판매</button>
            <button>재고</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
