import React from 'react';

// 模拟 AI 生成的电商案例数据
const MOCK_DESIGNS = [
  { id: 1, title: "极简主义香水", tag: "Nano Banana 2", height: "h-80", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
  { id: 2, title: "北欧风餐具", tag: "Studio Light", height: "h-64", img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88" },
  { id: 3, title: "智能手表详情页", tag: "Agentic Flow", height: "h-96", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { id: 4, title: "高端护肤品", tag: "Behance Style", height: "h-72", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571" },
  { id: 5, title: "潮流运动鞋", tag: "Auto-Layout", height: "h-80", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  // ... 更多数据
];

const PinterestGrid = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-4">
      {/* 瀑布流容器：移动端1列，平板2列，桌面4列 */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {MOCK_DESIGNS.map((item) => (
          <div 
            key={item.id} 
            className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 transition-all duration-500 hover:shadow-2xl"
          >
            {/* 图片层 */}
            <img 
              src={item.img} 
              alt={item.title} 
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.height}`}
            />

            {/* 悬浮遮罩层 (Behance 风格) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <p className="text-white text-xs font-light tracking-[0.2em] mb-1 uppercase">{item.tag}</p>
                  <h3 className="text-white font-medium text-lg">{item.title}</h3>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-600 hover:text-white transition-colors">
                  使用此工作流
                </button>
              </div>
            </div>

            {/* AI 标识勋章 */}
            <div className="absolute top-4 left-4">
               <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter shadow-sm">
                 AI AGENT
               </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinterestGrid;
