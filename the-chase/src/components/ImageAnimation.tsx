// import React from 'react';
// import './Opening.css'; // Import your CSS file for animations

// interface ImageAnimationProps {
//   isBackgroundClicked: boolean;
// }

// const ImageAnimation: React.FC<ImageAnimationProps> = ({ isBackgroundClicked }) => {
//   return (
//     <div className={`animation-container `}>
//       <img className="animate-left" src="../src/cop_picture.png" alt="Image 1" />
//       <img className="animate-right" src="../src/police_version.png" alt="Image 2" />
//     </div>
//   );
// };

// export default ImageAnimation;
import React from 'react';
import './Opening.css'; // Import your CSS file for animations

const ImageAnimation: React.FC = () => {
  return (
    <div className="animation-container">
      <img className="animate-left" src="../src/cop_picture.png" alt="Image 1" />
      <img className="animate-right" src="../src/police_version.png" alt="Image 2" />
    </div>
  );
};

export default ImageAnimation;

