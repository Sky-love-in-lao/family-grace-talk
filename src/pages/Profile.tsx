import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    // 이미 프로필을 선택한 적이 있으면 홈으로 자동 이동
    const savedProfile = localStorage.getItem('familyProfileName');
    if (savedProfile) {
      navigate('/home');
    }
  }, [navigate]);

  const profiles = [
    { id: 1, name: '아빠', color: 'bg-blue-50 border-blue-100', emoji: '👨🏻', bgClass: "bg-[url('/src/assets/family.jpg')] bg-[length:400%_auto] bg-[position:31%_15%]" },
    { id: 2, name: '엄마', color: 'bg-pink-50 border-pink-100', emoji: '👩🏻', bgClass: "bg-[url('/src/assets/family.jpg')] bg-[length:400%_auto] bg-[position:74%_24%]" },
    { id: 3, name: '요한', color: 'bg-yellow-50 border-yellow-100', emoji: '👦🏻', bgClass: "bg-[url('/src/assets/family.jpg')] bg-[length:400%_auto] bg-[position:30%_50%]" },
    { id: 4, name: '노아', color: 'bg-green-50 border-green-100', emoji: '👶🏻', bgClass: "bg-[url('/src/assets/family.jpg')] bg-[length:400%_auto] bg-[position:71%_52%]" },
  ];

  const handleSelect = (name: string, emoji: string) => {
    localStorage.setItem('familyProfileName', name);
    localStorage.setItem('familyProfileEmoji', emoji); // 나중에 앱 전역에서 이미지를 쓰도록 확장 가능
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-transparent p-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-brand-brown mb-2 tracking-tight">우리가족 은혜톡</h1>
        <p className="text-gray-500 font-medium">말씀과 기도로 하나되는 우리 가족</p>
      </div>
      <h2 className="text-lg font-bold text-gray-700 mb-6">누구이신가요?</h2>
      <div className="grid grid-cols-2 gap-5 w-full max-w-[280px]">
        {profiles.map(p => (
          <div 
            key={p.id} 
            onClick={() => handleSelect(p.name, p.emoji)}
            className={`cursor-pointer group flex flex-col items-center justify-center aspect-square rounded-3xl ${p.color} border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all`}
          >
            <div className={`w-16 h-16 rounded-full mb-3 border-2 border-white shadow-sm group-hover:scale-110 transition-transform ${p.bgClass}`}>
            </div>
            <span className="text-lg font-bold text-gray-700">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
