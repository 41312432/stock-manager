import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";
import { ko } from "date-fns/esm/locale";
import "./item_group_monitor.scss";

const ItemGroupMonitor = ({ storage, item, itemName, properties }) => {
  const [createDate, setCreateDate] = useState(new Date(item.createDate));
  const amountRef = useRef();

  useEffect(() => {
    amountRef.current.value = item.amount;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    storage.updateStock(properties.storageType, itemName, {
      ...item,
      createDate: moment(createDate).locale("ko").format("YYYY-MM-DD"),
      amount: amountRef.current.value,
    });
  };
  return (
    <div>
      <p>{properties.koFullName}</p>
      <form action="">
        <div>
          생성날짜 :
          <ReactDatePicker
            selected={createDate}
            onChange={(date) => setCreateDate(date)}
            locale={ko}
            dateFormat="yy년 MMM dd일"
          />
        </div>
        <p>
          폐기날짜 :
          <Moment
            add={{ days: properties.expDate }}
            format="MMM Do dddd"
            locale="ko"
          >
            {createDate}
          </Moment>
        </p>
        <label htmlFor="개수">개수 : </label>
        <input type="number" name="개수" ref={amountRef} />
        <button onClick={handleSubmit}>적용하기</button>
      </form>
    </div>
  );
};

export default ItemGroupMonitor;
