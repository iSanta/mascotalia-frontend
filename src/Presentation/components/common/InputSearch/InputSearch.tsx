import { Button, Col, Input, Row } from "@/Presentation/design-system";
import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";

type InputSearchProps = {
  onEmpty?: () => void;
  onSubmit: (value: string) => void;
};

const InputSearch = ({ onSubmit, onEmpty }: InputSearchProps) => {
  const searchInputRef = useRef<string | null>(null);

  return (
    <>
      <Col span={17}>
        <Input
          placeholder="Buscar mascota por identificador"
          onChange={(e) => {
            if (e.target.value === "") {
              onEmpty && onEmpty();
              return;
            }
            searchInputRef.current = e.target.value;
          }}
        />
      </Col>
      <Col span={7}>
        <Button
          type="primary"
          style={{ width: "50%" }}
          size="middle"
          onClick={() => {
            searchInputRef.current && onSubmit(searchInputRef.current);
          }}
        >
          <IoSearch size={22} />
        </Button>
      </Col>
    </>
  );
};

export default InputSearch;
