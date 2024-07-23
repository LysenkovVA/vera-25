import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import NewBlancMaster from "@/components/NewBlancButton/NewBlancMaster";

const NewBlancButton = () => {
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
      <Drawer
        closable
        destroyOnClose
        title={<p>Новый бланк</p>}
        height={"90%"}
        placement="bottom"
        open={open}
        // loading={loading}
        onClose={() => setOpen(false)}
      >
        <NewBlancMaster />
      </Drawer>
    </>
  );
};

export default NewBlancButton;
