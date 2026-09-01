import { useState } from 'react';

export default function Worship() {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const todayDay = days[new Date().getDay()];
  
  // Local storage for user (mocking context)
  const currentUser = localStorage.getItem('familyProfileName') || '아빠';

  const [expanded, setExpanded] = useState({
    creed: false,
    song1: false,
    song2: false,
    prayer: false,
  });

  const toggle = (section: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="px-6 pb-6 pt-2">
      <div className="bg-brand-brown text-white rounded-3xl p-7 shadow-lg relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
        <h2 className="text-2xl font-bold mb-2 relative z-10">{todayDay} 가정예배</h2>
        <p className="text-brand-brown/40 text-white/80 text-sm relative z-10">오후 8시 00분 시작</p>
      </div>

      <div className="space-y-5">
        {/* 1. 신앙고백 */}
        <div 
          onClick={() => toggle('creed')}
          className="bg-white rounded-3xl p-6 shadow-sm border-t-4 border-brand-brown relative overflow-hidden cursor-pointer transition-all active:scale-[0.98]"
        >
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-5">⛪️</div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-extrabold text-brand-brown text-lg">1. 신앙고백</h2>
            <span className="text-brand-brown/50 text-sm">{expanded.creed ? '▲' : '▼'}</span>
          </div>
          <p className="text-gray-600 font-medium break-keep">사도신경으로 우리의 신앙을 고백합니다.</p>
          
          {expanded.creed && (
            <div className="mt-4 pt-4 border-t border-gray-100 text-gray-700 text-sm leading-relaxed space-y-2 break-keep bg-gray-50 p-4 rounded-xl">
              <p>전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며,</p>
              <p>그 외아들 우리 주 예수 그리스도를 믿사오니,</p>
              <p>이는 성령으로 잉태하사 동정녀 마리아에게 나시고,</p>
              <p>본디오 빌라도에게 고난을 받으사 십자가에 못 박혀 죽으시고,</p>
              <p>장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며,</p>
              <p>하늘에 오르사 전능하신 하나님 우편에 앉아 계시다가,</p>
              <p>저리로서 산 자와 죽은 자를 심판하러 오시리라.</p>
              <p>성령을 믿사오며, 거룩한 공회와, 성도가 서로 교통하는 것과,</p>
              <p>죄를 사하여 주시는 것과, 몸이 다시 사는 것과,</p>
              <p>영원히 사는 것을 믿사옵나이다. 아멘.</p>
            </div>
          )}
        </div>
        
        {/* 2. 찬양 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border-t-4 border-teal-500 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-5">🎵</div>
          <h2 className="font-extrabold text-teal-800 mb-4 text-lg">2. 찬양</h2>
          <ul className="space-y-3">
            {/* 곡 1 */}
            <li>
              <div 
                onClick={() => toggle('song1')}
                className="flex justify-between items-center bg-teal-50/50 p-3 rounded-xl cursor-pointer hover:bg-teal-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-lg text-xs font-bold">곡1</span> 
                  <span className="text-gray-700 font-bold text-sm">내 안에 부어주소서</span>
                </div>
                <span className="text-teal-600/50 text-xs">{expanded.song1 ? '접기 ▲' : '악보/듣기 ▼'}</span>
              </div>
              {expanded.song1 && (
                <div className="mt-2 p-3 bg-gray-50 rounded-xl space-y-3">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <span className="text-gray-500 font-bold z-10 flex items-center gap-2">▶️ YouTube 영상 재생</span>
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                  <div className="h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">🎼 악보 이미지 공간</span>
                  </div>
                </div>
              )}
            </li>
            
            {/* 곡 2 */}
            <li>
              <div 
                onClick={() => toggle('song2')}
                className="flex justify-between items-center bg-teal-50/50 p-3 rounded-xl cursor-pointer hover:bg-teal-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-lg text-xs font-bold">곡2</span> 
                  <span className="text-gray-700 font-bold text-sm">예수님이 좋은걸</span>
                </div>
                <span className="text-teal-600/50 text-xs">{expanded.song2 ? '접기 ▲' : '악보/듣기 ▼'}</span>
              </div>
              {expanded.song2 && (
                <div className="mt-2 p-3 bg-gray-50 rounded-xl space-y-3">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <span className="text-gray-500 font-bold z-10 flex items-center gap-2">▶️ YouTube 영상 재생</span>
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                  <div className="h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">🎼 악보 이미지 공간</span>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        
        {/* 3. 오늘의 말씀 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border-t-4 border-blue-400 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-5">📖</div>
          <h2 className="font-extrabold text-blue-800 mb-2 text-lg">3. 오늘의 말씀</h2>
          <p className="text-blue-600 font-bold mb-3">마태복음 14장 17~21절</p>
          <div className="text-gray-700 bg-blue-50/50 p-4 rounded-2xl leading-relaxed break-keep space-y-2 text-sm">
            <p><sup className="text-xs text-blue-400 mr-1">17</sup>제자들이 이르되 여기 우리에게 있는 것은 떡 다섯 개와 물고기 두 마리뿐이니이다</p>
            <p><sup className="text-xs text-blue-400 mr-1">18</sup>이르시되 그것을 내게 가져오라 하시고</p>
            <p><sup className="text-xs text-blue-400 mr-1">19</sup>무리를 명하여 잔디 위에 앉히시고 떡 다섯 개와 물고기 두 마리를 가지사 하늘을 우러러 축사하시고 떡을 떼어 제자들에게 주시매 제자들이 무리에게 주니</p>
            <p><sup className="text-xs text-blue-400 mr-1">20</sup>다 배불리 먹고 남은 조각을 열두 바구니에 차게 거두었으며</p>
            <p><sup className="text-xs text-blue-400 mr-1">21</sup>먹은 사람은 여자와 어린이 외에 오천 명이나 되었더라</p>
          </div>
        </div>

        {/* 4. 설교 (순서와 제목은 모두에게, 내용은 아빠에게만 보임) */}
        <div className="bg-orange-50 rounded-3xl p-6 shadow-sm border-t-4 border-orange-400 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-10">👨‍🏫</div>
          <h2 className="font-extrabold text-orange-800 mb-2 text-lg">4. 아빠의 말씀 나누기</h2>
          <p className="text-orange-600 font-bold text-sm">제목: 작은 것도 나누면 기적이 됩니다</p>
          
          {currentUser === '아빠' && (
            <div className="mt-3 text-gray-700 bg-white/60 p-4 rounded-2xl leading-relaxed break-keep space-y-4 text-sm">
              <p>요한아, 노아야, 오늘 우리가 읽은 말씀에 누가 나왔지? 맞아, 예수님을 따라다니던 수많은 사람들이 배가 고팠을 때, 한 꼬마 친구가 짠~ 하고 나타났어! 그 아이의 도시락에는 뭐가 들어있었을까? 그래, 보리떡 다섯 개와 물고기 두 마리뿐이었지.</p>
              <p>이 도시락은 꼬마 친구 혼자 먹기엔 딱 맞았겠지만, 그곳에 모인 엄청나게 많은 사람들을 먹이기엔 너무나도 부족했어요. 하지만 이 친구는 자기가 먹을 것을 아끼지 않고 예수님께 기쁜 마음으로 드렸어.</p>
              <p>그랬더니 어떤 일이 일어났을까? 예수님이 그 작은 도시락을 들고 하나님께 감사 기도를 드리자, 무려 5천 명이 넘는 사람들이 다 배불리 먹고도 12바구니나 남는 엄청난 기적이 일어났단다!</p>
              <p>우리도 이 꼬마 친구처럼 할 수 있어. '내 장난감인데...', '내 간식인데...' 하고 나만 생각하기보다, 내가 가진 것을 예수님의 사랑으로 동생에게, 형에게, 엄마 아빠에게 기쁘게 나누어줄 때 하나님은 너무너무 기뻐하셔.</p>
              <p>우리가 나눈 그 작은 사랑을 통해 우리 가정에 더 큰 기쁨과 웃음이 넘치게 만들어 주신단다. 이번 한 주 동안 요한이와 노아도 나의 작은 것을 기쁘게 나누는 멋진 기적의 주인공들이 되기를 바라!</p>
              
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="font-bold text-orange-900">✨ 가족 나눔 질문:</p>
                <ul className="list-disc pl-5 space-y-1 text-orange-800 mt-2">
                  <li>내가 가족을 위해 양보하거나 기쁘게 나눌 수 있는 나의 '오병이어'는 무엇이 있을까?</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 5. 합심기도 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border-t-4 border-rose-400 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-5">💖</div>
          <h2 className="font-extrabold text-rose-800 mb-3 text-lg">5. 합심기도</h2>
          <div className="space-y-4 text-sm">
            <div className="bg-rose-50/50 p-4 rounded-xl break-keep">
              <span className="inline-block bg-rose-100 text-rose-700 px-2 py-1 rounded-lg text-xs font-bold mb-2">🌱 삶의 적용</span>
              <p className="text-gray-700 font-medium">나의 것을 욕심내지 않고, 도움이 필요한 사람이나 우리 가족에게 기쁘게 나누어 주기로 다짐해요.</p>
            </div>
            <div className="bg-rose-50 p-4 rounded-xl break-keep">
              <span className="inline-block bg-rose-200 text-rose-800 px-2 py-1 rounded-lg text-xs font-bold mb-2">🙏 기도제목</span>
              <p className="text-gray-700 font-medium leading-relaxed">
                "하나님, 저도 오병이어를 드린 소년처럼 나의 것을 기쁘게 나눌 수 있는 예쁜 마음을 주세요. 우리 가족이 서로 돕고 나누며 기적이 넘치는 사랑의 가정이 되게 해주세요. 예수님의 이름으로 기도합니다. 아멘."
              </p>
            </div>
          </div>
        </div>
        
        {/* 6. 주기도문 */}
        <div 
          onClick={() => toggle('prayer')}
          className="bg-white rounded-3xl p-6 shadow-sm border-t-4 border-purple-400 relative overflow-hidden cursor-pointer transition-all active:scale-[0.98]"
        >
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-5">🙏</div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-extrabold text-purple-800 text-lg">6. 주기도문</h2>
            <span className="text-purple-800/50 text-sm">{expanded.prayer ? '▲' : '▼'}</span>
          </div>
          <p className="text-gray-600 font-medium break-keep">주님이 가르쳐주신 기도로 오늘 예배를 마칩니다.</p>
          
          {expanded.prayer && (
            <div className="mt-4 pt-4 border-t border-gray-100 text-gray-700 text-sm leading-relaxed space-y-2 break-keep bg-gray-50 p-4 rounded-xl text-center">
              <p>하늘에 계신 우리 아버지여,</p>
              <p>이름이 거룩히 여김을 받으시오며,</p>
              <p>나라이 임하옵시며,</p>
              <p>뜻이 하늘에서 이룬 것 같이 땅에서도 이루어지이다.</p>
              <p>오늘날 우리에게 일용할 양식을 주옵시고,</p>
              <p>우리가 우리에게 죄 지은 자를 사하여 준 것 같이</p>
              <p>우리 죄를 사하여 주옵시고,</p>
              <p>우리를 시험에 들게 하지 마옵시고,</p>
              <p>다만 악에서 구하옵소서.</p>
              <p>나라와 권세와 영광이 아버지께</p>
              <p>영원히 있사옵나이다. 아멘.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
