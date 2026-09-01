import { useState } from 'react';

export default function Sharing() {
  const currentUser = localStorage.getItem('familyProfileName') || '아빠';
  
  const bgPositions: Record<string, string> = {
    '아빠': '31% 15%',
    '엄마': '74% 24%',
    '요한': '30% 50%',
    '노아': '71% 52%'
  };
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: '엄마',
      time: '오전 7:30',
      content: '하나님이 빛을 만드신 것처럼, 우리 가족도 오늘 하루 서로에게 따뜻한 빛이 되었으면 좋겠어! 사랑해 우리 아들들 ❤️',
      prayer: ''
    },
    {
      id: 2,
      name: '요한',
      time: '오후 2:15',
      content: '하나님 멋져요! 😊 아빠 엄마 사랑해요!',
      prayer: ''
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContent, setNewContent] = useState('');

  const handleAddMessage = () => {
    if (!newContent.trim()) return;
    const time = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, {
      id: Date.now(),
      name: currentUser,
      time,
      content: newContent,
      prayer: ''
    }]);
    setNewContent('');
    setIsModalOpen(false);
  };

  return (
    <div className="px-6 pb-6 pt-2 relative min-h-full">
      <div className="space-y-4 pb-20">
        {messages.map(msg => (
          <div key={msg.id} className="bg-white rounded-3xl p-5 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-gray-50 slide-in-bottom">
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-10 h-10 rounded-full border border-gray-100 bg-[url('/src/assets/family.jpg')] bg-[length:400%_auto]" 
                style={{ backgroundPosition: bgPositions[msg.name] || '31% 15%' }}
              ></div>
              <div>
                <span className="font-bold text-gray-800 block">{msg.name}</span>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed break-keep">
              {msg.content}
            </p>
            {msg.prayer && (
              <div className="mt-4 text-sm text-brand-brown font-semibold bg-brand-peach/60 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl">
                <span>🙏</span> 기도: {msg.prayer}
              </div>
            )}
          </div>
        ))}
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-brand-brown text-white rounded-full shadow-xl flex items-center justify-center hover:bg-brand-brown/90 hover:scale-105 transition-all z-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* 작성 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl scale-in-center">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">새 나눔 작성</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <textarea 
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-peach h-32 resize-none mb-4"
              placeholder="오늘 말씀에서 은혜받은 내용이나 가족에게 하고 싶은 말을 적어보세요..."
            ></textarea>
            <button 
              onClick={handleAddMessage}
              className="w-full bg-brand-brown text-white font-bold py-3 rounded-2xl hover:bg-brand-brown/90 transition-colors"
            >
              나눔 등록하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
