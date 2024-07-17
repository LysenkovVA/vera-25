"use client";
import CollectionTable from "@/app/(auth-routes)/collection/components/CollectionTable";
import { useSession } from "next-auth/react";

const CollectionPage = () => {
  const session = useSession();
  return <CollectionTable />;
};

export default CollectionPage;
