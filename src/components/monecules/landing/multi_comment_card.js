import CommentCard from "@/components/atoms/landing/comment_card";

const MultiComment = (props) => {
  return (
    <>
      <div className="flex flex-col">
        {props.data.map((item, i) => (
          <CommentCard
            key={`Comment Card ${i}`}
            text={item.text}
            name={item.name}
            title={item.title}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
};

export default MultiComment;
