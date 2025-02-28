import { List, Avatar, Typography, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { PetLike } from "@/Domain/pet/store/PetLike";
import checkImageExist from "@/Application/utils/checkImageExist";
import Link from "next/link";

interface FavoritesListProps {
    favorites: PetLike[];
    onRemove: (id: string) => void;
}

const FavoritesList = ({ favorites, onRemove }: FavoritesListProps) => {
    return (
        <List
            dataSource={favorites}
            renderItem={(item) => (

                <List.Item
                    key={item.id}
                    actions={[
                        <Button
                            key={item.id}
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => onRemove(item.id)}
                        />
                    ]}
                >
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Link
                            href={`/adopt/detail/${item.specie.toLowerCase()}/${item.id}`}
                            style={{ width: '100%' }}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={checkImageExist({ url: item.imageUrl })} size={64} shape="square" />}
                                title={<Typography.Text strong>{item.specie}</Typography.Text>}
                                description={`${item.age} años`}
                            />
                        </Link>
                    </div>

                </List.Item>
            )}
        />
    );
};

export default FavoritesList;
