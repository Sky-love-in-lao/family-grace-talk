export default function Commentary() {
  return (
    <div className="px-6 pb-6 pt-2 space-y-6">
      <div className="bg-brand-mint/30 rounded-3xl p-7 shadow-sm border border-brand-mint/50">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2 text-lg">
          <span>💡</span> 오늘의 말씀 해설
        </h3>
        <div className="text-teal-900/90 text-base leading-relaxed break-keep space-y-4">
          <p>
            오늘 본문에서는 한 어린아이가 가져온 작은 도시락(떡 다섯 개와 물고기 두 마리)을 예수님께서 축복하시고 오천 명을 먹이신 놀라운 기적이 나와요.
          </p>
          <p>
            우리가 가진 것이 비록 작고 보잘것없어 보일지라도, 예수님의 손에 들려질 때 수많은 사람을 살리고 풍성하게 하는 놀라운 축복의 통로가 된답니다!
          </p>
        </div>
      </div>

      <div className="bg-orange-50 rounded-3xl p-7 shadow-sm border border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full -mr-10 -mt-10 opacity-30"></div>
        <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2 text-lg relative z-10">
          <span>🙏</span> 함께 기도해요
        </h3>
        <p className="text-orange-900/90 text-base leading-relaxed break-keep relative z-10">
          "하나님, 오늘 오병이어를 드린 소년처럼 저희 가족도 가진 것을 기쁘게 나누는 사람이 되게 해주세요. 우리 가족의 작은 섬김이 예수님의 손을 거쳐 이웃에게 큰 사랑으로 전해지게 하옵소서. 예수님의 이름으로 기도합니다. 아멘."
        </p>
      </div>
    </div>
  );
}
