"use client";
import React from "react";
import {
  Button,
  Card,
  Divider,
  Flex,
  Form,
  Input,
  Switch,
  Tabs,
  Typography,
} from "antd";
import {
  ApiFilled,
  AppstoreTwoTone,
  BookFilled,
  ContactsFilled,
  ContainerFilled,
  EnvironmentFilled,
  FileImageTwoTone,
  HomeFilled,
  InfoCircleTwoTone,
  LockFilled,
  MinusCircleFilled,
  PlusCircleFilled,
  ToolFilled,
} from "@ant-design/icons";
import { SecurityLevelSelector } from "@/features/SecurityLevelSelector";
import { CountrySelector } from "@/features/CountrySelector";
import { ManufacturerSelector } from "@/features/ManufacturerSelector";
import { Blank } from "@/entities/Blank";
import { CoverDesignSelector } from "@/features/CoverDesignSelector";
import { CoverColorSelector } from "@/features/CoverColorSelector";
import { CoverTextureSelector } from "@/features/CoverTextureSelector";
import { CoverImageMethodSelector } from "@/features/CoverImageMethodSelector";
import { BlockDesignSelector } from "@/features/BlockDesignSelector";
import { BlockCornersDesignSelector } from "@/features/BlockCornerDesignSelector";
import { BlockPagesMaterialSelector } from "@/features/BlockPageMaterialSelector";
import { BlockAndCoverFasteningMethodSelector } from "@/features/BlockAndCoverFasteningMethodSelector";
import { BlockPagesFasteningMethodSelector } from "@/features/BlockPagesFasteningMethodSelector";

export interface BlankDescriptionFormProps {
  initialValue?: Blank;
  onFieldsChange?: (blank: Blank) => void;
}

