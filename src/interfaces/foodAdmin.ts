export interface FoodItem {
  userProfile: string;
  userName: string;
  foodName: string;
  status: "미승인" | "승인됨" | "거절됨";
  date: string;
  weather: string;
  category: string;
}

export interface AdminInfo {
  name: string;
  profileImage: string;
  email: string;
}

export interface FoodStatus {
  pending: number;
  approved: number;
  rejected: number;
}

export interface AdminSectionProps {
  adminInfo: AdminInfo;
  foodStatus: FoodStatus;
}

export interface FoodTableContainerProps {
  handleSort: (sortOption: string) => void;
  sortOption: string;
  recommendedFoods: FoodItem[];
  handleStatusChange: (
    index: number,
    newStatus: "미승인" | "승인됨" | "거절됨"
  ) => void;
}
