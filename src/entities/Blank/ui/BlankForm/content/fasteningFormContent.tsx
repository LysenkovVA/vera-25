import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { BlockAndCoverFasteningMethodSelector } from "@/features/BlockAndCoverFasteningMethodSelector";
import { BlockPagesFasteningMethodSelector } from "@/features/BlockPagesFasteningMethodSelector";
import { fasteningFiberContent } from "./fasteningFiberFormContent";
import React from "react";
import { fasteningStaplesContent } from "@/entities/Blank/ui/BlankForm/content/fasteningStaplesFormContent";

const listName = "fastenings";

export const fasteningFormContent = (
  <Form.List name={[listName]}>
    {(fields, { add, remove }) => (
      <>
        {fields.map(
          ({ key: fasteningKey, name: fasteningIndex, ...restField }) => (
            <Flex key={fasteningKey} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(fasteningIndex)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способ скрепления блока с обложкой"}
                    name={[
                      fasteningIndex,
                      "blockAndCoverFasteningMethod",
                      "id",
                    ]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <BlockAndCoverFasteningMethodSelector placeholder="Укажите способ скрепления блока с обложкой" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способ скрпепления страниц блока"}
                    name={[fasteningIndex, "blockPagesFasteningMethod", "id"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <BlockPagesFasteningMethodSelector placeholder="Укажите способ скрпепления страниц блока" />
                  </Form.Item>
                  {fasteningFiberContent(fasteningIndex)}
                  {fasteningStaplesContent(fasteningIndex)}
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[fasteningIndex, "notes"]}
                  >
                    <Input.TextArea
                      placeholder={"Укажите примечания"}
                      autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                  </Form.Item>
                </>
              </Card>
            </Flex>
          ),
        )}
        <Form.Item style={{ display: "flex", justifyItems: "start" }}>
          <Button
            type="link"
            onClick={() => add()}
            block
            icon={<PlusCircleFilled style={{ color: "green" }} />}
          >
            Добавить скрепление
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
);
