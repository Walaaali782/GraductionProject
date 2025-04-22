import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import xmark from "../../assests/svgs/xmark.svg"; 

const Nutrition = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('recipes');

  const [activeFilterRecipes, setActiveFilterRecipes] = useState('الكل');
  const [activeFilterTips, setActiveFilterTips] = useState('التغذية الصحية');

  const recipes = [
    { id: 1, title: 'كباب الحلة', img: 'recipe 1.svg', category: 'أطباق رئيسية' },
    { id: 2, title: 'كبة لبن', img: 'recipe 2.svg', category: 'مقبلات' },
  ];


  const tips = [
    { id: 1, title: 'تناول وجبات متوازنة تحتوي على البروتينات، الكربوهيدرات، والدهون الصحية لتحصل على طاقة مستدامة.', category:'التغذية الصحية' },
    { id: 2, title: 'اشرب الماء بكثرة، على الأقل 8 أكواب يوميًا، ويمكنك إضافة شرائح الليمون أو النعناع لتحفيزك على الشرب أكثر.', category:' نمط الحياة الصحي' },
    { id: 3, title: 'ابتعد عن الأطعمة المقلية، واستبدلها بالمشوية أو المطهية على البخار للحفاظ على صحتك.', category:'التغذية الصحية' },
  ];

  const categoriesRecipes = ['الكل', 'أطباق رئيسية', 'مقبلات', 'مشروبات', 'حلويات', 'سناكس'];
  const categoriesTips = ['التغذية الصحية', ' نمط الحياة الصحي', 'الصحة النفسية والعقلية', ' النظافة والعادات الصحية'];

  const filteredRecipes =
  activeFilterRecipes === 'الكل' ? recipes : recipes.filter(r => r.category === activeFilterRecipes);

  const filteredTips =
  activeFilterTips === 'التغذية الصحية'  ? tips : tips.filter(r => r.category === activeFilterTips);


  return (
    <div className="mx-auto  overflow-hidden p-4 text-right font-sans" dir="rtl">
      
      <div className="relative p-4">
  {/* الزر */}

  <div>
<h2 className="font-bold text-lg mt-3" style={{color:'#664500', fontSize:'35px'}}>التغذية الصحية</h2>
<p className="text-bg text-gray-700 mt-3" style={{fontSize:'20px'}}>
  ابحث عن موارد تساعدك تختار أكلات ومشروبات صحية وكمان نصايح عن النشاط البدني. حقق أهدافك الصحية.
</p> </div>


  <button
    className="absolute top-4 left-4 rounded-full p-2  text-xl z-10"
    onClick={() => navigate('/Home')}
  >
    <img src={xmark} alt="xmark"    style={{cursor: "pointer",    position: "relative", top:"-15px", padding: "20px", backgroundColor:"rgb(210 243 238)" , width:"28px"   , borderRadius:"50%"
 }} 
  /> 
  </button>

  {/* الصورة */}
  <div className="flex justify-center">
    <img
      src="https://i.pinimg.com/736x/98/54/01/985401ce7dce96ca848036a032067e17.jpg"
      alt="healthy food"
      className="object-cover rounded-lg w-4/5"
      style={{ height: '500px', marginTop:"80px" }}
    />
  </div>
</div>







      <div className="flex justify-around mt-4 p-4" style={{fontSize:'25px', borderBottom:'1px solid #75838C',marginBottom:"4rem"}}>
      <button
          onClick={() => setActiveTab('recipes')}
          style={{
            borderBottom: activeTab === 'recipes' ? '2px solid #664500' : 'none',
            color: activeTab === 'recipes' ? '#664500' : '#000',
            paddingBottom:'10px'
          }}
        >
          الوصفات
        </button>

        <button
          onClick={() => setActiveTab('tips')}
          style={{
            borderBottom: activeTab === 'tips' ? '2px solid #664500' : 'none',
            color: activeTab === 'tips' ? '#664500' : '#000',
            paddingBottom:'10px'
          }}
        >
          نصائح
        </button>
      </div>

      {activeTab === 'recipes' && (
        <div>
          <div className="flex flex-wrap gap-5 mt-4 justify-center align-center mx-auto" style={{marginBottom:"6rem"}}>
            {categoriesRecipes.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilterRecipes(cat)}
                style={{
                    padding: '4px 12px',
                    borderRadius: '9999px', 
                    fontSize: '20px',
                    border: '1px solid #ccc',
                    backgroundColor: activeFilterRecipes === cat ? '#228D7B' : '#f3f4f6', 
                    color: activeFilterRecipes === cat ? '#fff' : '#374151'
                  }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-4 mb-6">
  <div className="grid grid-cols-2 gap-6 cursor-pointer">
    {filteredRecipes.map(recipe => (
      <div
        key={recipe.id}
        className="text-center"
        onClick={() =>
          navigate(`/Home/Nutrition/PreparationAmounts`, {
            state: recipe,
          })
        }
      >
        <img
          src={`/public/images/${recipe.img}`}
          alt={recipe.title}
          className="h-24 object-cover rounded"
        />
        <p className="mt-2 text-sm font-medium" style={{ fontSize: '20px' }}>
          {recipe.title}
        </p>
      </div>
    ))}
  </div>
</div>

        </div>
      )}

      {/* {activeTab === 'tips' && (
       <div className="flex flex-col items-center gap-4">
          {tips.map(tip => (
            <div key={tip.id}   className="rounded-xl shadow-lg p-6 sm:p-8 text-center border border-gray-100 w-full max-w-xl text-[22px] sm:text-[20px]"
            style={{ boxShadow: "rgb(207 119 35 / 42%) 0px 5px 2px" }}>

<p className="text-gray-700 font-medium leading-7"> {tip.title}</p>
           
            </div>
          ))}
        </div>


      )} */}

{activeTab === 'tips' && (
        <div>
          <div className="flex flex-wrap gap-5 mt-4 justify-center align-center mx-auto ">
            {categoriesTips.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilterTips(cat)}
                style={{
                    padding: '4px 12px',
                    borderRadius: '9999px', 
                    fontSize: '20px',
                    border: '1px solid #ccc',
                    backgroundColor: activeFilterTips === cat ? '#228D7B' : '#f3f4f6', 
                    color: activeFilterTips === cat ? '#fff' : '#374151',
                    marginBottom:"4rem"
                  }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
                        {filteredTips.map(tip => (
               <div key={tip.id}   className="rounded-xl shadow-lg p-6 sm:p-8 text-center border border-gray-100 w-full max-w-xl text-[22px] sm:text-[20px] mb-4"
               style={{ boxShadow: "rgb(207 119 35 / 42%) 0px 5px 2px" }}>
   
   <p className="text-gray-700 font-medium leading-7"> {tip.title}</p>
              
               </div>
            ))}
          </div>
        </div>
      )}




    </div>
  );
};

export default Nutrition;






