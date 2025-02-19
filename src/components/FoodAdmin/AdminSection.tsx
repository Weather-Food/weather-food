import React from "react";
import styles from "../../styles/FoodAdmin/AdminSection.module.scss";
import { IoMdDoneAll } from "react-icons/io";
import { TbCancel } from "react-icons/tb";
import { FaHourglass } from "react-icons/fa6";
import { AdminSectionProps } from "../../interfaces/foodAdmin";

export const AdminSection: React.FC<AdminSectionProps> = ({
  adminInfo,
  foodStatus,
}) => {
  return (
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
        <div className={styles.statusHeader}>
          <h3>추천 음식 상태</h3>
        </div>

        <div className={styles.statusGrid}>
          <div className={styles.statusItem}>
            <FaHourglass />
            <span>미승인</span>
            <strong>{foodStatus.pending}</strong>
          </div>
          <div className={styles.statusItem}>
            <IoMdDoneAll />
            <span>승인됨</span>
            <strong>{foodStatus.approved}</strong>
          </div>
          <div className={styles.statusItem}>
            <TbCancel />
            <span>거절됨</span>
            <strong>{foodStatus.rejected}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
