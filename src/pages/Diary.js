import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyHeader from "../components/MyHeader";
import { getStringDate } from "../util/date";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id));
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다;");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중 입니다...</div>;
  } else {
    return (
      <div className="DiaryPage">
        <MyHeader headText={`${getStringDate(new Date(data.date))}기록`} />
      </div>
    );
  }
};

export default Diary;
