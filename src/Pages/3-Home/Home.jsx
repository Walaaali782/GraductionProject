import { Home, User, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const goals = [
  { id: 1, title: "روتينك اليومي", img: "goal 1.svg",link: "/Home/routine" },
  { id: 2, title: "تحديد الهدف", img: "goal 2.svg", link: "/Home/NewGoal" },
  { id: 3, title: "اللعب والانجازات", img: "goal 3.svg" },
  { id: 4, title: "الافكار السلبية", img: "goal 4.svg" },
  { id: 5, title: "الملاحظات", img: "goal 5.svg" },
  { id: 6, title: "حب النفس", img: "goal 6.svg" , link: "/Home/SelfloveIncentivize" },
  { id: 7, title: "مزاج ممتن", img: "goal 7.svg",link: "/Home/grateful-mood" },
  { id: 8, title: "صفي ذهنك", img: "goal 8.svg"  ,link: "/Home/clear-mind" },
  { id: 9, title: "التغذية", img: "goal 9.svg" },
  { id: 10, title: "النوم", img: "goal 10.svg" },
  { id: 11, title: "الدردشة", img: "goal 11.svg" },
  { id: 12, title: "التمارين الرياضية", img: "goal 12.svg" },
];

export default function AllPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background" dir="rtl">
      <h1 className="text-center text-4xl mt-4 mb-32 mt-28" >الأهداف اليومية</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 flex-grow">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="cursor-pointer no-underline"
            onClick={() => { navigate(goal.link) }}
          >
            <div className="bg-secondary rounded-lg flex flex-col items-center justify-center p-4 text-center">
              <img
                src={`/images/images/${goal.img}`}
                alt={goal.title}
                className="rounded-md w-24 h-24 object-cover"
              />
            </div>
            <div
              className="text-sm font-medium text-center mt-2"
              style={{ marginBottom: "8rem", fontSize: "22px" }}
            >
              {goal.title}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 container">
        <div className="relative flex justify-around items-center bg-[#53b4a4] h-16 rounded-t-xl">
          {/* Home Icon in Circle - CENTERED */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#53b4a4] rounded-full">
            <div className="bg-white rounded-full p-6">
              <Home className=" h-8 w-8 text-[#53b4a4]" />
            </div>
          </div>

          {/* Other icons */}
          <Link to="/" className="focus:outline-none">
            <User className=" h-8 w-8 text-white" />
          </Link>
          <div className="w-12" /> {/* spacer for centered home icon */}
          <Link to="/" className="focus:outline-none">
            <Menu className=" h-8 w-8 text-white" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
