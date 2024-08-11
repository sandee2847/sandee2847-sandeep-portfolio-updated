import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Mern Stack Developer", "Full Stack Developer"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
