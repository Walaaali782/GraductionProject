import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nutrition = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('recipes');
  const [activeFilter, setActiveFilter] = useState('الكل');

  const recipes = [
    { id: 1, title: 'كباب الحلة', img: 'recipe 1.svg', category: 'أطباق رئيسية' },
    { id: 2, title: 'كبة لبن', img: 'recipe 2.svg', category: 'مقبلات' },
  ];

  const tips = [
    { id: 1, title: 'تناول وجبات متوازنة تحتوي على البروتينات، الكربوهيدرات، والدهون الصحية لتحصل على طاقة مستدامة'},
    { id: 2, title: 'اشرب الماء بكثرة، على الأقل 8 أكواب يوميًا، ويمكنك إضافة شرائح الليمون أو النعناع لتحفيزك على الشرب أكثر.' },
    { id: 3, title: 'ابتعد عن الأطعمة المقلية، واستبدلها بالمشوية أو المطهية على البخار للحفاظ على صحتك.' },
  ];

  const categories = ['الكل', 'أطباق رئيسية', 'مقبلات', 'مشروبات', 'حلويات', 'سناكس'];

  const filteredRecipes =
    activeFilter === 'الكل' ? recipes : recipes.filter(r => r.category === activeFilter);

  return (
    <div className="mx-auto bg-[#D2E8E4] overflow-hidden p-4 text-right font-sans" dir="rtl">
      <div className="relative">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/05/19/02/salad-1238246_960_720.jpg"
          alt="healthy food"
          className="w-full object-cover rounded-lg" style={{height:'250px'}}
        />
        <button className="absolute top-2 left-2 text-lg font-bold" style={{fontSize:'30px'}}
        onClick={() => navigate(`/Home`)}
        >X</button>
      </div>

      <h2 className="font-bold text-lg mt-3" style={{color:'#664500', fontSize:'30px'}}>التغذية الصحية</h2>
      <p className="text-bg text-gray-700 mt-3" style={{fontSize:'20px', maxWidth:'500px'}}>
        ابحث عن موارد تساعدك تختار أكلات ومشروبات صحية وكمان نصايح عن النشاط البدني. حقق أهدافك الصحية.
      </p>

      <div className="flex justify-around mt-4 p-4" style={{fontSize:'25px', borderBottom:'1px solid #75838C'}}>
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
          <div className="flex flex-wrap gap-5 mt-4 justify-center align-center mx-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                    padding: '4px 12px',
                    borderRadius: '9999px', 
                    fontSize: '20px',
                    border: '1px solid #ccc',
                    backgroundColor: activeFilter === cat ? '#228D7B' : '#f3f4f6', 
                    color: activeFilter === cat ? '#fff' : '#374151'
                  }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4 mb-6 cursor-pointer">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="text-center" onClick={() =>{navigate(`/Home/Nutrition/PreparationAmounts`,{
                state:recipe,
              })}}>
                <img
                  src={`/public/images/${recipe.img}`}
                  alt={recipe.title}
                  className="w-full h-24 object-cover rounded"
                />
                <p className="mt-2 text-sm font-medium" style={{fontSize:'20px'}}>{recipe.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tips' && (
        <div className="mt-5 space-y-2">
          {tips.map(tip => (
            <div key={tip.id} className="p-5 bg-white text-sm" style={{fontSize:'18px', borderRadius:'15px'}}>
              {tip.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nutrition;
