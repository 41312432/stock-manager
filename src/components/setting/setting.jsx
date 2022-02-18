import React, { useEffect, useRef, useState } from "react";
import "./setting.scss";

const Setting = ({ storage, properties, storageType }) => {
  const [nameList, setNameList] = useState([]);

  const codeRef = useRef();
  const koFullNameRef = useRef();
  const koSortNameRef = useRef();
  const koShortNameRef = useRef();
  const numPerBoxRef = useRef();
  const expDateRef = useRef();

  useEffect(() => {
    const temp = [];
    const keys = Object.keys(properties).sort((a, b) => {
      return a.substring(a.search(/[A-Z]/g)) < b.substring(b.search(/[A-Z]/g))
        ? -1
        : 1;
    });

    for (const item of keys) {
      temp.push(
        <li
          onClick={(e) => {
            handleSelectItem(e, item, properties[item]);
          }}
        >
          {properties[item].koFullName}
        </li>
      );
    }
    temp.push(
      <li
        onClick={(e) => {
          handleSelectItem(e, "", {});
        }}
      >
        새로운 항목 추가하기
      </li>
    );
    setNameList(temp);
  }, properties);

  const handleSelectItem = (e, item, property) => {
    codeRef.current.value = item || "";
    koFullNameRef.current.value = property.koFullName || "";
    koSortNameRef.current.value = property.koSortName || "";
    koShortNameRef.current.value = property.koShortName || "";
    numPerBoxRef.current.value = property.numPerBox || 0;
    expDateRef.current.value = property.expDate || 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storage.updateProperty(storageType, codeRef.current.value, {
      expDate: parseInt(expDateRef.current.value),
      koFullName: koFullNameRef.current.value,
      koShortName: koShortNameRef.current.value,
      koSortName: koSortNameRef.current.value,
      numPerBox: parseInt(numPerBoxRef.current.value),
      storageType: storageType,
    });
  };

  return (
    <>
      <section className="setting">
        <p>품목 세부사항 설정</p>
        <div className="pannel">
          <ul className="nameList">{nameList}</ul>
          <div className="settingForm">
            <form action="">
              <div>
                <label htmlFor="코드">코드명 : </label>
                <input type="text" name="코드" ref={codeRef} />
              </div>
              <div>
                <label htmlFor="이름">이름 : </label>
                <input type="text" name="이름" ref={koFullNameRef} />
              </div>
              <div>
                <label htmlFor="종류명">종류명 : </label>
                <input type="text" name="종류명" ref={koSortNameRef} />
              </div>
              <div>
                <label htmlFor="구분명">구분명 : </label>
                <input type="text" name="구분명" ref={koShortNameRef} />
              </div>
              <div>
                <label htmlFor="박스당 개수">박스당 개수 : </label>
                <input type="number" name="박스당 개수" ref={numPerBoxRef} />
              </div>
              <div>
                <label htmlFor="유통기한">유통기한 : </label>
                <input type="number" name="유통기한" ref={expDateRef} />
              </div>
              <button onClick={handleSubmit}>수정 / 생성</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
