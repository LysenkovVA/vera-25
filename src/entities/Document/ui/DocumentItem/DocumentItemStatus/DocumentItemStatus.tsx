import { Document } from "@/entities/Document";
import { Typography } from "antd";
import dayjs from "dayjs";

export interface DocumentItemStatusProps {
  document: Document;
}

const DocumentItemStatus = (props: DocumentItemStatusProps) => {
  const { document } = props;

  if (!document.startDate && !document.endDate) {
    return (
      <Typography.Text
        style={{
          fontSize: 10,
          padding: 4,
          borderStyle: "solid",
          borderColor: "red",
          borderRadius: 8,
          borderWidth: 1,
          color: "red",
        }}
      >
        {"Срок действия не задан"}
      </Typography.Text>
    );
  }

  if (document.startDate && !document.endDate && !document.isNoEndDate) {
    if (dayjs(document.startDate) < dayjs(Date.now())) {
      return (
        <Typography.Text
          style={{
            fontSize: 10,
            padding: 4,
            borderStyle: "solid",
            borderColor: "orange",
            borderRadius: 8,
            borderWidth: 1,
            color: "orange",
          }}
        >
          {`Действует с ${dayjs(document.startDate).format("DD.MM.YYYY")}`}
        </Typography.Text>
      );
    } else {
      return (
        <Typography.Text
          style={{
            fontSize: 10,
            padding: 4,
            borderStyle: "solid",
            borderColor: "orange",
            borderRadius: 8,
            borderWidth: 1,
            color: "orange",
          }}
        >
          {`Начнет дейстовать с ${dayjs(document.startDate).format("DD.MM.YYYY")}`}
        </Typography.Text>
      );
    }
  }

  if (document.startDate && document.isNoEndDate) {
    if (dayjs(document.startDate) < dayjs(Date.now())) {
      return (
        <Typography.Text
          style={{
            fontSize: 10,
            padding: 4,
            borderStyle: "solid",
            borderColor: "green",
            borderRadius: 8,
            borderWidth: 1,
            color: "green",
          }}
        >
          {`Актуален бессрочно`}
        </Typography.Text>
      );
    } else {
      return (
        <Typography.Text
          style={{
            fontSize: 10,
            padding: 4,
            borderStyle: "solid",
            borderColor: "orange",
            borderRadius: 8,
            borderWidth: 1,
            color: "orange",
          }}
        >
          {`Начнет дейстовать с ${dayjs(document.startDate).format("DD.MM.YYYY")}`}
        </Typography.Text>
      );
    }
  }

  if (document.startDate && document.endDate) {
    if (dayjs(document.startDate) > dayjs(Date.now())) {
      return (
        <Typography.Text
          style={{
            fontSize: 10,
            padding: 4,
            borderStyle: "solid",
            borderColor: "orange",
            borderRadius: 8,
            borderWidth: 1,
            color: "orange",
          }}
        >
          {`Начнет дейстовать с ${dayjs(document.startDate).format("DD.MM.YYYY")}`}
        </Typography.Text>
      );
    } else {
      if (
        dayjs(document.startDate) <= dayjs(Date.now()) &&
        dayjs(document.endDate) >= dayjs(Date.now())
      ) {
        return (
          <Typography.Text
            style={{
              fontSize: 10,
              padding: 4,
              borderStyle: "solid",
              borderColor: "green",
              borderRadius: 8,
              borderWidth: 1,
              color: "green",
            }}
          >
            {`Актуален до ${dayjs(document.endDate).format("DD.MM.YYYY")}`}
          </Typography.Text>
        );
      } else {
        return (
          <Typography.Text
            style={{
              fontSize: 10,
              padding: 4,
              borderStyle: "solid",
              borderColor: "red",
              borderRadius: 8,
              borderWidth: 1,
              color: "red",
            }}
          >
            {`Устарел`}
          </Typography.Text>
        );
      }
    }
  }

  return null;
};

export default DocumentItemStatus;
