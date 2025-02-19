import React, { useState } from "react";
import styles from "./FoodAdmin.module.scss";
import { AdminSection } from "../components/FoodAdmin/AdminSection";
import { FoodTableContainer } from "../components/FoodAdmin/FoodTableContainer";
import { AdminInfo, FoodItem } from "../interfaces/foodAdmin";

const FoodAdmin = () => {
  const [sortOption, setSortOption] = useState<string>("미승인");

  const [adminInfo] = useState<AdminInfo>({
    name: "관리자 이름",
    profileImage: "/RecipeDetail/food.jpg",
    email: "admin@example.com",
  });

  const [foodStatus, setFoodStatus] = useState({
    pending: 5,
    approved: 10,
    rejected: 2,
  });

  const [recommendedFoods, setRecommendedFoods] = useState<FoodItem[]>([
    {
      userProfile: "/RecipeDetail/food.jpg",
      userName: "사용자1",
      foodName: "피자",
      status: "승인됨",
      date: "2023-10-01",
      weather: "맑음",
      category: "이탈리안",
    },
    {
      userProfile: "/RecipeDetail/food.jpg",
      userName: "사용자2",
      foodName: "스시",
      status: "미승인",
      date: "2023-10-02",
      weather: "비",
      category: "일식",
    },
    {
      userProfile: "/RecipeDetail/food.jpg",
      userName: "사용자3",
      foodName: "파스타",
      status: "거절됨",
      date: "2023-10-03",
      weather: "흐림",
      category: "이탈리안",
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

  const handleSort = (option: string) => {
    setSortOption(option);
    const sortedFoods = [...recommendedFoods].sort((a, b) => {
      if (option === "미승인" || option === "승인됨" || option === "거절됨") {
        if (a.status === option && b.status !== option) return -1;
        if (a.status !== option && b.status === option) return 1;
      } else if (option === "최신순") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (option === "오래된순") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });
    setRecommendedFoods(sortedFoods);
  };

  return (
    <div className={styles.container}>
      {/* 첫 번째 부분: 관리자 정보와 음식 상태 박스 */}
      <AdminSection adminInfo={adminInfo} foodStatus={foodStatus} />
      {/* 두 번째 부분: 추천 음식 목록 표 */}
      <FoodTableContainer
        handleSort={handleSort}
        sortOption={sortOption}
        recommendedFoods={recommendedFoods}
        handleStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default FoodAdmin;
