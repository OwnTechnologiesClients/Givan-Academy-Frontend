import "./teachers3.scss";
import Teacher1 from "../../assets/teacher/1.png";
import Teacher2 from "../../assets/teacher/2.png";
import Teacher3 from "../../assets/teacher/3.png";

const teacherData3 = [
  {
    name: "Male Name",
    post: "Director",
    para: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future We care for children, protect their welfare, and prepare them for the future.",
    image: Teacher2,
    color: "#B5F4E1",
    color2: "#5BDDB5",
  },
  {
    name: "Female Name",
    post: "Director",
    para: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future We care for children, protect their welfare, and prepare them for the future.",
    image: Teacher3,
    color: "#FF2D59",
    color2: "#FF2D59",
  },

  {
    name: "Female Name",
    post: "Director",
    para: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future We care for children, protect their welfare, and prepare them for the future.",
    image: Teacher1,
    color: "#FAD39A",
    color2: "#FF9700",
  },
];

const Teachers3 = () => {
  return (
    <div className="teacher-container3" style={{ marginBottom: "7vw" }}>
      <div className="teacher-parent-section3">
        {teacherData3.map((teacher, index) => (
          <div key={index} className="teacher-section3">
            <div
              className="teacher-border3"
              style={{ borderColor: teacher.color }}
            >
              <div className="teacher-img3">
                <img src={teacher.image} alt="" />
              </div>
            </div>
            <div className="teacher-text-part3">
              <div className="teacher-name3">
                <h1>{teacher.name}</h1>
              </div>
              <div className="teacher-post3" style={{ color: teacher.color2 }}>
                <h3>{teacher.post}</h3>
              </div>
              <div className="teacher-para3">
                <p>{teacher.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers3;
