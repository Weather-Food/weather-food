import React, { useState } from "react";
import styles from "./FoodAdmin.module.scss"; // SCSS 모듈 import

const FoodAdmin = () => {
  // 예시 데이터
  const adminInfo = {
    name: "관리자 이름",
    profileImage: "/RecipeDetail/food.jpg", // 프로필 이미지 URL
    email: "admin@example.com",
  };

  const [foodStatus, setFoodStatus] = useState({
    pending: 5,
    approved: 10,
    rejected: 2,
  });

  const [recommendedFoods, setRecommendedFoods] = useState([
    {
      userProfile: "/RecipeDetail/food.jpg",
      userName: "사용자1",
      foodName: "피자",
      status: "승인됨",
      date: "2023-10-01",
    },
    {
      userProfile: "/RecipeDetail/food.jpg",
      userName: "사용자2",
      foodName: "스시",
      status: "미승인",
      date: "2023-10-02",
    },
    {
      userProfile: "/RecipeDetail/food.jpg",
      userName: "사용자3",
      foodName: "파스타",
      status: "거절됨",
      date: "2023-10-03",
    },
  ]);

  const handleStatusChange = (
    index: number,
    newStatus: "미승인" | "승인됨" | "거절됨"
  ) => {
    const updatedFoods = [...recommendedFoods];
    updatedFoods[index].status = newStatus;
    setRecommendedFoods(updatedFoods);

    const newFoodStatus = {
      pending: updatedFoods.filter((food) => food.status === "미승인").length,
      approved: updatedFoods.filter((food) => food.status === "승인됨").length,
      rejected: updatedFoods.filter((food) => food.status === "거절됨").length,
    };
    setFoodStatus(newFoodStatus);
  };

  const handleSort = () => {
    const sortedFoods = [...recommendedFoods].sort((a, b) => {
      if (a.status < b.status) return -1;
      if (a.status > b.status) return 1;
      return 0;
    });
    setRecommendedFoods(sortedFoods);
  };

  return (
    <div className={styles.container}>
      {/* 첫 번째 부분: 관리자 정보와 음식 상태 박스 */}
      <div className={styles.section}>
        {/* 관리자 정보 박스 */}
        <div className={styles.adminBox}>
          <p>관리자</p>
          <img src={adminInfo.profileImage} alt="Profile" />
          <h3>{adminInfo.name}</h3>
          <p>{adminInfo.email}</p>
        </div>

        {/* 음식 상태 박스 */}
        <div className={styles.statusBox}>
          <h3>추천 음식 상태</h3>
          <div className={styles.statusGrid}>
            <div className={styles.statusItem}>
              <span>미승인</span>
              <strong>{foodStatus.pending}</strong>
            </div>
            <div className={styles.statusItem}>
              <span>승인됨</span>
              <strong>{foodStatus.approved}</strong>
            </div>
            <div className={styles.statusItem}>
              <span>거절됨</span>
              <strong>{foodStatus.rejected}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 두 번째 부분: 추천 음식 목록 표 */}
      <div className={styles.foodTableContainer}>
        {/* 테이블 헤더 */}
        <div className={styles.tableHeader}>
          <h3>추천 음식 목록</h3>
          <button onClick={handleSort}>승인 여부로 정렬</button>
        </div>

        {/* 테이블 */}
        <table className={styles.foodTable}>
          <thead>
            <tr>
              <th>유저</th>
              <th>추천 음식</th>
              <th>승인 여부</th>
              <th>추천 날짜</th>
            </tr>
          </thead>
          <tbody>
            {recommendedFoods.map((food, index) => (
              <tr key={index}>
                <td className={styles.userCell}>
                  <img src={food.userProfile} alt="User Profile" />
                  <span>{food.userName}</span>
                </td>
                <td>{food.foodName}</td>
                <td>
                  <select
                    value={food.status}
                    onChange={(e) =>
                      handleStatusChange(
                        index,
                        e.target.value as "미승인" | "승인됨" | "거절됨"
                      )
                    }
                  >
                    <option value="미승인">미승인</option>
                    <option value="승인됨">승인됨</option>
                    <option value="거절됨">거절됨</option>
                  </select>
                </td>
                <td>{food.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodAdmin;
