import moment from "moment";
import React, { useEffect, useState } from "react";
import "./editor.scss";

const Editor = ({ storage, item, stock, itemProperty }) => {
  const [controlNum, setControlNum] = useState(0);

  const getSumOfStock = () => {
    let sumOfStock = 0;

    for (const itemGroup in stock) {
      sumOfStock += stock[itemGroup].amount;
    }

    return sumOfStock;
  };

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
    if (controlNum <= 0) {
      alert("0보다 큰 정수값을 입력해야 합니다.");
    } else {
      storage.updateStock(itemProperty.storageType, item, {
        amount: controlNum,
        createDate: moment().format("YYYY-MM-DD"),
        id: Date.now(),
      });

      setControlNum(0);
    }
  };

  const handleSellStock = () => {
    if (controlNum <= 0) {
      alert("0보다 큰 정수값을 입력해야 합니다.");
    } else if (controlNum > getSumOfStock()) {
      alert("현재 팔 수 있는 재고보다 작은 정수값을 입력해야 합니다.");
    } else {
      let temp = controlNum;
      const tempStock = stock;

      while (temp > 0) {
        const keys = Object.keys(stock);
        const targetKey = Math.min(...keys);
        const targetAmount = tempStock[targetKey].amount;

        console.log(temp, keys, tempStock, targetKey, targetAmount);
        if (temp >= targetAmount) {
          delete tempStock[targetKey];
        } else {
          tempStock[targetKey].amount -= temp;
        }

        console.log(tempStock);
        temp -= targetAmount;
      }

      storage.clearStock(itemProperty.storageType, item);

      for (const itemGroup in tempStock) {
        storage.updateStock(
          itemProperty.storageType,
          item,
          tempStock[itemGroup]
        );
      }
    }
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
            <button onClick={handleSellStock}>판매하기(폐기하기)</button>
            <button onClick={handleFillStock}>창고에서 재고 꺼내기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
