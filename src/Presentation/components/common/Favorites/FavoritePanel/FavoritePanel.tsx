'use client';
import React, { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import styles from "./FavoritePanel.module.scss";
import useWebDb from "@/Infrastructure/web-db/useWebDb";
import { IDBStore } from "@/Infrastructure/web-db/IDBStore";
import { PetLike } from "@/Domain/pet/store/PetLike";
import FavoritesList from "./FavoriteList";

const FavoritePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getAllRecords, deleteData } = useWebDb(IDBStore.PetLike);
  const [petLikes, setPetLikes] = useState<PetLike[]>([]);

  useEffect(() => {
    (async () => {
      setPetLikes(await getAllRecords<PetLike>())
    })();
  }, [deleteData])

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<HeartOutlined />}
        size="large"
        className={styles.favButton}
        onClick={() => setIsOpen(!isOpen)}
      />

      <Drawer
        title="Mis Favoritos"
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        {petLikes && <FavoritesList favorites={petLikes} onRemove={deleteData} />}
      </Drawer>
    </>
  );
};

export default FavoritePanel;

