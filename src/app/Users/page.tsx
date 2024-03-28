"use client";

import TableComponent from "@/components/TableComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const rows = [
//   {
//     key: "1",
//     name: "Tony Reichert",
//     role: "CEO",
//     status: "Active",
//   },
//   {
//     key: "2",
//     name: "Zoey Lang",
//     role: "Technical Lead",
//     status: "Paused",
//   },
//   {
//     key: "3",
//     name: "Jane Fisher",
//     role: "Senior Developer",
//     status: "Active",
//   },
//   {
//     key: "4",
//     name: "William Howard",
//     role: "Community Manager",
//     status: "Vacation",
//   },
// ];

// const columns = [
//   {
//     key: "name",
//     label: "NAME",
//   },
//   {
//     key: "role",
//     label: "ROLE",
//   },
//   {
//     key: "status",
//     label: "STATUS",
//   },
// ];

export default function Users() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(
          "https://3f8a09b7-d038-4cad-98c8-9944ff94fbee.mock.pstmn.io/user/list"
        )
        .then((res) => res.data.data),
  });

  if (isFetching) return "Updating...";

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // Build Dynamic columns
  const columns = Object.keys(data[0]).map((key) => ({
    key,
    label: key.toUpperCase(),
  }));

  return (
    <>
      <div className="mx-8 mt-12 min-h-screen">
        <TableComponent columns={columns} rows={data} />
      </div>
    </>
  );
}
