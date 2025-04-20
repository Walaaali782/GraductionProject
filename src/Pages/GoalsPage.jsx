

import { useEffect, useState } from "react";
import { Home, User, Menu } from "lucide-react";
import {Link} from 'react-router-dom';

export default function GoalsPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
        <h1 className="text-center text-4xl mt-4">الاهداف اليوميه</h1>
      {/* Goals Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
  <Link to="/goal-1" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 1.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">روتينك اليومي</div>
  </Link>

  <Link to="/goal-2" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 2.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">تحديد الهدف</div>
  </Link>

  <Link to="/goal-3" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 3.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">اللعب والانجازات</div>
  </Link>

  <Link to="/goal-4" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 4.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">الافكار السلبية</div>
  </Link>

  <Link to="/goal-5" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 5.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">الملاحظات</div>
  </Link>

  <Link to="/goal-6" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 6.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">حب النفس</div>
  </Link>

  <Link to="/goal-7" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 7.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">مزاج ممتن</div>
  </Link>

  <Link to="/goal-8" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 8.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">صفي ذهنك</div>
  </Link>

  <Link to="/goal-9" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 9.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">التغذية</div>
  </Link>

  <Link to="/goal-10" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 10.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">النوم</div>
  </Link>

  <Link to="/goal-11" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 11.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">الدردشة</div>
  </Link>

  <Link to="/goal-12" className="no-underline">
    <div className="bg-secondary rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <img src="/public/images/goal 12.svg" alt="" className="rounded-md w-24 h-24 object-cover" />
    </div>
    <div className="text-sm font-medium text-center mt-2">التمارين الرياضية</div>
  </Link>
</div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full text-white p-4 z-10">
        <div className="container flex justify-around items-center" style={{background:'#065B51'}}>
          <Link to="/" className="focus:outline-none">
            <Home className="h-6 w-6" />
          </Link>
          <Link to="/" className="focus:outline-none">
            <User className="h-6 w-6" />
          </Link>
          <Link to="/" className="focus:outline-none">
            <Menu className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
