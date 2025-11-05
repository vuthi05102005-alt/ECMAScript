
import { createRoot } from 'react-dom/client'
const user = {
  name : " Thi",
  Age : 20,
};

createRoot(document.getElementById('root')).render(
  <div>
       <h1>Tên tôi là :{user.name}</h1>
       <h1>Năm nay tôi :{user.Age} tuổi</h1>
  </div>
);
