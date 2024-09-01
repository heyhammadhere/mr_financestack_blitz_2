import { createColumnHelper } from "@tanstack/react-table";
import EditableCell from "../GeneralTable/EditableCell";
import CityDropDown from "./CityDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const columnHelper = createColumnHelper();

export const columnDef = (setData) => [
  columnHelper.accessor("id", {
    header: "Id",
    type: "number",
  }),
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: EditableCell,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    size: 200,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    header: "City",
    cell: CityDropDown,
  },
  columnHelper.display({
    id: "delete",
    header: 'Delete',
    cell: ({ row }) => (
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon
          className="icon"
          icon={faTrashCan}
          style={{
            fontSize: '18px', // Adjust size as needed
            cursor: 'pointer', // Change cursor to pointer on hover
          }}
          onClick={() =>
            setData((prevData) =>
              prevData.filter((data) => data.id !== row.original.id)
            )
          }
        />
      </div>
    ),
  }),
];
