const EmotionItem = ({ emotion_id, emotion_img, emotion_descript, onClick, isSelected }) => {
  console.log(emotion_id);
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={["EmotionItem", isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`].join(" ")}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default EmotionItem;
