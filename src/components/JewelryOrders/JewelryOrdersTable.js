import React from "react";
import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import "../../ProjectCSS/reactTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faSort,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import dataJSON from "./data.json";


const JewelryOrdersTable = () => {
  const importedData = React.useMemo(() => dataJSON, [])
  const [data, setData] = useState(() => [...importedData])
  const finalColumnDef = React.useMemo(() => columnDef(setData), [setData]);

  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([])
  const [globalFilter, setGlobalFilter] = React.useState('')



  
  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      columnFilters: columnFilters,
      globalFilter: globalFilter,
    },
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <Row>  
    <div>
    <Row className="justify-content-center search-box mt-3" style={{marginLeft: '25px'}}>  
   

   <strong>Search all columns:</strong> 
     
      <div style={{ position: 'relative' }}>
        <input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          style={{
            paddingLeft: '30px', // Add space to the left to make room for the icon
            width: '200px',
            boxSizing: 'border-box' // Ensure padding is included in width
          }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="1x"
          style={{
            position: 'absolute',
            left: '10px', // Position the icon inside the input field
            top: '50%',
            transform: 'translateY(-50%)', // Vertically center the icon
            pointerEvents: 'none' // Ensures the icon does not affect input field interaction
          }}
        />
      </div>
   
    </Row>    
    
    <Row className="mt-3">   
      <table>
    
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <th
                style={{ width: columnEl.getSize() }}
                  key={columnEl.id}
                  colSpan={columnEl.colSpan}
                >
                  {/* Render the Header Content */}
                  {columnEl.isPlaceholder
                    ? null
                    : flexRender(
                        columnEl.column.columnDef.header,
                        columnEl.getContext()
                      )}

                  {/* Sorting  */}
                  <span
                      
                       onClick={columnEl.column.getToggleSortingHandler()}
                  >
                    &nbsp;&nbsp;
                    {(() => {
                      const sortStatus = columnEl.column.getIsSorted();
                      if (sortStatus === 'asc') {
                        return <FontAwesomeIcon icon={faSortUp} size="2x" />;
                      } else if (sortStatus === 'desc') {
                        return <FontAwesomeIcon icon={faSortDown} size="2x" />;
                      } else {
                        return <FontAwesomeIcon icon={faSort} size="2x" />;
                      }
                    })()}
                  </span>

                  <div></div>

                  {/* Filtering  */}
                  {columnEl.column.getCanFilter() ? (
                    
                    <input
                     
                      value={columnEl.column.getFilterValue() ?? ''}
                      onChange={(e) => columnEl.column.setFilterValue(e.target.value)}
                      placeholder={`Filter ${columnEl.column.columnDef.header}`}
                      style={{ marginTop: '5px', width: '50%' }}
                    />
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => (
            <tr key={rowEl.id}>
              {rowEl.getVisibleCells().map((cellEl) => (
                <td key={cellEl.id}>
                  {flexRender(
                    cellEl.column.columnDef.cell,
                    cellEl.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
     </Row> 
      {/* Pagination */}
      <Row className="justify-content-center">   
      <div className="pagination">
      <Col md="auto">  
        <strong>
          Page{' '}
          {tableInstance.options.state.pagination.pageIndex} of{' '}
          {tableInstance.getPageCount() - 1}
        </strong>
        |
        </Col>  
        <Col md="auto"> 
          Go to page:
          <input
            className="pagination_button"
            type="text"
            value={tableInstance.options.state.pagination.pageIndex}
            onChange={(e) => tableInstance.setPageIndex(e.target.value)}
            style={{ width: '25px', height: '35px' }}
          />
         </Col>  
         <Col md="auto">
        <button
          className="pagination_button"
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {'<< Previous'}
        </button>
        </Col>  
        <Col md="auto">  
        <button
          className="pagination_button"
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          {'Next>>'}
        </button>
        </Col>  
        <Col md="auto"> 
        <select
          className="pagination_button"
          value={tableInstance.options.state.pagination.pageSize}
          onChange={(e) => tableInstance.setPageSize(e.target.value)}
        >
          {[10, 20, 50, 100].map((pageSizeEl) => {
            return (
              <option key={pageSizeEl} value={pageSizeEl}>
                Show {pageSizeEl}
              </option>
            );
          })}
        </select>
        </Col>
        
      </div>
      </Row> 
       </div>
    </Row> 
  );
};

export default JewelryOrdersTable;