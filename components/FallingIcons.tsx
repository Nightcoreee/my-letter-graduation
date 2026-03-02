// import { useEffect, useState } from "react";

// // Bạn có thể thay đổi mảng này thành thẻ <svg> hoặc icon từ lucide-react, react-icons
// const ICON_LIST = ["❄️", "⭐", "🎉", "✨", "💸"]; 

// interface IconProps {
//   id: number;
//   icon: string;
//   left: number;
//   duration: number;
//   delay: number;
//   size: number;
// }

// export default function FallingIcons() {
//   const [icons, setIcons] = useState<IconProps[]>([]);

//   useEffect(() => {
//     // Tạo mảng 30 icons với các giá trị ngẫu nhiên
//     const generatedIcons = Array.from({ length: 30 }).map((_, i) => ({
//       id: i,
//       icon: ICON_LIST[Math.floor(Math.random() * ICON_LIST.length)],
//       left: Math.random() * 100, // Vị trí ngẫu nhiên trên trục X (0 - 100%)
//       duration: Math.random() * 5 + 4, // Thời gian rơi: 4s đến 9s
//       delay: Math.random() * 5, // Độ trễ bắt đầu rơi: 0s đến 5s
//       size: Math.random() * 1.5 + 1, // Kích thước: 1rem đến 2.5rem
//     }));
    
//     setIcons(generatedIcons);
//   }, []);

//   // Nếu render ở Server, return null để tránh lệch giao diện
//   if (icons.length === 0) return null;

//   return (
//     /* pointer-events-none giúp người dùng không bị vướng khi click vào các element bên dưới */
//     <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
//       {icons.map((item) => (
//         <div
//           key={item.id}
//           className="absolute top-[-10%] animate-fall"
//           style={{
//             left: `${item.left}%`,
//             animationDuration: `${item.duration}s`,
//             animationDelay: `${item.delay}s`,
//             fontSize: `${item.size}rem`,
//           }}
//         >
//           {item.icon}
//         </div>
//       ))}
//     </div>
//   );
// }