const BlankForm = (props: BlankDescriptionFormProps) => {
  const { onFieldsChange } = props;

  const [form] = Form.useForm();

  const infoFormContent = (
    <>
      <Divider orientation={"left"}>
        <Typography.Title level={4}>
          <Flex gap={4}>
            <InfoCircleTwoTone />
            {"Общие сведения"}
          </Flex>
        </Typography.Title>
      </Divider>
      <Form.Item label={<Flex gap={4}>{"Название"}</Flex>} name={"name"}>
        <Input.TextArea
          placeholder={"Укажите название бланка"}
          autoSize={{ minRows: 3, maxRows: 3 }}
        />
      </Form.Item>
      <Form.Item
        label={
          <Flex gap={4}>
            <HomeFilled />
            {"Страна"}
          </Flex>
        }
        name={"countryId"}
      >
        <CountrySelector placeholder={"Укажите страну"} />
      </Form.Item>
      <Form.Item
        label={
          <Flex gap={4}>
            <ToolFilled />
            {"Производитель"}
          </Flex>
        }
        name={"manufacturerId"}
      >
        <ManufacturerSelector placeholder={"Укажите производителя"} />
      </Form.Item>
      <Form.Item
        label={
          <Flex gap={4}>
            <LockFilled />
            {"Уровень защищенности"}
          </Flex>
        }
        name={"securityLevelId"}
      >
        <SecurityLevelSelector placeholder={"Укажите уровень защищенности"} />
      </Form.Item>
    </>
  );

  const coverFormContent = (
    <Form.List name={"covers"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(name)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Конструкция"}
                    name={[name, "coverDesignId"]}
                    rules={[
                      { required: true, message: "Не указана конструкция" },
                    ]}
                  >
                    <CoverDesignSelector placeholder="Укажите конструкцию" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Формат, мм"}
                    name={[name, "coverFormat"]}
                    rules={[{ required: true, message: "Не указан формат" }]}
                  >
                    <Input placeholder="Укажите формат в мм" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Цвет покровного материала"}
                    name={[name, "coverColorId"]}
                    rules={[{ required: true, message: "Не указан цвет" }]}
                  >
                    <CoverColorSelector placeholder="Укажите цвет" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Фактура покровного материала"}
                    name={[name, "coverTextureId"]}
                    rules={[{ required: true, message: "Не указана фактура" }]}
                  >
                    <CoverTextureSelector placeholder={"Укажите фактуру"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способ нанесения изображений"}
                    name={[name, "coverImageMethodId"]}
                    rules={[
                      {
                        required: true,
                        message: "Не указан способ нанесения",
                      },
                    ]}
                  >
                    <CoverImageMethodSelector
                      placeholder={"Укажите способ нанесения изображений"}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[name, "coverNotes"]}
                  >
                    <Input.TextArea
                      placeholder={"Укажите примечания"}
                      autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                  </Form.Item>
                </>
              </Card>
            </Flex>
          ))}
          <Form.Item style={{ display: "flex", justifyItems: "start" }}>
            <Button
              type="link"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled style={{ color: "green" }} />}
            >
              Добавить обложку
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );

  const blockFormContent = (
    <Form.List name={"blocks"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(name)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Конструкция"}
                    name={[name, "blockDesign"]}
                    rules={[
                      { required: true, message: "Не указана конструкция" },
                    ]}
                  >
                    <BlockDesignSelector placeholder="Укажите конструкцию" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Формат, мм"}
                    name={[name, "blockFormat"]}
                    rules={[{ required: true, message: "Не указан формат" }]}
                  >
                    <Input placeholder="Укажите формат в мм" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Форма углов"}
                    name={[name, "blockCornersDesign"]}
                    rules={[
                      { required: true, message: "Не указана форма углов" },
                    ]}
                  >
                    <BlockCornersDesignSelector placeholder="Укажите форму углов" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Материал страниц"}
                    name={[name, "blockPagesMaterial"]}
                    rules={[
                      { required: true, message: "Не указан материал страниц" },
                    ]}
                  >
                    <BlockPagesMaterialSelector
                      placeholder={"Укажите материал страниц"}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Количество страниц"}
                    name={[name, "pagesInBlock"]}
                    rules={[
                      {
                        required: true,
                        message: "Не указано количество страниц",
                      },
                    ]}
                  >
                    <Input placeholder={"Укажите количество страниц"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Пронумеровано страниц"}
                    name={[name, "pagesNumbered"]}
                    rules={[
                      {
                        required: true,
                        message:
                          "Не указано количество пронумерованных страниц",
                      },
                    ]}
                  >
                    <Input
                      placeholder={"Укажите количество пронумерованных страниц"}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Наличие форзацев"}
                    name={[name, "hasEndPapers"]}
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[name, "coverNotes"]}
                  >
                    <Input.TextArea
                      placeholder={"Укажите примечания"}
                      autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                  </Form.Item>
                </>
              </Card>
            </Flex>
          ))}
          <Form.Item style={{ display: "flex", justifyItems: "start" }}>
            <Button
              type="link"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled style={{ color: "green" }} />}
            >
              Добавить блок
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );

  const fasteningFormContent = (
    <Form.List name={"fastenings"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(name)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способ скрепления блока с обложкой"}
                    name={[name, "blockAndCoverFasteningMethod"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <BlockAndCoverFasteningMethodSelector placeholder="Укажите способ скрепления блока с обложкой" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способ скрпепления страниц блока"}
                    name={[name, "blockPagesFasteningMethod"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <BlockPagesFasteningMethodSelector placeholder="Укажите способ скрпепления страниц блока" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Нить"}
                    name={[name, "fasteningFibers"]}
                  >
                    <Input placeholder="Укажите" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Скобы"}
                    name={[name, "fasteningStaples"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <Input placeholder={"Укажите"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[name, "notes"]}
                  >
                    <Input.TextArea
                      placeholder={"Укажите примечания"}
                      autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                  </Form.Item>
                </>
              </Card>
            </Flex>
          ))}
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

  // Размещение основных реквизитов
  const detailsLocationFormContent = <>{"Контент размещения реквизитов"}</>;

  // Персонализация
  const personalizationFormContent = <>{"Контент персонализации"}</>;

  const tabsItems: {
    label: string;
    key: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  }[] = [
    {
      label: "Обложка",
      key: "1",
      children: coverFormContent,
      icon: <BookFilled />,
    },
    {
      label: "Блок",
      key: "2",
      children: blockFormContent,
      icon: <ContainerFilled />,
    },
    {
      label: "Скрепление",
      key: "3",
      children: fasteningFormContent,
      icon: <ApiFilled />,
    },
    {
      label: "Реквизиты",
      key: "4",
      children: detailsLocationFormContent,
      icon: <EnvironmentFilled />,
    },
    {
      label: "Персонализация",
      key: "5",
      children: personalizationFormContent,
      icon: <ContactsFilled />,
    },
  ];

  const constructionFormContent = (
    <>
      <Divider orientation={"left"}>
        <Typography.Title level={4}>
          <Flex gap={4}>
            <AppstoreTwoTone />
            {"Конструкция"}
          </Flex>
        </Typography.Title>
      </Divider>
      <Form.Item colon={false} label={" "}>
        <Tabs tabPosition={"top"} items={tabsItems} />
      </Form.Item>
    </>
  );

  const imagesFormContent = (
    <>
      <Divider orientation={"left"}>
        <Typography.Title level={4}>
          <Flex gap={4}>
            <FileImageTwoTone />
            {"Изображения"}
          </Flex>
        </Typography.Title>
      </Divider>
    </>
  );

  return (
    <Form
      id={"blankForm"}
      form={form}
      style={{ padding: 4, width: "100%" }}
      labelCol={{ span: 4 }}
      labelWrap
      wrapperCol={{ span: 16 }}
      onFieldsChange={(changedFields, allFields) => {
        // onFieldsChange?.(changedFields, allFields);
        onFieldsChange?.(form.getFieldsValue());
        // message.info(JSON.stringify(form.getFieldsValue(), null, 2));
      }}
    >
      {infoFormContent}
      {constructionFormContent}
      {imagesFormContent}
    </Form>
  );
};

export default BlankForm;
