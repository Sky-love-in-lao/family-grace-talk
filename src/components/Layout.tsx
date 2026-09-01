import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, MessageCircle, BookOpen, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('아빠');

  useEffect(() => {
    const savedName = localStorage.getItem('familyProfileName');
    if (savedName) {
      setCurrentUser(savedName);
    } else {
      // 프로필 설정이 없으면 선택 화면으로 튕겨냄
      navigate('/');
    }
  }, [navigate]);

  const navItems = [
    { path: '/home', icon: Home, label: '홈' },
    { path: '/commentary', icon: Lightbulb, label: '말씀해설' },
    { path: '/sharing', icon: MessageCircle, label: '나눔방' },
    { path: '/worship', icon: BookOpen, label: '가정예배' },
  ];

  const pageTitles: Record<string, string> = {
    '/home': '오늘의 말씀',
    '/commentary': '말씀 해설',
    '/sharing': '가족 나눔방',
    '/worship': '가정예배'
  };

  const handleLogout = () => {
    localStorage.removeItem('familyProfileName');
    localStorage.removeItem('familyProfileEmoji');
    navigate('/');
  };

  // 요일별 랜덤(지정) 파스텔 배경색
  const dayBgColors = [
    'bg-rose-50',     // 일요일
    'bg-orange-50',   // 월요일
    'bg-yellow-50',   // 화요일
    'bg-green-50',    // 수요일
    'bg-blue-50',     // 목요일
    'bg-purple-50',   // 금요일
    'bg-teal-50'      // 토요일
  ];
  const currentBg = dayBgColors[new Date().getDay()];

  const bgPositions: Record<string, string> = {
    '아빠': '31% 15%',
    '엄마': '74% 24%',
    '요한': '30% 50%',
    '노아': '71% 52%'
  };
  const pos = bgPositions[currentUser] || '31% 15%';

  return (
    <div className={`flex flex-col h-full w-full transition-colors duration-500 ${currentBg}`}>
      
      {/* 공통 상단 헤더 */}
      <header className="w-full px-6 pt-12 pb-4 flex justify-between items-center z-10 bg-transparent">
        <h1 className="text-xl font-bold text-brand-brown">
          {pageTitles[location.pathname] || '우리가족 은혜톡'}
        </h1>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-brand-brown/20 rounded-full text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div 
            className="w-5 h-5 rounded-full border border-gray-100 bg-[url('/src/assets/family.jpg')] bg-[length:400%_auto] bg-white" 
            style={{ backgroundPosition: pos }}
          ></div>
          프로필 변경
        </button>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-1 overflow-y-auto pb-24 relative">
        <Outlet />
      </main>
      
      {/* 하단 네비게이션 바 */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around py-3 px-2 z-20 pb-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center flex-1 transition-all ${isActive ? 'text-brand-brown -translate-y-1' : 'text-gray-300'}`}
            >
              <Icon size={26} className="mb-1" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
