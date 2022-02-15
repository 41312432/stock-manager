import React, { useState } from "react";
import "./editor.scss";

const Editor = ({ storage, item, stock, itemProperty }) => {
  const [controlNum, setControlNum] = useState(0);

  const handleAddButton = () => {
    setControlNum(controlNum + 1);
  };
  const handleSubButton = () => {
    setControlNum(controlNum - 1 >= 0 ? controlNum - 1 : 0);
  };
  const handleAddBoxButton = () => {
    setControlNum(controlNum + itemProperty.numPerBox);
  };
  const handleSubBoxButton = () => {
    setControlNum(
      controlNum - itemProperty.numPerBox >= 0
        ? controlNum - itemProperty.numPerBox
        : 0
    );
  };

  const handleFillStock = () => {
    storage.updateStock(itemProperty.storageType, item, {
      amount: controlNum,
      createDate: Date.now(),
      id: Date.now(),
    });

    setControlNum(0);
  };

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
              value={controlNum}
              min="0"
              step="1"
            />
            <div className="number-button-container">
              <div className="plus-container">
                <button onClick={handleAddButton}>+</button>
                <button onClick={handleAddBoxButton}>+ Box</button>
              </div>
              <div className="minus-container">
                <button onClick={handleSubButton}>-</button>
                <button onClick={handleSubBoxButton}>- Box</button>
              </div>
            </div>
          </div>
          <div className="monitor-button">
            <button>판매하기(폐기하기)</button>
            <button onClick={handleFillStock}>창고에서 재고 꺼내기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
