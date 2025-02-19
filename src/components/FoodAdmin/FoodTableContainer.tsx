import React from "react";
import styles from "../../styles/FoodAdmin/FoodTableContainer.module.scss";
import { FoodTableContainerProps } from "../../interfaces/foodAdmin";

export const FoodTableContainer: React.FC<FoodTableContainerProps> = ({
  handleSort,
  sortOption,
  recommendedFoods,
  handleStatusChange,
}) => {
  return (
    <div className={styles.foodTableContainer}>
      <div className={styles.tableHeader}>
        <h3>추천 음식 목록</h3>
        <select
          className={styles.sortSelect}
          onChange={(e) => handleSort(e.target.value)}
          value={sortOption}
        >
          <option value="최신순">최신순</option>
          <option value="오래된순">오래된순</option>
          <option value="미승인">미승인</option>
          <option value="승인됨">승인됨</option>
          <option value="거절됨">거절됨</option>
        </select>
      </div>

      {/* 테이블 */}
      <table className={styles.foodTable}>
        <thead>
          <tr>
            <th>유저</th>
            <th>추천 음식</th>
            <th>날씨</th>
            <th>카테고리</th>
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
              <td>{food.weather}</td>
              <td>{food.category}</td>
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
  );
};
