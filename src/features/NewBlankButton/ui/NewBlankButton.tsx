import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { BlankEditorDrawer } from "@/entities/Blank";

const NewBlankButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        type={"primary"}
        icon={<PlusCircleOutlined />}
        onClick={() => setOpen(true)}
      >
        Добавить
      </Button>
      <BlankEditorDrawer
        closable
        destroyOnClose
        title={<p>Новый бланк</p>}
        height={"90%"}
        placement="bottom"
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default NewBlankButton;
