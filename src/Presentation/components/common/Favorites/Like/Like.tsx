import React, { useEffect, useState } from 'react'
import { HeartFilled, HeartOutlined } from '@/Presentation/design-system';
import Style from "./Like.module.scss";
import useWebDb from "@/Infrastructure/web-db/useWebDb";
import { IDBStore } from "@/Infrastructure/web-db/IDBStore";
import { PetLike } from "@/Domain/pet/store/PetLike";

type LikeProps = {
    pet: PetLike
}

const Like = ({ pet }: LikeProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const { addData, deleteData, existsInDB } = useWebDb(IDBStore.PetLike);

    useEffect(() => {
        (async () => {
            setIsLiked(await existsInDB(pet.id));
        })();
    }, [])


    const likePet = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLiked(true);
        addData<PetLike>({
            id: pet.id,
            imageUrl: pet.imageUrl,
            specie: pet.specie,
            age: pet.age
        });
    }

    const unLikePet = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLiked(false);
        deleteData(pet.id);
    }

    return (
        <div className={Style.heartIcon}>
            {isLiked ? (
                <HeartFilled onClick={unLikePet} style={{ color: "var(--color-primary)", fontSize: "24px" }} />
            ) : (
                <HeartOutlined onClick={likePet} style={{ color: "#FFFFFF", fontSize: "24px" }} />
            )}
        </div>
    )
}

export default Like