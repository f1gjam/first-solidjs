import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Search,
  Columns3,
  Filter,
  GripVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface Athlete {
  rank: number;
  name: string;
  gender: "male" | "female";
  sport: "running" | "cycling";
  distance: number;
  outdoorDistance: number;
  indoorDistance: number;
  percentIndoor: number;
  elevation: number;
  outdoorElevation: number;
  indoorElevation: number;
  time: string;
  activities: number;
  longestRide: number;
}

interface LeaderboardTableProps {
  data: Athlete[];
  title: string;
}

export function LeaderboardTable({ data, title }: LeaderboardTableProps) {
  const isMobile = useIsMobile();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    outdoorDistance: !isMobile,
    indoorDistance: !isMobile,
    percentIndoor: !isMobile,
    outdoorElevation: !isMobile,
    indoorElevation: !isMobile,
    time: !isMobile,
    longestRide: !isMobile,
  });
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<ColumnDef<Athlete>[]>(
    () => [
      {
        accessorKey: "rank",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            #
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => {
          const rank = row.getValue("rank") as number;
          return (
            <div className="flex items-center gap-2">
              {rank <= 3 ? (
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full font-display font-bold text-sm",
                    rank === 1 && "bg-yellow-500/20 text-yellow-600",
                    rank === 2 && "bg-gray-400/20 text-gray-500",
                    rank === 3 && "bg-orange-600/20 text-orange-600"
                  )}
                >
                  {rank}
                </span>
              ) : (
                <span className="text-muted-foreground font-medium pl-1">
                  {rank}
                </span>
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Athlete
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span className="font-medium">{row.getValue("name")}</span>
        ),
      },
      {
        accessorKey: "distance",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Distance (mi)
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span className="text-primary font-semibold">
            {(row.getValue("distance") as number).toLocaleString()}
          </span>
        ),
      },
      {
        accessorKey: "outdoorDistance",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Outdoor Distance (mi)
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span>{(row.getValue("outdoorDistance") as number).toLocaleString()}</span>
        ),
      },
      {
        accessorKey: "indoorDistance",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Indoor Distance (mi)
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span>{(row.getValue("indoorDistance") as number).toLocaleString()}</span>
        ),
      },
      {
        accessorKey: "percentIndoor",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            % Indoor
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => {
          const value = row.getValue("percentIndoor") as number | undefined;
          return <span>{(value ?? 0).toFixed(1)}%</span>;
        },
      },
      {
        accessorKey: "elevation",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Elevation (m)
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span>{(row.getValue("elevation") as number).toLocaleString()}</span>
        ),
      },
      {
        accessorKey: "outdoorElevation",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Outdoor Elevation (m)
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span>{(row.getValue("outdoorElevation") as number).toLocaleString()}</span>
        ),
      },
      {
        accessorKey: "indoorElevation",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Indoor Elevation (m)
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span>{(row.getValue("indoorElevation") as number).toLocaleString()}</span>
        ),
      },
      {
        accessorKey: "time",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Time
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => <span>{row.getValue("time")}</span>,
      },
      {
        accessorKey: "activities",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Activities
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => <span>{row.getValue("activities")}</span>,
      },
      {
        accessorKey: "avgSpeed",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Avg Speed
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span>{(row.getValue("avgSpeed") as number).toFixed(1)} km/h</span>
        ),
      },
      {
        accessorKey: "longestRide",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Longest
            <SortIcon sorted={column.getIsSorted()} />
          </Button>
        ),
        cell: ({ row }) => (
          <span>{(row.getValue("longestRide") as number).toLocaleString()} km</span>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {/* Search */}
          <div className="relative flex-1 sm:flex-none sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search athletes..."
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Column Visibility */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="default" className="gap-2">
                <Columns3 className="h-4 w-4" />
                <span className="hidden sm:inline">Columns</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-popover">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    <GripVertical className="h-4 w-4 mr-2 text-muted-foreground" />
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="table-scroll">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-muted/50 hover:bg-muted/50">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="font-display uppercase text-xs tracking-wider whitespace-nowrap"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={cn(
                      "transition-colors",
                      index % 2 === 0 ? "bg-card" : "bg-muted/20"
                    )}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {table.getFilteredRowModel().rows.length} of {data.length} athletes
      </p>
    </div>
  );
}

function SortIcon({ sorted }: { sorted: false | "asc" | "desc" }) {
  if (sorted === "asc") return <ArrowUp className="ml-1 h-4 w-4" />;
  if (sorted === "desc") return <ArrowDown className="ml-1 h-4 w-4" />;
  return <ArrowUpDown className="ml-1 h-4 w-4 opacity-50" />;
}
