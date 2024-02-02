import {
    ColumnDef,
    flexRender,
    SortingState,
    useReactTable,
    VisibilityState,
    getCoreRowModel,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
    getPaginationRowModel,
  } from "@tanstack/react-table"
   
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import React from "react"
import { DataTablePagination } from "./Pagination"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { DialogCompany } from "../Dialog/CreateCompanty"

   
  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

   
  export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})


    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      
      state: {
        sorting,
        columnFilters,
        columnVisibility,
      },
    })
   
    return (
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl "> 

    <div className="hidden h-full flex-1 flex-col p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
              <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
              </p>
          </div>
           <DialogCompany/>
        </div>
        {/* Search */}
        <div className="flex items-center py-4 pt-12">
            <Input
            placeholder="Filter emails..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
            />
          {/* Colums */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
              <MixerHorizontalIcon className="mr-2 h-4 w-4" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
              {table
                .getAllColumns()
                .filter(
                  (column) => column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <div className="rounded-md border">

              <Table className="">
              <TableHeader className=''>
                  {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                      return (
                          <TableHead key={header.id}>
                          {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                              )}
                          </TableHead>
                      )
                      })}
                  </TableRow>
                  ))}
              </TableHeader>
              <TableBody>
                  {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                      <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      >
                      {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                      ))}
                      </TableRow>
                  ))
                  ) : (
                  <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                      </TableCell>
                  </TableRow>
                  )}
              </TableBody>
              </Table>
          </div>
          <DataTablePagination table={table} />
      </div> 
    </div>
    )
  }