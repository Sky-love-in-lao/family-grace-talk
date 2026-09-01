import { useState, useEffect } from 'react';

export default function Home() {
  const [dateStr, setDateStr] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  
  // 가족들의 읽기 상태 (MVP 데모용 초기값)
  const [readStatus, setReadStatus] = useState<Record<string, boolean>>({
    '엄마': true,
    '요한': true,
    '아빠': false,
    '노아': false
  });

  useEffect(() => {
    const days = ['주일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const d = new Date();
    setDateStr(`${d.getMonth() + 1}월 ${d.getDate()}일 ${days[d.getDay()]}`);
    
    // 현재 로그인한(선택한) 사용자 이름 가져오기
    const savedName = localStorage.getItem('familyProfileName');
    if (savedName) setCurrentUser(savedName);
  }, []);

  const todayReadings = [
    { title: '사무엘하 17장', type: '가족' },
    { title: '고린도후서 10장', type: '가족' },
    { title: '에스겔 24장', type: '개인' },
    { title: '시편 72장', type: '개인' }
  ];

  const familyMembers = [
    { name: '아빠', bgPosition: '31%_15%' },
    { name: '엄마', bgPosition: '74%_24%' },
    { name: '요한', bgPosition: '30%_50%' },
    { name: '노아', bgPosition: '71%_52%' }
  ];

  const handleFinishReading = () => {
    if (currentUser) {
      setReadStatus(prev => ({ ...prev, [currentUser]: true }));
      // 실제 앱에서는 Firebase DB에 '오늘 읽음' 상태를 저장합니다.
    }
  };

  const completedCount = Object.values(readStatus).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 4) * 100);

  const isKid = currentUser === '요한' || currentUser === '노아';

  return (
    <div className="px-6 pb-6 pt-2">
      <p className="text-sm font-semibold text-brand-brown/70 mb-4">
        {dateStr} {isKid ? '(어린이 성경 365)' : '(맥체인 성경읽기)'}
      </p>
      
      {/* 가족 달성도 */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 mb-6 transition-all duration-300">
        <h3 className="font-bold text-gray-800 mb-4 flex justify-between items-end">
          <span>우리가족 오늘 읽기</span>
          <span className="text-xs font-bold text-brand-peach bg-brand-peach/10 px-2 py-1 rounded-full transition-all">{progressPercent}% 완료</span>
        </h3>
        <div className="flex justify-between items-center px-1">
          {familyMembers.map((member) => {
            const isRead = readStatus[member.name];
            return (
              <div key={member.name} className={`flex flex-col items-center transition-all duration-500 ${isRead ? 'relative' : 'opacity-40 grayscale'}`}>
                {isRead && (
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-white z-10 text-[10px] scale-in-center">✓</div>
                )}
                <div className={`w-12 h-12 rounded-full mb-1 border-2 bg-[url('/src/assets/family.jpg')] bg-[length:400%_auto] transition-all duration-500 ${
                  isRead ? 'border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.4)]' : 'border-gray-200'
                }`} style={{ backgroundPosition: member.bgPosition.replace('_', ' ') }}></div>
                <span className={`text-[11px] font-bold ${isRead ? 'text-gray-800' : 'text-gray-500'}`}>{member.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {!isKid ? (
        /* 어른(아빠, 엄마) 화면 */
        <>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {todayReadings.map((reading, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-bold text-brand-peach bg-brand-peach/10 px-2 py-0.5 rounded-full mb-1">{reading.type}</span>
                <span className="font-bold text-gray-800 text-sm">{reading.title}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-peach rounded-full -mr-10 -mt-10 opacity-50"></div>
            <h2 className="text-xl font-bold text-brand-brown mb-5 relative z-10">📖 사무엘하 17장</h2>
            <div className="text-gray-800 leading-relaxed text-lg font-medium relative z-10 space-y-4 break-keep">
              <p><sup className="text-xs text-brand-brown/70 mr-1">1</sup>아히도벨이 또 압살롬에게 이르되 이제 내가 사람 만 이천 명을 택하게 하소서 오늘 밤에 내가 일어나서 다윗의 뒤를 추적하여</p>
              <p><sup className="text-xs text-brand-brown/70 mr-1">2</sup>그가 곤하고 힘이 빠졌을 때에 기습하여 그를 무섭게 하면 그와 함께 있는 모든 백성이 도망하리니 내가 다윗 왕만 쳐죽이고</p>
              <div className="text-center pt-4 pb-2">
                <p className="text-sm text-gray-400 font-normal">... (이후 본문 계속) ...</p>
              </div>
            </div>
          </div>

          {/* 아이들 읽기 안내 블록 */}
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 mb-6">
            <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
              <span>🎈</span> 오늘 아이들이 읽는 말씀
            </h3>
            <p className="text-sm font-bold text-gray-800 mb-2">🍞 오병이어의 기적 (마태복음 14:17-21)</p>
            <p className="text-sm text-gray-600 break-keep leading-relaxed">
              부모님이 오늘 통독하시는 <span className="font-bold">마태복음 14장</span> 내용 중, 요한이와 노아가 이해하기 쉬운 '오병이어 기적' 이야기를 아이들이 읽고 있어요. 오늘 저녁 나눔방에서 이 이야기를 함께 나눠보세요!
            </p>
          </div>
        </>
      ) : (
        /* 아이들(요한, 노아) 화면 */
        <div className="bg-white rounded-3xl p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-yellow-100 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4 relative z-10">오늘의 성경 스토리</span>
          <h2 className="text-2xl font-extrabold text-brand-brown mb-2 relative z-10 break-keep">🍞 오병이어의 기적</h2>
          <p className="text-sm text-gray-500 font-medium mb-6 relative z-10">마태복음 14장 17~21절</p>
          
          <div className="text-gray-800 leading-relaxed text-lg font-medium relative z-10 space-y-5 break-keep bg-yellow-50/50 p-5 rounded-2xl">
            <p><sup className="text-xs text-brand-brown/70 mr-1">17</sup>제자들이 이르되 여기 우리에게 있는 것은 떡 다섯 개와 물고기 두 마리뿐이니이다</p>
            <p><sup className="text-xs text-brand-brown/70 mr-1">18</sup>이르시되 그것을 내게 가져오라 하시고</p>
            <p><sup className="text-xs text-brand-brown/70 mr-1">19</sup>무리를 명하여 잔디 위에 앉히시고 떡 다섯 개와 물고기 두 마리를 가지사 하늘을 우러러 축사하시고 떡을 떼어 제자들에게 주시매 제자들이 무리에게 주니</p>
            <p><sup className="text-xs text-brand-brown/70 mr-1">20</sup>다 배불리 먹고 남은 조각을 열두 바구니에 차게 거두었으며</p>
            <p><sup className="text-xs text-brand-brown/70 mr-1">21</sup>먹은 사람은 여자와 어린이 외에 오천 명이나 되었더라</p>
          </div>
        </div>
      )}

      {/* 읽기 완료 버튼 (공통) */}
      <div className="mt-2 relative z-10">
        {!readStatus[currentUser] ? (
          <button 
            onClick={handleFinishReading}
            className="w-full bg-brand-brown text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:bg-brand-brown/90 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>🙌</span> 오늘 말씀 다 읽었어요!
          </button>
        ) : (
          <div className="w-full bg-green-50 text-green-700 border border-green-200 font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2">
            <span>✅</span> 오늘 읽기 완료! 참 잘했어요
          </div>
        )}
      </div>
    </div>
  );
}
